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

var pdp = require('./pdp.js');

module.exports = function (data) {
  console.log('output.js'); // console.log(data);

  log(data);
  var ul = document.createElement("UL");
  var li = '';
  $.each(data.recipes, function (i, val) {
    var imgsrc = val.image;
    var title = val.title;
    var id = val.id;
    var html = "\n      <li>\n        <div class=\"overlay\"></div>\n        <a href=\"#/recipe/".concat(id, "\" data-id=\"").concat(id, "\">\n          <img src=").concat(imgsrc, " alt=\"").concat(title, "\" title=\"").concat(title, "\">\n        </a>\n      </li>\n      ");
    li = li + html;
  }); // console.log(li);

  $(ul).addClass('hp');
  $(ul).append(li);
  $('.homepage').html(ul);
  $('.hp li').hover(function () {
    $(this).find('.overlay').addClass('hide');
  }, function () {
    $(this).find('.overlay').removeClass('hide');
  });
  $('.hp li a').click(function (e) {
    e.preventDefault(); // log($(this).attr('data-id'));

    var id = $(this).attr('data-id');
    var url = "https://api.spoonacular.com/recipes/".concat(id, "/information?apiKey=").concat(api);
    log(url);
    $.get(url, function (data) {
      console.log(data);
      $('.header').addClass('pdp');
      $('.homepage').hide();
      var title = data.title;
      var servings = data.servings;
      var readyIn = data.readyInMinutes;
      var prep = data.preparationMinutes;
      var img = data.image;
      var gluten = data.glutenFree;

      if (gluten == true) {
        gluten = 'yes';
      } else {
        gluten = 'no';
      }

      var ingredients = [];
      $.each(data.extendedIngredients, function (i, val) {
        var imgUrl = 'https://spoonacular.com/cdn/ingredients_250x250/';
        var obj = {
          string: val.original,
          image: imgUrl + val.image
        };
        ingredients.push(obj);
      });
      var steps = [];
      $.each(data.analyzedInstructions[0].steps, function (i, val) {
        steps.push(val.step);
      });
      log(title);
      log(servings);
      log(readyIn);
      log(prep);
      log(img);
      log(gluten);
      log(ingredients);
      log(steps); // log(winePairing);

      var html = "\n          <div>\n          <img src=\"".concat(img, "\" alt=\"").concat(title, "\" title=\"").concat(title, "\">\n          </div>\n          <div>\n           <h2>").concat(title, "</h2>\n          <p>Servings: ").concat(servings, "</p>\n           <p>Cook time: ").concat(readyIn, " min</p>\n           <p>Gluten Free: ").concat(gluten, "</p>\n           <h3>Ingredients</h3>\n           <ul class=\"ingredients\"></ul>\n           <h3>Steps</h3>\n           <ol class=\"steps\"></ol>\n           </div>\n          ");
      $('.main .pdp').html(html);
      $.each(ingredients, function (i, val) {
        var li = "<li><a href=\"".concat(val.image, "\" target=\"_blank\">").concat(val.string, "</a></li>");
        $('.ingredients').append(li);
      });
      $.each(steps, function (i, val) {
        var li = "<li>".concat(val, "</li>");
        $('.steps').append(li);
      });
      var wines = [];

      if (data.winePairing.pairedWines !== undefined) {
        $.each(data.winePairing.pairedWines, function (i, val) {
          wines.push(val);
        });
        var winePairing = {
          text: data.winePairing.pairingText,
          wineList: wines
        };
        var wineHtml = "\n                <h3>Wine Pairing</h3>\n                <ul class=\"wines\"></ul>\n                <p>".concat(winePairing.text, "</p>\n                ");
        $('.steps').after(wineHtml);
        $.each(winePairing.wineList, function (i, val) {
          var li = "<li>".concat(val, "</li>");
          $('.wines').append(li);
        });
      }
    });
  });
};

},{"./api.js":1,"./get.js":2,"./log.js":3,"./pdp.js":5}],5:[function(require,module,exports){
"use strict";

module.exports = function (data) {
  console.log(data);
  $('.homepage').hide();
};

},{}]},{},[2]);
