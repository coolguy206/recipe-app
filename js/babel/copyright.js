"use strict";

module.exports = function () {
  var d = new Date();
  var year = d.getFullYear();
  var html = "&copy; ".concat(year);
  $('.footer span').html(html);
};
