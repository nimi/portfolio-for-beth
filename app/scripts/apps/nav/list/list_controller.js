App.module('NavApp.List', function(List, App, Backbone, Marionette, $, _) {

	List.Controller = {

		listNav: function() {
			var links = App.request('nav:entities'),
				navView = this.getNavView(links);
			App.navRegion.show(navView);
		},

		getNavView: function(links) {
			this.navView = new List.Navs({
				collection: links
			});
			return this.navView;
		}

	};

});