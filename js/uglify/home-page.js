!function(){function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}return a}()({1:[function(a,b,c){"use strict";b.exports="1aad54a0e3e345b998872e1be7cb5603"},{}],2:[function(a,b,c){"use strict";a("./log.js");b.exports=function(a,b){$.get(a,function(a){var c=a;b(c)})}},{"./log.js":4}],3:[function(a,b,c){"use strict";var d=(a("./get.js"),a("./log.js")),e=a("./api.js");b.exports=function(a){console.log("home-page.js"),d(a);var b=document.createElement("UL"),c="";$.each(a.recipes,function(a,b){var d=b.image,e=b.title,f=b.id,g='\n      <li>\n        <div class="overlay"></div>\n        <a href="#/recipe/'.concat(f,'" data-id="').concat(f,'" class="recipe">\n          <img src=').concat(d,' alt="').concat(e,'" title="').concat(e,'">\n        </a>\n      </li>\n      ');c+=g}),$(b).addClass("hp"),$(b).append(c),$(".homepage").html(b),$(".hp li").hover(function(){$(this).find(".overlay").addClass("hide")},function(){$(this).find(".overlay").removeClass("hide")}),$(".recipe").click(function(a){a.preventDefault();var b=$(this).attr("data-id"),c="https://api.spoonacular.com/recipes/".concat(b,"/information?apiKey=").concat(e);d(c),$.get(c,function(a){console.log(a),$(".header").addClass("pdp"),$(".homepage").hide();var c=a.title,f=a.servings,g=a.readyInMinutes,h=a.preparationMinutes,i=a.image,j=a.glutenFree;j=1==j?"yes":"no";var k=[];$.each(a.extendedIngredients,function(a,b){var c="https://spoonacular.com/cdn/ingredients_250x250/",d={string:b.original,image:c+b.image};k.push(d)});var l=[];$.each(a.analyzedInstructions[0].steps,function(a,b){l.push(b.step)}),d(c),d(f),d(g),d(h),d(i),d(j),d(k),d(l);var m='\n          <div>\n          <img src="'.concat(i,'" alt="').concat(c,'" title="').concat(c,'">\n          </div>\n          <div>\n           <h2>').concat(c,"</h2>\n          <p>Servings: ").concat(f,"</p>\n           <p>Cook time: ").concat(g," min</p>\n           <p>Gluten Free: ").concat(j,'</p>\n           <h3>Ingredients</h3>\n           <ul class="ingredients"></ul>\n           <h3>Steps</h3>\n           <ol class="steps"></ol>\n           </div>\n           <div class="similar-recipes"></div>\n          ');$(".main .pdp").html(m),$.each(k,function(a,b){var c="<li>".concat(b.string,"</li>");$(".ingredients").append(c)}),$.each(l,function(a,b){var c="<li>".concat(b,"</li>");$(".steps").append(c)});var n=[];if(void 0!==a.winePairing.pairedWines){$.each(a.winePairing.pairedWines,function(a,b){n.push(b)});var o={text:a.winePairing.pairingText,wineList:n},p='\n                <h3>Wine Pairing</h3>\n                <ul class="wines"></ul>\n                <p>'.concat(o.text,"</p>\n                ");$(".steps").after(p),$.each(o.wineList,function(a,b){var c="<li>".concat(b,"</li>");$(".wines").append(c)})}var q="https://api.spoonacular.com/recipes/".concat(b,"/similar?apiKey=").concat(e,"&number=4");$.get(q,function(a){d("similar recipes"),d(a);var b="<h2>Similar Recipes</h2>",c=document.createElement("UL"),e="";$.each(a,function(a,b){var c=b.title,d=b.id,f="https://spoonacular.com/recipeImages/".concat(d,"-636x393.jpg"),g='\n      <li>\n        <div class="overlay"></div>\n        <a href="#/recipe/'.concat(d,'" data-id="').concat(d,'" class="recipe">\n          <img src=').concat(f,' alt="').concat(c,'" title="').concat(c,'">\n        </a>\n      </li>\n      ');e+=g}),$(c).addClass("hp"),$(c).append(b,e),$(".similar-recipes").html(c),$(".hp li").hover(function(){$(this).find(".overlay").addClass("hide")},function(){$(this).find(".overlay").removeClass("hide")})})})})}},{"./api.js":1,"./get.js":2,"./log.js":4}],4:[function(a,b,c){"use strict";b.exports=function(a){console.log(a)}},{}]},{},[3]);