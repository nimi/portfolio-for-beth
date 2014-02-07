App.module('NavApp', function(NavApp, App, Backbone, Marionette, $, _) {

    this.startWithParent = false;

    var API = {
        listNav: function() {
            NavApp.List.Controller.listNav();
        }
    };

    NavApp.on('start', function() {
        API.listNav();
    });

});