App.module('Views', function(Views, App, Backbone, Marionette, $, _) {

  /** VIEWS **
  * Each section of the site is it's own view.
  * In a larger-scale app, this would be broken down into
  * individual files, one for each view/controller,
  * and a module would be defined as it's component, such as "About".
  * The module "About", would then contain it's respective View & Controller,
  * properly encapsulating all of it's unique requirements from the rest of the app.
  * Yay modularity! :)
  */

    'use strict';

    Views.IntroView = Marionette.ItemView.extend({
        template: 'intro',
        className: 'intro-block',

        onRender: function() {
        },
        onShow: function() {
            App.initializeSwiper();
        },

    });

    Views.AboutView = Marionette.ItemView.extend({
        template: 'about',
        className: 'about-block',

        onRender: function() {

        },

        transitionIn: function() {

        }
    });

    Views.WorkView = Marionette.ItemView.extend({
        template: 'work',
        className: 'work-block',

        onShow: function() {
        },

        transitionIn: function() {
        }
    });

    Views.ContactView = Marionette.ItemView.extend({
        template: 'contact',
        className: 'contact-block',

        events: {

        },

        showLabel: function(evt) {

        },

        hideLabels: function() {
        }
    });
});