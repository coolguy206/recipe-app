!function(){function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}return a}()({1:[function(a,b,c){"use strict";b.exports="1aad54a0e3e345b998872e1be7cb5603"},{}],2:[function(a,b,c){"use strict";var d=a("./log.js");b.exports=function(a,b){d("get.js"),$.get(a,function(a){var c=a;d(c),b(c)})}},{"./log.js":3}],3:[function(a,b,c){"use strict";b.exports=function(a){console.log(a)}},{}],4:[function(a,b,c){"use strict";var d=a("./log.js");b.exports=function(a,b,c){d("make-list.js"),d(a);var e=document.createElement("UL"),f="";$.each(a,function(a,b){var c=b.title,d=b.servings,e=b.readyInMinutes,g=b.id,h="https://spoonacular.com/recipeImages/".concat(g,"-636x393.jpg"),i='\n      <li>\n        <div class="overlay"></div>\n        <a href="#/recipe/'.concat(g,'" data-id="').concat(g,'" class="recipe">\n          <img src=').concat(h,' alt="').concat(c,'" title="').concat(c,'">\n          <div>\n            <h2>').concat(c,"</h2>\n            <p>Cook time: ").concat(e," min</p>\n            <p>Servings: ").concat(d,"</p>\n          </div>\n        </a>\n      </li>\n      ");f+=i}),$(e).addClass(b),$(e).append(f),$(c).html(e)}},{"./log.js":3}],5:[function(a,b,c){"use strict";var d=a("./get.js"),e=a("./log.js"),f=a("./api.js"),g=(a("./make-list.js"),a("./make-similar-recipes.js"));b.exports=function(a){e("make-pdp.js"),e(a),$(".header").addClass("pdp"),$(".homepage").hide(),$(".main .pdp, .search").empty(),window.scrollTo(0,0);var b=a.id,c=a.title,h=a.servings,i=a.readyInMinutes,j=(a.preparationMinutes,a.imageType),k="https://spoonacular.com/recipeImages/".concat(b,"-556x370.").concat(j),l=a.glutenFree;l=1==l?"yes":"no";var m=[];$.each(a.extendedIngredients,function(a,b){var c="https://spoonacular.com/cdn/ingredients_250x250/",d={string:b.original,image:c+b.image};m.push(d)});var n=[];$.each(a.analyzedInstructions[0].steps,function(a,b){n.push(b.step)});var o='\n        <div>\n            <img src="'.concat(k,'" alt="').concat(c,'" title="').concat(c,'">\n        </div>\n\n        <div>\n           <h2>').concat(c,"</h2>\n            <p>Servings: ").concat(h,"</p>\n           <p>Cook time: ").concat(i," min</p>\n           <p>Gluten Free: ").concat(l,'</p>\n           <h3>Ingredients</h3>\n           <ul class="ingredients"></ul>\n           <h3>Steps</h3>\n           <ol class="steps"></ol>\n        </div>\n           \n        <div class="similar-recipes"></div>\n     ');$(".main .pdp").html(o),$.each(m,function(a,b){var c="<li>".concat(b.string,"</li>");$(".ingredients").append(c)}),$.each(n,function(a,b){var c="<li>".concat(b,"</li>");$(".steps").append(c)});var p=[];if(void 0!==a.winePairing.pairedWines){$.each(a.winePairing.pairedWines,function(a,b){p.push(b)});var q={text:a.winePairing.pairingText,wineList:p},r='\n            <h3>Wine Pairing</h3>\n            <ul class="wines"></ul>\n            <p>'.concat(q.text,"</p>\n        ");$(".steps").after(r),$.each(q.wineList,function(a,b){var c="<li>".concat(b,"</li>");$(".wines").append(c)})}var s="https://api.spoonacular.com/recipes/".concat(b,"/similar?apiKey=").concat(f,"&number=4");d(s,g)}},{"./api.js":1,"./get.js":2,"./log.js":3,"./make-list.js":4,"./make-similar-recipes.js":6}],6:[function(a,b,c){"use strict";var d=a("./get.js"),e=a("./api.js"),f=a("./log.js"),g=a("./make-list.js"),h=a("./make-pdp.js");b.exports=function(a){f("make-similar-recipes.js"),f(a);var b="<h2>Similar Recipes</h2>";g(a,"null",".similar-recipes"),$(".similar-recipes").prepend(b),$(".similar-recipes").find("a").click(function(a){f("similar recipes click"),a.preventDefault();var b=$(this).attr("data-id"),c="https://api.spoonacular.com/recipes/".concat(b,"/information?apiKey=").concat(e);f(c),d(c,h)})}},{"./api.js":1,"./get.js":2,"./log.js":3,"./make-list.js":4,"./make-pdp.js":5}]},{},[6]);