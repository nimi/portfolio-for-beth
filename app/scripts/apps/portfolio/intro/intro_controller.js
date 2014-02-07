App.module('PortfolioApp.Intro', function(Intro, App, Backone, Marionette, $, _) {

	Intro.Controller = {
		showIntro: function() {
			introView = this.getIntroView();
			App.introRegion.show(introView);
		},
		getIntroView: function() {
			this.introView = new Intro.View({});
			return this.introView;
		}
	};

});