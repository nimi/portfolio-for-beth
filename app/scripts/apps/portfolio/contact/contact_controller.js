App.module('PortfolioApp.Contact', function(Contact, App, Backone, Marionette, $, _) {

	Contact.Controller = {
		showContact: function() {
			contactView = this.getContactView();
			App.contactRegion.show(contactView);
		},
		getContactView: function() {
			this.contactView = new Contact.View({});
			return this.contactView;
		}
	};

});