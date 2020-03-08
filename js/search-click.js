
const get = require('./get.js');
const api = require('./api.js');
const log = require('./log.js');
const makeSearch = require('./make-search.js');


module.exports = function() {
	
	// log('search-click.js');
	$('.main .search').empty();
	var searchTerm = $('.header input').val();
	var offset = Math.floor(Math.random() * 900);
	// log(offset);
	// log(searchTerm);

	var url = `https://api.spoonacular.com/recipes/search?apiKey=${api}&query=${searchTerm}&number=10&offset=${offset}`;
	get(url, makeSearch);

};
