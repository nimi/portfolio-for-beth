this["JST"] = this["JST"] || {};

this["JST"]["app/templates/about.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"about-content\">\n  	<div class=\"container\">\n  		<div class=\"row\">\n  	  			<div class=\"col-sm-9\">\n	 			<h1>About Me</h1>\n	  			<h2>Some Subheading</h2>\n				<p>IPhone twee organic, Odd Future Intelligentsia street art fashion axe. Intelligentsia small batch authentic butcher vinyl, salvia cardigan church-key wolf Banksy YOLO hella you probably haven't heard of them cornhole kogi. Ethical viral asymmetrical Schlitz keffiyeh. Sartorial kale chips hashtag mixtape mustache mumblecore.</p>\n				<p>Odd Future seitan, shabby chic iPhone Marfa. Leggings fap yr Pinterest Williamsburg. Godard try-hard typewriter shabby chic Truffaut. Paleo meggings selvage, twee fashion axe Thundercats typewriter Shoreditch cred viral disrupt.</p>\n				<p>IPhone twee organic, Odd Future Intelligentsia street art fashion axe. Intelligentsia small batch authentic butcher vinyl, salvia cardigan church-key wolf Banksy YOLO hella you probably haven't heard of them cornhole kogi. Ethical viral asymmetrical Schlitz keffiyeh. Sartorial kale chips hashtag mixtape mustache mumblecore.</p>\n				<p>Odd Future seitan, shabby chic iPhone Marfa. Leggings fap yr Pinterest Williamsburg. Godard try-hard typewriter shabby chic Truffaut. Paleo meggings selvage, twee fashion axe Thundercats typewriter Shoreditch cred viral disrupt.</p>\n			</div>\n		</div>\n	</div>\n</div>";
  });

this["JST"]["app/templates/contact.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"contact-content\">\n  <h1>Contact</h1>\n</div>";
  });

this["JST"]["app/templates/intro.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<div class=\"intro-image\">\n</div>\n<h1>\n	<span data-shadow-text=\"Beth Weidl\">Beth Weidl</span><br />community manager / writer\n</h1>";
  });

this["JST"]["app/templates/nav.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"#";
  if (stack1 = helpers.elementid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.elementid); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>";
  return buffer;
  });

this["JST"]["app/templates/navs.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"nav-header\">\n    <h2>Beth<br />Weidl</h2>\n</div>\n<nav>\n    <ul class=\"nav nav-stacked\" id=\"nav-intro\"></ul>\n</nav>";
  });

this["JST"]["app/templates/work.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"work-content\">\n  	<div class=\"container\">\n  		<div class=\"row\">\n  			<div class=\"col-xs-10\">\n  				<h2>Selected Work</h2>\n			</div>\n  	  		<div class=\"col-xs-5 project-item\">\n			</div>\n  	  		<div class=\"col-xs-5 project-item\">\n			</div>\n			<div class=\"col-xs-5 project-item\">\n			</div>\n			<div class=\"col-xs-5 project-item\">\n			</div>\n			<div class=\"col-xs-5 project-item\">\n			</div>\n			<div class=\"col-xs-5 project-item\">\n			</div>\n		</div>\n	</div>\n</div>";
  });