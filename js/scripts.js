const copyright = require('./copyright.js');
const get = require('./get.js');
const api = require('./api.js');
const output = require('./output.js');
const log = require('./log.js');
const searchClick = require('./search-click.js');
const makePdp = require('./make-pdp.js');

$(document).ready(function() {
    copyright();

    let url = `https://api.spoonacular.com/recipes/random?apiKey=${api}&number=9&tags=dessert`;
    // console.log(api);
    get(url, output);

    $('.header a').click(function(e) {
        e.preventDefault();
        $('.homepage').show();
        $('.header').removeClass('pdp');
        $('.main .pdp, .main .search').empty();
    });

    $('.header input').keypress(function(e) {
        if (e.keyCode === 13) {
            searchClick();
        }

    });

    $(document).on('click', '.similar-recipes a', function(e) {
        // log('similar recipes click');
        e.preventDefault();
        // log($(this).attr('data-id'));
        const id = $(this).attr('data-id');
        var url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${api}`;
        // log(url);

        get(url, makePdp);
    });


    $(document).on('click', '.search-list a', function(e) {
        // log('search list click');
        e.preventDefault();
        // log($(this).attr('data-id'));
        const id = $(this).attr('data-id');
        var url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${api}`;
        // log(url);

        get(url, makePdp);

    });
});