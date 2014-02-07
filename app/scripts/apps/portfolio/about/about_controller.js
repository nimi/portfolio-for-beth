App.module('PortfolioApp.About', function(About, App, Backone, Marionette, $, _) {

	About.Controller = {
		showAbout: function() {
			aboutView = this.getAboutView();
			App.aboutRegion.show(aboutView);
		},
		getAboutView: function() {
			this.aboutView = new About.View({});
			return this.aboutView;
		}
	};

});