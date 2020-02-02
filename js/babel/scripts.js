"use strict";

var copyright = require('./copyright.js');

var get = require('./get.js');

var api = require('./api.js');

var output = require('./output.js');

var log = require('./log.js');

var searchClick = require('./search-click.js');

$(document).ready(function () {
  copyright();
  var url = "https://api.spoonacular.com/recipes/random?apiKey=".concat(api, "&number=9&tags=dessert"); // console.log(api);

  get(url, output);
  $('.header a').click(function (e) {
    e.preventDefault();
    $('.homepage').show();
    $('.header').removeClass('pdp');
    $('.main .pdp, .main .search').empty();
  });
  $('.header input').keypress(function (e) {
    if (e.keyCode === 13) {
      searchClick();
    }
  });
});
