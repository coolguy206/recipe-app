const get = require('./get.js');
const api = require('./api.js');
const log = require('./log.js');
const makeList = require('./make-list.js');
const makePdp = require('./make-pdp.js');


module.exports = function(data) {

    // log('make-search.js');
    // log(data);
    
    $('.header').addClass('pdp');
    $('.homepage').hide();
    $('.main .pdp, .search').empty();

    // log(data.results.length);
    if (data.results.length == 0) {
        var searchEmptyHtml = `<h2>Oh No!<br> Please try another search.</h2>`;
        $('.search').append(searchEmptyHtml);
    } else {
        makeList(data.results, 'search-list', '.main .search');

    }


};