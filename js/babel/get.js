"use strict";

var log = require('./log.js');

module.exports = function (url, func) {
  // log('get.js');
  $.get(url, function (data) {
    var theData = data; // log(theData);
    // output(theData);
    // log(typeof func);
    // log(func);

    func(theData);
  });
};
