this.App = (function(Backbone, Marionette) {

    var App, Router, API;


    _.extend(Marionette.Renderer, {

        path: 'app/templates/',

        render: function(template, data) {
            var path = this.getTemplate(template);
            if(!path) {
                $.error('Nooooo, template ' + template + ' not found!');
                return;
            }
            return path(data);
        },
    
        getTemplate: function(template) {
            return JST[this.path + template + '.hbs'];
        }
    });

    App = new Marionette.Application();

    //App.reqres = new Backbone.Wreqr.RequestResponse();


    App.addRegions({
        navRegion: '#nav-region',
        introRegion: '#intro-region',
        aboutRegion: '#about-region',
        workRegion: '#work-region',
        contactRegion: '#contact-region'
    });


    App.addInitializer(function() {
        App.module('NavApp').start();
    });

    //Why are regions added on 'initialize after'? Where is history?
    //Is history necessary?
    App.on('initialize:after', function() {

        if (Backbone.history) {
            Backbone.history.start();
        }

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

