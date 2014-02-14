App.module('PortfolioApp.Contact', function(Contact, App, Backbone, Marionette, $, _) {
    Contact.View = Marionette.ItemView.extend({
        template: 'contact',
        className: 'contact-block',

        onRender: function() {
        },

        transitionIn: function() {
        }
    });
});