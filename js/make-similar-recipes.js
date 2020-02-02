const get = require('./get.js');
const api = require('./api.js');
const log = require('./log.js');
const makeList = require('./make-list.js');
const hoverList = require('./hover-list.js');
const makePdp = require('./make-pdp.js');


module.exports = function(data) {
    log('make-similar-recipes.js');
  
    log(data);
            
    var h2 = `<h2>Similar Recipes</h2>`;

    makeList(data, 'hp', '.similar-recipes');
    
    $('.similar-recipes').prepend(h2);

    hoverList('.hp li');

      
    $('.similar-recipes').find('a').click(function(e){
        log('similar recipes click');
        e.preventDefault();
        // log($(this).attr('data-id'));
        const id = $(this).attr('data-id');
        var url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${api}`;
        log(url);
        
        get(url, makePdp);
    });
    
};