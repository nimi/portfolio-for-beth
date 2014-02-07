App.module('NavApp.List', function(List, App, Backbone, Marionette, $, _) {

	List.Nav = Marionette.ItemView.extend({
		template: 'nav',
		tagName: 'li'
	});

	List.Navs = Marionette.CompositeView.extend({
		template: 'navs',
		itemView: List.Nav,
		itemViewContainer: 'ul'
	});

});