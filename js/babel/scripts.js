"use strict";

var copyright = require('./copyright.js');

var ajax = require('./get.js');

$(document).ready(function () {
  copyright();
  var api = '1aad54a0e3e345b998872e1be7cb5603';
  var url = ' https://api.spoonacular.com/recipes/random?apiKey=' + api + '&number=1&tags=dessert';
  ajax(url);
});
