
const get = require('./get.js');
const api = require('./api.js');
const log = require('./log.js');
const makeList = require('./make-list.js');
const hoverList = require('./hover-list.js');
const makePdp = require('./make-pdp.js');


module.exports = function(data) {
	
	log('make-search.js');
	log(data);
	$('.header').addClass('pdp');
    $('.homepage').hide();
    $('.main .pdp').empty();

	makeList(data.results, 'search-list', '.main .search');


    $('.search-list a').click(function(e) {
        log('search list click');
        e.preventDefault();
        // log($(this).attr('data-id'));
        const id = $(this).attr('data-id');
        var url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${api}`;
        log(url);

        get(url, makePdp);

    });


};
