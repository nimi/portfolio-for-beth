App.module('PortfolioApp.Intro', function(Intro, App, Backbone, Marionette, $, _) {

    // Can I add a controller to getLayoutView? Is this necessary?
    Intro.View = Marionette.ItemView.extend({
        template: 'intro',
        className: 'intro-block',

        onRender: function() {
        },
        onShow: function() {
        },

    });

});