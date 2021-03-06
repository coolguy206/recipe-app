"use strict";

var get = require('./get.js');

var api = require('./api.js');

var log = require('./log.js');

var makeSearch = require('./make-search.js');

module.exports = function () {
  // log('search-click.js');
  $('.main .search').empty();
  var searchTerm = $('.header input').val();
  var offset = Math.floor(Math.random() * 900); // log(offset);
  // log(searchTerm);

  var url = "https://api.spoonacular.com/recipes/search?apiKey=".concat(api, "&query=").concat(searchTerm, "&number=10&offset=").concat(offset);
  get(url, makeSearch);
};
