this["JST"] = this["JST"] || {};

this["JST"]["app/templates/about.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"about-content\">\n  <h1>About</h1>\n</div>";
  });

this["JST"]["app/templates/contact.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"intro-content\">\n  <h1>Contact</h1>\n</div>";
  });

this["JST"]["app/templates/intro.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<div class=\"intro-image\">\n</div>\n<div class=\"intro-content\">\n  <h1>Elizabeth Weidl</h1>\n  <h3>community manager/writer/content strategist</h3>\n</div>";
  });

this["JST"]["app/templates/skill-item.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span class=\"skill-name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n<span class=\"skill-rating\">\n  <div class=\"progress\">  \n    <div class=\"progress-bar\" role=\"progressbar\" data-percent=\"";
  if (stack1 = helpers.percent) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.percent); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n  </div>\n</div></div>\n</span>";
  return buffer;
  });

this["JST"]["app/templates/skills.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<div class=\"skills-intro\">\n  <h3 class=\"sm-header\">Skills &amp; Strengths</h3>\n  <p>I'm happiest when I'm creating engaging and intuitive experiences for people on the web.</p>\n  <p>I work best when I can focus on <b>exceptional design</b>, <b>user experience</b>, and <b>semantic code</b>.</p>\n  <p>I love building responsive, mobile-friendly web apps with Backbone &amp; Marionette, though I've built a few Django and Wordpress sites, too!</p>\n  <p></p>\n  <div class=\"filters\">\n    <span class=\"label label-info\" data-label=\"markup\">\n      <i class=\"fa fa-tag\"></i> Semantic Markup\n    </span>\n    <span class=\"label label-success\" data-label=\"markup\">\n      <i class=\"fa fa-tag\"></i>  JavaScript\n    </span>\n    <span class=\"label label-warning\" data-label=\"markup\">\n      <i class=\"fa fa-tag\"></i>  Backend / DevTools\n    </span>\n    <span class=\"label label-danger\" data-label=\"markup\">\n      <i class=\"fa fa-tag\"></i> Misc\n    </span>\n    <span class=\"label label-primary\" data-label=\"markup\">\n      <i class=\"fa fa-tag\"></i> Front End\n    </span>\n  </div>\n</div>\n<div class=\"skills-list-block\">\n  <div class=\"skills-list\"></div>\n</div>";
  });

this["JST"]["app/templates/work.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"work-content\">\n  <h1>Work</h1>\n</div>";
  });