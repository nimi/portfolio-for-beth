App.module('PortfolioApp.Work', function(Work, App, Backbone, Marionette, $, _) {
    Work.View = Marionette.ItemView.extend({
        template: 'work',
        className: 'work-block',

        onRender: function() {
        },

        transitionIn: function() {
        }
    });
});