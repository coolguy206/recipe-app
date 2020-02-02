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

var log = require('./log.js');

var api = require('./api.js');

var makeList = require('./make-list.js');

var hoverList = require('./hover-list.js');

var makeRecipes = require('./make-similar-recipes.js');

module.exports = function (data) {
  log('make-pdp.js');
  log(data);
  $('.header').addClass('pdp');
  $('.homepage').hide();
  $('.main .pdp, .search').empty();
  window.scrollTo(0, 0);
  var id = data.id;
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
  /*log(title);
  log(servings);
  log(readyIn);
  log(prep);
  log(img);
  log(gluten);
  log(ingredients);
  log(steps);*/
  // log(winePairing);

  var html = "\n        <div>\n            <img src=\"".concat(img, "\" alt=\"").concat(title, "\" title=\"").concat(title, "\">\n        </div>\n\n        <div>\n           <h2>").concat(title, "</h2>\n            <p>Servings: ").concat(servings, "</p>\n           <p>Cook time: ").concat(readyIn, " min</p>\n           <p>Gluten Free: ").concat(gluten, "</p>\n           <h3>Ingredients</h3>\n           <ul class=\"ingredients\"></ul>\n           <h3>Steps</h3>\n           <ol class=\"steps\"></ol>\n        </div>\n           \n        <div class=\"similar-recipes\"></div>\n     ");
  $('.main .pdp').html(html);
  $.each(ingredients, function (i, val) {
    // var li = `<li><a href="${val.image}" target="_blank">${val.string}</a></li>`;
    var li = "<li>".concat(val.string, "</li>");
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
    var wineHtml = "\n            <h3>Wine Pairing</h3>\n            <ul class=\"wines\"></ul>\n            <p>".concat(winePairing.text, "</p>\n        ");
    $('.steps').after(wineHtml);
    $.each(winePairing.wineList, function (i, val) {
      var li = "<li>".concat(val, "</li>");
      $('.wines').append(li);
    });
  }

  var similarRecipeUrl = "https://api.spoonacular.com/recipes/".concat(id, "/similar?apiKey=").concat(api, "&number=4");
  get(similarRecipeUrl, makeRecipes);
};

},{"./api.js":1,"./get.js":2,"./hover-list.js":3,"./log.js":4,"./make-list.js":5,"./make-similar-recipes.js":7}],7:[function(require,module,exports){
"use strict";

var get = require('./get.js');

var api = require('./api.js');

var log = require('./log.js');

var makeList = require('./make-list.js');

var hoverList = require('./hover-list.js');

var makePdp = require('./make-pdp.js');

module.exports = function (data) {
  log('make-similar-recipes.js');
  log(data);
  var h2 = "<h2>Similar Recipes</h2>";
  makeList(data, 'hp', '.similar-recipes');
  $('.similar-recipes').prepend(h2);
  hoverList('.hp li');
  $('.similar-recipes').find('a').click(function (e) {
    log('similar recipes click');
    e.preventDefault(); // log($(this).attr('data-id'));

    var id = $(this).attr('data-id');
    var url = "https://api.spoonacular.com/recipes/".concat(id, "/information?apiKey=").concat(api);
    log(url);
    get(url, makePdp);
  });
};

},{"./api.js":1,"./get.js":2,"./hover-list.js":3,"./log.js":4,"./make-list.js":5,"./make-pdp.js":6}]},{},[7]);
