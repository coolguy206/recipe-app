(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = '1aad54a0e3e345b998872e1be7cb5603';

},{}],2:[function(require,module,exports){
"use strict";

module.exports = function () {
  var d = new Date();
  var year = d.getFullYear();
  var html = "&copy; ".concat(year);
  $('.footer span').html(html);
};

},{}],3:[function(require,module,exports){
"use strict";

var output = require('./output.js');

module.exports = function (url, func) {
  $.get(url, function (data) {
    var theData = data; // output(theData);

    func(theData);
  });
};

},{"./output.js":5}],4:[function(require,module,exports){
"use strict";

module.exports = function (data) {
  console.log('log.js');
  console.log(data);
};

},{}],5:[function(require,module,exports){
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

},{"./api.js":1,"./get.js":3,"./log.js":4}],6:[function(require,module,exports){
"use strict";

var copyright = require('./copyright.js');

var ajax = require('./get.js');

var api = require('./api.js');

var output = require('./output.js');

var log = require('./log.js');

$(document).ready(function () {
  copyright();
  var url = "https://api.spoonacular.com/recipes/random?apiKey=".concat(api, "&number=6&tags=dessert"); // console.log(api);

  ajax(url, output);
  $('.hp li').hover(function () {
    $(this).find('.overlay').addClass('hide');
  }, function () {
    $(this).find('.overlay').removeClass('hide');
  });
  $('.hp li a').click(function (e) {
    e.preventDefault();
    var url = "https://api.spoonacular.com/recipes/{id}/information?apiKey=".concat(api);
    ajax(url, log);
  });
});

},{"./api.js":1,"./copyright.js":2,"./get.js":3,"./log.js":4,"./output.js":5}]},{},[6]);
