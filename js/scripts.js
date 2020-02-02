const copyright = require('./copyright.js');
const get = require('./get.js');
const api = require('./api.js');
const output = require('./output.js');
const log = require('./log.js');
const searchClick = require('./search-click.js');

$(document).ready(function() {
    copyright();

    let url = `https://api.spoonacular.com/recipes/random?apiKey=${api}&number=9&tags=dessert`;
    // console.log(api);
    get(url, output);

    $('.header a').click(function(e){
      e.preventDefault();
      $('.homepage').show();
      $('.header').removeClass('pdp');
      $('.main .pdp, .main .search').empty();
    });

    $('.header input').keypress(function(e){
       if (e.keyCode === 13) { 
           searchClick(); 
        } 
     
    });
});