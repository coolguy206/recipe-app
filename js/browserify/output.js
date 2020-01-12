(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = '1aad54a0e3e345b998872e1be7cb5603';

},{}],2:[function(require,module,exports){
"use strict";

var output = require('./output.js');

module.exports = function (url, func) {
  $.get(url, function (data) {
    var theData = data; // output(theData);

    func(theData);
  });
};

},{"./output.js":4}],3:[function(require,module,exports){
"use strict";

module.exports = function (data) {
  console.log('log.js');
  console.log(data);
};

},{}],4:[function(require,module,exports){
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

},{"./api.js":1,"./get.js":2,"./log.js":3}]},{},[4]);
