const copyright = require('./copyright.js');
const ajax = require('./get.js');
const api =require('./api.js');
const output =require('./output.js');
const log = require('./log.js');

$(document).ready(function() {
  copyright();

  let url = `https://api.spoonacular.com/recipes/random?apiKey=${api}&number=6&tags=dessert`;
// console.log(api);
  ajax(url, output);

  $('.hp li').hover(function(){
    $(this).find('.overlay').addClass('hide');
  }, function(){
    $(this).find('.overlay').removeClass('hide');
  });

  $('.hp li a').click(function(e){
    e.preventDefault();
    var url = `https://api.spoonacular.com/recipes/{id}/information?apiKey=${api}`;
    ajax(url, log);
  });
});
