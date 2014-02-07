App.module('PortfolioApp', function(PortfolioApp, App, Backbone, Marionette, $, _) {

	var API = {
		showIntro: function() {
			PortfolioApp.Intro.Controller.showIntro();
		},
		showAbout: function() {
			PortfolioApp.About.Controller.showAbout();
		}
	};

	PortfolioApp.on('start', function() {
		API.showIntro();
		API.showAbout();
	});

});