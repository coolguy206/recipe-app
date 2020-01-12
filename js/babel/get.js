"use strict";

var output = require('./output.js');

module.exports = function (url, func) {
  $.get(url, function (data) {
    var theData = data; // output(theData);

    func(theData);
  });
};
