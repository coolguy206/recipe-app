"use strict";

var copyright = require('./copyright.js');

var ajax = require('./get.js');

var api = require('./api.js');

var output = require('./output.js');

var log = require('./log.js');

$(document).ready(function () {
  copyright();
  var url = "https://api.spoonacular.com/recipes/random?apiKey=".concat(api, "&number=6&tags=dessert"); // console.log(api);

  ajax(url, output);
  $('.hp li').hover(function () {
    $(this).find('.overlay').addClass('hide');
  }, function () {
    $(this).find('.overlay').removeClass('hide');
  });
  $('.hp li a').click(function (e) {
    e.preventDefault();
    var url = "https://api.spoonacular.com/recipes/{id}/information?apiKey=".concat(api);
    ajax(url, log);
  });
});
