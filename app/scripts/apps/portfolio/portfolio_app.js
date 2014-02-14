App.module('PortfolioApp', function(PortfolioApp, App, Backbone, Marionette, $, _) {

	var API = {
		showIntro: function() {
			PortfolioApp.Intro.Controller.showIntro();
		},
		showAbout: function() {
			PortfolioApp.About.Controller.showAbout();
		},
		showWork: function() {
			PortfolioApp.Work.Controller.showWork();
		},
		showContact: function() {
			PortfolioApp.Contact.Controller.showContact();
		}
	};

	PortfolioApp.on('start', function() {
		API.showIntro();
		API.showAbout();
		API.showWork();
		API.showContact();
	});

});