"use strict";

var get = require('./get.js');

var log = require('./log.js');

var api = require('./api.js');

var makeList = require('./make-list.js');

var hoverList = require('./hover-list.js');

var makePdp = require('./make-pdp.js'); // const pdp = require('./pdp.js');


module.exports = function (data) {
  // console.log('output.js');
  makeList(data.recipes, 'hp', '.homepage');
  hoverList('.hp li');
  $('.recipe').click(function (e) {
    // log('recipe click');
    e.preventDefault(); // log($(this).attr('data-id'));

    var id = $(this).attr('data-id');
    var url = "https://api.spoonacular.com/recipes/".concat(id, "/information?apiKey=").concat(api); // log(url);

    get(url, makePdp);
  });
};
