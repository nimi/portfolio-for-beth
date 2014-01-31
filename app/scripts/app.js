this.App = (function(Backbone, Marionette) {
    
    'use strict';

    var App, Router, API;


    _.extend(Marionette.Renderer, {

        path: 'app/templates/',

        render: function(template, data) {
            var path = this.getTemplate(template);
            if(!path) {
                $.error('Template ' + template + ' not found!');
                return;
            }
            return path(data);
        },
    
        getTemplate: function(template) {
            return JST[this.path + template + '.hbs'];
        }
    });

    App = new Marionette.Application();

    App.reqres = new Backbone.Wreqr.RequestResponse();


    App.on('initialize:after', function() {

        App.addRegions({
            introRegion: '#intro-region',
            aboutRegion: '#about-region',
            skillsRegion: '#skills-region',
            workRegion: '#work-region',
            contactRegion: '#contact-region'
        });

        var swiper = null;

        App.initializeSwiper = function() {
            swiper = new Swiper('.swiper-container', {
                //Options
                mode:'horizontal',
                loop: true,
                loopedSlides: 1,
                slidesPerView: 1,
                mousewheelControlForceToAxis: true,
                onSlideChangeEnd:function(swiper){
                    //or here
                    //swiper.fixLoop();
                }
            });
        };
    
        App.introRegion.show(new App.Views.IntroView());
        App.aboutRegion.show(new App.Views.AboutView());
        App.workRegion.show(new App.Views.WorkView());
        App.contactRegion.show(new App.Views.ContactView());

        App.initializeSwiper();

        // ScrollTop on menu click --- Add nav functionality
        $('.nav a').on('click', function(evt) {
            var $target = $($(this).attr('href'));
            
            evt.preventDefault();
            swiper.swipeNext();
        });

    });
  
    return App;

})(Backbone, Marionette);

;;App.module('Views', function(Views, App, Backbone, Marionette, $, _) {

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

        onShow: function() {

        },

        //showLabel: function(evt) {},
        //hideLabels: function() {}
    });
});;    /** CONTROLLERS **
  * Controllers are a great way to pre-fetch dependencies
  * before rendering a view. It's also a great place to set up
  * events and request handlers specific for that section.
  * Because this is a single-page tiny site, we're clumping
  * our controllers together.
  *
  * In a large-scale app, modules would be defined by their component (ie, "About")
  * and all respective Views and Controllers would be included there.
  *
  * Controllers are awesome because they allow us more fine-grained control
  * with how we deliver views + data to our users. Here we can handle what we
  * might do if there is no data, for example, we might serve an entirely different view.
  */