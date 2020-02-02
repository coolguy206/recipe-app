"use strict";

var get = require('./get.js');

var api = require('./api.js');

var log = require('./log.js');

var makeList = require('./make-list.js');

var hoverList = require('./hover-list.js');

var makePdp = require('./make-pdp.js');

module.exports = function (data) {
  log('make-similar-recipes.js');
  log(data);
  var h2 = "<h2>Similar Recipes</h2>";
  makeList(data, 'hp', '.similar-recipes');
  $('.similar-recipes').prepend(h2);
  hoverList('.hp li');
  $('.similar-recipes').find('a').click(function (e) {
    log('similar recipes click');
    e.preventDefault(); // log($(this).attr('data-id'));

    var id = $(this).attr('data-id');
    var url = "https://api.spoonacular.com/recipes/".concat(id, "/information?apiKey=").concat(api);
    log(url);
    get(url, makePdp);
  });
};
