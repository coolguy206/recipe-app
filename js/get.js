const output = require('./output.js');

module.exports = function(url, func) {
  $.get(url, function(data) {

    const theData = data;
    // output(theData);
    func(theData);
  });
};
