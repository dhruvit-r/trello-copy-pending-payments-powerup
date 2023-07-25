/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';

window.TrelloPowerUp.initialize({
	'list-actions': function (t) {
		return t.list('name', 'id')
			.then(function (list) {
				return [{
					text: "Get Pending Payment List",
					callback: function (t) {
						console.log(t, list)
					}
				}];
			});
	}
});