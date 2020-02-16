"use strict";

var get = require('./get.js');

var api = require('./api.js');

var log = require('./log.js');

var makeList = require('./make-list.js');

var makePdp = require('./make-pdp.js');

module.exports = function (data) {
  // log('make-similar-recipes.js');
  // log(data);
  var h2 = "<h2>Similar Recipes</h2>";
  makeList(data, 'null', '.similar-recipes');
  $('.similar-recipes').prepend(h2);
};
