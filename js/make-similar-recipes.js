const get = require('./get.js');
const api = require('./api.js');
const log = require('./log.js');
const makeList = require('./make-list.js');
const makePdp = require('./make-pdp.js');


module.exports = function(data) {
    // log('make-similar-recipes.js');

    // log(data);

    var h2 = `<h2>Similar Recipes</h2>`;

    makeList(data, 'null', '.similar-recipes');

    $('.similar-recipes').prepend(h2);

};