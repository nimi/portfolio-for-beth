App.module('PortfolioApp.Work', function(Work, App, Backone, Marionette, $, _) {

	Work.Controller = {
		showWork: function() {
			workView = this.getWorkView();
			App.workRegion.show(workView);
		},
		getWorkView: function() {
			this.workView = new Work.View({});
			return this.workView;
		}
	};

});