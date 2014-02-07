App.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {

	Entities.Nav = Backbone.Model.extend({});

	Entities.NavCollection = Backbone.Collection.extend({
		model: Entities.Nav
	});

	var API = {

		getNavs: function() {
			return new Entities.NavCollection([
				{ name: 'Home', elementid: 'home'},
				{ name: 'About', elementid: 'about'},
				{ name: 'Selected Work', elementid: 'work'},
				{ name: 'Contact', elementid: 'contact'}
			]);
		}

	};

	App.reqres.setHandler('nav:entities', function() {
		return API.getNavs();
	});

});