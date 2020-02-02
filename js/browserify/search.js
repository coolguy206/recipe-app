(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = '1aad54a0e3e345b998872e1be7cb5603';

},{}],2:[function(require,module,exports){
"use strict";

var log = require('./log.js');

module.exports = function (url, func) {
  log('get.js');
  $.get(url, function (data) {
    var theData = data;
    log(theData); // output(theData);

    func(theData);
  });
};

},{"./log.js":4}],3:[function(require,module,exports){
"use strict";

var log = require('./log.js');

module.exports = function (elem) {
  log('hover-list.js');
  $(elem).hover(function () {
    $(this).find('.overlay').addClass('hide');
  }, function () {
    $(this).find('.overlay').removeClass('hide');
  });
};

},{"./log.js":4}],4:[function(require,module,exports){
"use strict";

module.exports = function (data) {
  // console.log('log.js');
  console.log(data);
};

},{}],5:[function(require,module,exports){
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
    var id = val.id;
    var imgsrc = "https://spoonacular.com/recipeImages/".concat(id, "-636x393.jpg");
    var html = "\n      <li>\n        <div class=\"overlay\"></div>\n        <a href=\"#/recipe/".concat(id, "\" data-id=\"").concat(id, "\" class=\"recipe\">\n          <img src=").concat(imgsrc, " alt=\"").concat(title, "\" title=\"").concat(title, "\">\n        </a>\n      </li>\n      ");
    li = li + html;
  }); // console.log(li);

  $(ul).addClass(theClass);
  $(ul).append(li);
  $(elem).html(ul);
};

},{"./log.js":4}],6:[function(require,module,exports){
"use strict";

var get = require('./get.js');

var api = require('./api.js');

var log = require('./log.js');

var makeList = require('./make-list.js');

var hoverList = require('./hover-list.js');

module.exports = function () {
  log('search-click.js');
  var searchTerm = $('.header input').val();
  log(searchTerm);
  var url = "https://api.spoonacular.com/recipes/search?apiKey=".concat(api, "&query=").concat(searchTerm, "&number=10");
  get(url, log);
};

},{"./api.js":1,"./get.js":2,"./hover-list.js":3,"./log.js":4,"./make-list.js":5}]},{},[6]);
