"use strict";

var get = require('./get.js');

var api = require('./api.js');

var log = require('./log.js');

var makeList = require('./make-list.js');

var hoverList = require('./hover-list.js');

var makePdp = require('./make-pdp.js');

module.exports = function (data) {
  log('make-search.js');
  log(data);
  $('.header').addClass('pdp');
  $('.homepage').hide();
  $('.main .pdp').empty();
  makeList(data.results, 'search-list', '.main .search');
  $('.search-list a').click(function (e) {
    log('search list click');
    e.preventDefault(); // log($(this).attr('data-id'));

    var id = $(this).attr('data-id');
    var url = "https://api.spoonacular.com/recipes/".concat(id, "/information?apiKey=").concat(api);
    log(url);
    get(url, makePdp);
  });
};
