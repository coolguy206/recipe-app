"use strict";

var ajax = require('./get.js');

var log = require('./log.js');

var api = require('./api.js');

module.exports = function (data) {
  console.log('output.js'); // console.log(data);

  log(data);
  var ul = document.createElement("UL");
  var li = '';
  $.each(data.recipes, function (i, val) {
    var imgsrc = val.image;
    var title = val.title;
    var id = val.id;
    var html = "\n      <li>\n        <div class=\"overlay\"></div>\n        <a href=\"#/recipe/".concat(id, "\">\n          <img src=").concat(imgsrc, " alt=\"").concat(title, "\">\n        </a>\n      </li>\n      ");
    li = li + html;
  }); // console.log(li);

  $(ul).addClass('hp');
  $(ul).append(li);
  $('.main').html(ul);
};
