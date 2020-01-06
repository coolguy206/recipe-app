(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = function () {
  var d = new Date();
  var year = d.getFullYear();
  var html = "&copy; ".concat(year);
  $('.footer span').html(html);
};

},{}],2:[function(require,module,exports){
"use strict";

module.exports = function (url) {
  $.get(url, function (data) {
    console.log(data);
    var html = '<img src="' + data.recipes[0].image + '" alt="' + data.recipes[0].title + '">';
    $('.main').html(html);
  });
};

},{}],3:[function(require,module,exports){
"use strict";

var copyright = require('./copyright.js');

var ajax = require('./get.js');

$(document).ready(function () {
  copyright();
  var api = '1aad54a0e3e345b998872e1be7cb5603';
  var url = ' https://api.spoonacular.com/recipes/random?apiKey=' + api + '&number=1&tags=dessert';
  ajax(url);
});

},{"./copyright.js":1,"./get.js":2}]},{},[3]);
