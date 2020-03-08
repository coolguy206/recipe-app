const log = require('./log.js');

module.exports = function(elem) {
    // log('hover-list.js');

    $(elem).hover(function() {
        $(this).find('.overlay').addClass('hide');
    }, function() {
        $(this).find('.overlay').removeClass('hide');
    });


};