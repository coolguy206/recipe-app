"use strict";

var log = require('./log.js');

module.exports = function (data, theClass, elem) {
  log('make-list.js'); // console.log(data);

  log(data);
  var ul = document.createElement("UL");
  var li = '';
  $.each(data, function (i, val) {
    // var imgsrc = val.image;
    var title = val.title;
    var servings = val.servings;
    var cookTime = val.readyInMinutes;
    var id = val.id;
    var imgsrc = "https://spoonacular.com/recipeImages/".concat(id, "-636x393.jpg");
    var html = "\n      <li>\n        <div class=\"overlay\"></div>\n        <a href=\"#/recipe/".concat(id, "\" data-id=\"").concat(id, "\" class=\"recipe\">\n          <img src=").concat(imgsrc, " alt=\"").concat(title, "\" title=\"").concat(title, "\">\n          <div>\n            <h2>").concat(title, "</h2>\n            <p>Cook time: ").concat(cookTime, " min</p>\n            <p>Servings: ").concat(servings, "</p>\n          </div>\n        </a>\n      </li>\n      ");
    li = li + html;
  }); // console.log(li);

  $(ul).addClass(theClass);
  $(ul).append(li);
  $(elem).html(ul);
};
