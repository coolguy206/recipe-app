!function(){function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}return a}()({1:[function(a,b,c){"use strict";b.exports="1aad54a0e3e345b998872e1be7cb5603"},{}],2:[function(a,b,c){"use strict";var d=a("./log.js");b.exports=function(a,b){d("get.js"),$.get(a,function(a){var c=a;d(c),b(c)})}},{"./log.js":4}],3:[function(a,b,c){"use strict";var d=a("./log.js");b.exports=function(a){d("hover-list.js"),$(a).hover(function(){$(this).find(".overlay").addClass("hide")},function(){$(this).find(".overlay").removeClass("hide")})}},{"./log.js":4}],4:[function(a,b,c){"use strict";b.exports=function(a){console.log(a)}},{}],5:[function(a,b,c){"use strict";var d=a("./log.js");b.exports=function(a,b,c){d("make-list.js"),d(a);var e=document.createElement("UL"),f="";$.each(a,function(a,b){var c=b.title,d=b.id,e="https://spoonacular.com/recipeImages/".concat(d,"-636x393.jpg"),g='\n      <li>\n        <div class="overlay"></div>\n        <a href="#/recipe/'.concat(d,'" data-id="').concat(d,'" class="recipe">\n          <img src=').concat(e,' alt="').concat(c,'" title="').concat(c,'">\n        </a>\n      </li>\n      ');f+=g}),$(e).addClass(b),$(e).append(f),$(c).html(e)}},{"./log.js":4}],6:[function(a,b,c){"use strict";var d=a("./get.js"),e=a("./log.js"),f=a("./api.js"),g=(a("./make-list.js"),a("./hover-list.js"),a("./make-similar-recipes.js"));b.exports=function(a){e("make-pdp.js"),e(a),$(".header").addClass("pdp"),$(".homepage").hide(),$(".main .pdp, .search").empty(),window.scrollTo(0,0);var b=a.id,c=a.title,h=a.servings,i=a.readyInMinutes,j=(a.preparationMinutes,a.image),k=a.glutenFree;k=1==k?"yes":"no";var l=[];$.each(a.extendedIngredients,function(a,b){var c="https://spoonacular.com/cdn/ingredients_250x250/",d={string:b.original,image:c+b.image};l.push(d)});var m=[];$.each(a.analyzedInstructions[0].steps,function(a,b){m.push(b.step)});var n='\n        <div>\n            <img src="'.concat(j,'" alt="').concat(c,'" title="').concat(c,'">\n        </div>\n\n        <div>\n           <h2>').concat(c,"</h2>\n            <p>Servings: ").concat(h,"</p>\n           <p>Cook time: ").concat(i," min</p>\n           <p>Gluten Free: ").concat(k,'</p>\n           <h3>Ingredients</h3>\n           <ul class="ingredients"></ul>\n           <h3>Steps</h3>\n           <ol class="steps"></ol>\n        </div>\n           \n        <div class="similar-recipes"></div>\n     ');$(".main .pdp").html(n),$.each(l,function(a,b){var c="<li>".concat(b.string,"</li>");$(".ingredients").append(c)}),$.each(m,function(a,b){var c="<li>".concat(b,"</li>");$(".steps").append(c)});var o=[];if(void 0!==a.winePairing.pairedWines){$.each(a.winePairing.pairedWines,function(a,b){o.push(b)});var p={text:a.winePairing.pairingText,wineList:o},q='\n            <h3>Wine Pairing</h3>\n            <ul class="wines"></ul>\n            <p>'.concat(p.text,"</p>\n        ");$(".steps").after(q),$.each(p.wineList,function(a,b){var c="<li>".concat(b,"</li>");$(".wines").append(c)})}var r="https://api.spoonacular.com/recipes/".concat(b,"/similar?apiKey=").concat(f,"&number=4");d(r,g)}},{"./api.js":1,"./get.js":2,"./hover-list.js":3,"./log.js":4,"./make-list.js":5,"./make-similar-recipes.js":8}],7:[function(a,b,c){"use strict";var d=a("./get.js"),e=a("./api.js"),f=a("./log.js"),g=a("./make-list.js"),h=(a("./hover-list.js"),a("./make-pdp.js"));b.exports=function(a){f("make-search.js"),f(a),$(".header").addClass("pdp"),$(".homepage").hide(),$(".main .pdp").empty(),g(a.results,"search-list",".main .search"),$(".search-list a").click(function(a){f("search list click"),a.preventDefault();var b=$(this).attr("data-id"),c="https://api.spoonacular.com/recipes/".concat(b,"/information?apiKey=").concat(e);f(c),d(c,h)})}},{"./api.js":1,"./get.js":2,"./hover-list.js":3,"./log.js":4,"./make-list.js":5,"./make-pdp.js":6}],8:[function(a,b,c){"use strict";var d=a("./get.js"),e=a("./api.js"),f=a("./log.js"),g=a("./make-list.js"),h=a("./hover-list.js"),i=a("./make-pdp.js");b.exports=function(a){f("make-similar-recipes.js"),f(a);var b="<h2>Similar Recipes</h2>";g(a,"hp",".similar-recipes"),$(".similar-recipes").prepend(b),h(".hp li"),$(".similar-recipes").find("a").click(function(a){f("similar recipes click"),a.preventDefault();var b=$(this).attr("data-id"),c="https://api.spoonacular.com/recipes/".concat(b,"/information?apiKey=").concat(e);f(c),d(c,i)})}},{"./api.js":1,"./get.js":2,"./hover-list.js":3,"./log.js":4,"./make-list.js":5,"./make-pdp.js":6}],9:[function(a,b,c){"use strict";var d=a("./get.js"),e=a("./api.js"),f=a("./log.js"),g=a("./make-search.js");b.exports=function(){f("search-click.js"),$(".main .search").empty();var a=$(".header input").val();f(a);var b="https://api.spoonacular.com/recipes/search?apiKey=".concat(e,"&query=").concat(a,"&number=10");d(b,g)}},{"./api.js":1,"./get.js":2,"./log.js":4,"./make-search.js":7}]},{},[9]);