!function(){function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}return a}()({1:[function(a,b,c){"use strict";b.exports=function(a){console.log(a)}},{}],2:[function(a,b,c){"use strict";a("./log.js");b.exports=function(a,b,c){var d=document.createElement("UL"),e="";$.each(a,function(a,b){var c=b.title,d=b.servings,f=b.readyInMinutes,g=b.id,h="https://spoonacular.com/recipeImages/".concat(g,"-636x393.jpg"),i='\n      <li>\n        <div class="overlay"></div>\n        <a href="#/recipe/'.concat(g,'" data-id="').concat(g,'" class="recipe">\n          <img src=').concat(h,' alt="').concat(c,'" title="').concat(c,'">\n          <div>\n            <h2>').concat(c,"</h2>\n            <p>Cook time: ").concat(f," min</p>\n            <p>Servings: ").concat(d,"</p>\n          </div>\n        </a>\n      </li>\n      ");e+=i}),$(d).addClass(b),$(d).append(e),$(c).html(d)}},{"./log.js":1}]},{},[2]);