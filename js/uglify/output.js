!function(){function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}return a}()({1:[function(a,b,c){"use strict";b.exports="1aad54a0e3e345b998872e1be7cb5603"},{}],2:[function(a,b,c){"use strict";a("./output.js");b.exports=function(a,b){$.get(a,function(a){var c=a;b(c)})}},{"./output.js":4}],3:[function(a,b,c){"use strict";b.exports=function(a){console.log("log.js"),console.log(a)}},{}],4:[function(a,b,c){"use strict";var d=(a("./get.js"),a("./log.js"));a("./api.js");b.exports=function(a){console.log("output.js"),d(a);var b=document.createElement("UL"),c="";$.each(a.recipes,function(a,b){var d=b.image,e=b.title,f=b.id,g='\n      <li>\n        <div class="overlay"></div>\n        <a href="#/recipe/'.concat(f,'">\n          <img src=').concat(d,' alt="').concat(e,'">\n        </a>\n      </li>\n      ');c+=g}),$(b).addClass("hp"),$(b).append(c),$(".main").html(b)}},{"./api.js":1,"./get.js":2,"./log.js":3}]},{},[4]);