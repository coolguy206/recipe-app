"use strict";

var get = require('./get.js');

var api = require('./api.js');

var log = require('./log.js');

var makeList = require('./make-list.js');

var hoverList = require('./hover-list.js');

module.exports = function () {
  log('search-click.js');
  var searchTerm = $('.header input').val();
  log(searchTerm);
  var url = "https://api.spoonacular.com/recipes/search?apiKey=".concat(api, "&query=").concat(searchTerm, "&number=10");
  get(url, log);
};
