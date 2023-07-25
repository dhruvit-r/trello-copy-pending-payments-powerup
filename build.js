import * as esbuild from 'esbuild';
import fs from 'fs/promises';

function genRanHex (size) {
  return [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
} 

const hash = genRanHex(8);

esbuild.build({
  entryPoints: ['src/js/client.js'],
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: `dist/js/client.${hash}.js`,
  plugins: [
    {
      name: 'replace-html',
      setup(build) {
        build.onStart(async () => {
          await fs.rm('dist', { recursive: true, force: true });
        });
        build.onEnd(async (args) => {
          const html = await fs.readFile('src/index.html', 'utf8');
          const result = html.replace('client.js', `client.${hash}.js`);
          return fs.writeFile('dist/index.html', result);
        });
      }
    }
  ]
});
