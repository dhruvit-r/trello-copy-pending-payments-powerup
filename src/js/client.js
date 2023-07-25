/* global TrelloPowerUp */
var Promise = TrelloPowerUp.Promise;

window.TrelloPowerUp.initialize({
  'list-actions': function (t) {
    return t.list('name', 'id', 'cards')
      .then(function (list) {
        return [{
          text: "Get Pending Payment List",
          callback: function (t) {
            const copyText = list.cards
              .filter(card => card.labels.some(label => label.name === 'Payment Pending'))
              .map(card => card.name)
              .reduce((acc, card) => acc + card + '\n', '');
            console.log(copyText);
            navigator.clipboard.writeText(copyText)
              .then(() => {
                // Inform the user the text has been copied
                t.alert({
                  message: 'Copied to clipboard!',
                  display: 'info',
                  duration: 3
                });
              });
          }
        }];
      });
  }
});
