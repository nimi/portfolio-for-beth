App.module('PortfolioApp.About', function(About, App, Backbone, Marionette, $, _) {
    About.View = Marionette.ItemView.extend({
        template: 'about',
        className: 'about-block',

        onRender: function() {
        },

        transitionIn: function() {
        }
    });
});