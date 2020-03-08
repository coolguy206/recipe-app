const get = require('./get.js');
const log = require('./log.js');
const api = require('./api.js');
const makeList = require('./make-list.js');
const hoverList = require('./hover-list.js');
const makePdp = require('./make-pdp.js');
// const pdp = require('./pdp.js');

module.exports = function(data) {
    // console.log('output.js');

    makeList(data.recipes, 'hp', '.homepage');

    hoverList('.hp li');

    $('.recipe').click(function(e) {
        // log('recipe click');
        e.preventDefault();
        // log($(this).attr('data-id'));
        const id = $(this).attr('data-id');
        var url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${api}`;
        // log(url);

        get(url, makePdp);

    });

};