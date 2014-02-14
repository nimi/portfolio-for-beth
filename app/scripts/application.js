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

;App.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {

	Entities.Nav = Backbone.Model.extend({});

	Entities.NavCollection = Backbone.Collection.extend({
		model: Entities.Nav
	});

	var API = {

		getNavs: function() {
			return new Entities.NavCollection([
				{ name: 'Home', elementid: 'home'},
				{ name: 'About', elementid: 'about'},
				{ name: 'Selected Work', elementid: 'work'},
				{ name: 'Contact', elementid: 'contact'}
			]);
		}

	};

	App.reqres.setHandler('nav:entities', function() {
		return API.getNavs();
	});

});;App.module('NavApp', function(NavApp, App, Backbone, Marionette, $, _) {

    this.startWithParent = false;

    var API = {
        listNav: function() {
            NavApp.List.Controller.listNav();
        }
    };

    NavApp.on('start', function() {
        API.listNav();
    });

});;App.module('NavApp.List', function(List, App, Backbone, Marionette, $, _) {

	List.Nav = Marionette.ItemView.extend({
		template: 'nav',
		tagName: 'li'
	});

	List.Navs = Marionette.CompositeView.extend({
		template: 'navs',
		itemView: List.Nav,
		itemViewContainer: 'ul'
	});

});;App.module('NavApp.List', function(List, App, Backbone, Marionette, $, _) {

	List.Controller = {

		listNav: function() {
			var links = App.request('nav:entities'),
				navView = this.getNavView(links);
			App.navRegion.show(navView);
		},

		getNavView: function(links) {
			this.navView = new List.Navs({
				collection: links
			});
			return this.navView;
		}

	};

});;App.module('PortfolioApp', function(PortfolioApp, App, Backbone, Marionette, $, _) {

	var API = {
		showIntro: function() {
			PortfolioApp.Intro.Controller.showIntro();
		},
		showAbout: function() {
			PortfolioApp.About.Controller.showAbout();
		},
		showWork: function() {
			PortfolioApp.Work.Controller.showWork();
		},
		showContact: function() {
			PortfolioApp.Contact.Controller.showContact();
		}
	};

	PortfolioApp.on('start', function() {
		API.showIntro();
		API.showAbout();
		API.showWork();
		API.showContact();
	});

});;App.module('PortfolioApp.Intro', function(Intro, App, Backbone, Marionette, $, _) {

    // Can I add a controller to getLayoutView? Is this necessary?
    Intro.View = Marionette.ItemView.extend({
        template: 'intro',
        className: 'intro-block',

        onRender: function() {
        },
        onShow: function() {
        },

    });

});;App.module('PortfolioApp.Intro', function(Intro, App, Backone, Marionette, $, _) {

	Intro.Controller = {
		showIntro: function() {
			introView = this.getIntroView();
			App.introRegion.show(introView);
		},
		getIntroView: function() {
			this.introView = new Intro.View({});
			return this.introView;
		}
	};

});;App.module('PortfolioApp.About', function(About, App, Backbone, Marionette, $, _) {
    About.View = Marionette.ItemView.extend({
        template: 'about',
        className: 'about-block',

        onRender: function() {
        },

        transitionIn: function() {
        }
    });
});;App.module('PortfolioApp.About', function(About, App, Backone, Marionette, $, _) {

	About.Controller = {
		showAbout: function() {
			aboutView = this.getAboutView();
			App.aboutRegion.show(aboutView);
		},
		getAboutView: function() {
			this.aboutView = new About.View({});
			return this.aboutView;
		}
	};

});;App.module('PortfolioApp.Work', function(Work, App, Backbone, Marionette, $, _) {
    Work.View = Marionette.ItemView.extend({
        template: 'work',
        className: 'work-block',

        onRender: function() {
        },

        transitionIn: function() {
        }
    });
});;App.module('PortfolioApp.Work', function(Work, App, Backone, Marionette, $, _) {

	Work.Controller = {
		showWork: function() {
			workView = this.getWorkView();
			App.workRegion.show(workView);
		},
		getWorkView: function() {
			this.workView = new Work.View({});
			return this.workView;
		}
	};

});;App.module('PortfolioApp.Contact', function(Contact, App, Backbone, Marionette, $, _) {
    Contact.View = Marionette.ItemView.extend({
        template: 'contact',
        className: 'contact-block',

        onRender: function() {
        },

        transitionIn: function() {
        }
    });
});;App.module('PortfolioApp.Contact', function(Contact, App, Backone, Marionette, $, _) {

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