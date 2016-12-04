(function () {
	// Modul
	var app = angular.module('gemStore', []);

	// Controllers:
	// StoreController(store)
	app.controller('StoreController', function () {
		this.product = gem;
	});

	// PanelController(panel)
	app.controller('PanelController', function () {
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	// ReviewController(reviewCTRL)
	app.controller('ReviewController', function () {
		this.review = {};
		console.log('review mi radi');

		this.addReview = function(product) {
			// body...
			console.log('review i funkcija product mi radi');
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	// Variables
	var gem = {
		name: 'Pentagonal Gem',
		price: 5.95,
		description: '...',
		canPurchase: true,
		soldOut: false,
		reviews: [
		{
			stars: 5,
			body: "I love this product!",
			author: "joe@thomas.com"
		},
		{
			stars: 1,
			body: "This product sucks",
			author: "tim@hater.com"
		}
		]
	};
})();

