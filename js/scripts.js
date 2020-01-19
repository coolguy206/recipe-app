const copyright = require('./copyright.js');
const ajax = require('./get.js');
const api = require('./api.js');
const output = require('./output.js');
const log = require('./log.js');

$(document).ready(function() {
    copyright();

    let url = `https://api.spoonacular.com/recipes/random?apiKey=${api}&number=9&tags=dessert`;
    // console.log(api);
    ajax(url, output);

    $('.header a').click(function(e){
      e.preventDefault();
      $('.homepage').show();
      $('.header').removeClass('pdp');
      $('.main .pdp, .main .search').empty();
    });
});