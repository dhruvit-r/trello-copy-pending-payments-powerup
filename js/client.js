/* global TrelloPowerUp */
var Promise = TrelloPowerUp.Promise;

window.TrelloPowerUp.initialize({
	'list-actions': function (t) {
		return t.list('id', 'name', 'cards')
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