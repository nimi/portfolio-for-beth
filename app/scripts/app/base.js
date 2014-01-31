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

