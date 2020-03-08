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

var log = require('./log.js');

module.exports = function (url, func) {
  // log('get.js');
  $.get(url, function (data) {
    var theData = data; // log(theData);
    // output(theData);
    // log(typeof func);
    // log(func);

    func(theData);
  });
};

},{"./log.js":5}],4:[function(require,module,exports){
"use strict";

var log = require('./log.js');

module.exports = function (elem) {
  // log('hover-list.js');
  $(elem).hover(function () {
    $(this).find('.overlay').addClass('hide');
  }, function () {
    $(this).find('.overlay').removeClass('hide');
  });
};

},{"./log.js":5}],5:[function(require,module,exports){
"use strict";

module.exports = function (data) {
  // console.log('log.js');
  console.log(data);
};

},{}],6:[function(require,module,exports){
"use strict";

var log = require('./log.js');

module.exports = function (data, theClass, elem) {
  // log('make-list.js');
  // log(data);
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
  });
  $(ul).addClass(theClass);
  $(ul).append(li);
  $(elem).html(ul);
};

},{"./log.js":5}],7:[function(require,module,exports){
"use strict";

var get = require('./get.js');

var log = require('./log.js');

var api = require('./api.js');

var makeList = require('./make-list.js');

var makeRecipes = require('./make-similar-recipes.js');

module.exports = function (data) {
  // log('make-pdp.js');
  $('.header').addClass('pdp');
  $('.homepage').hide();
  $('.main .pdp, .search').empty();
  window.scrollTo(0, 0);
  var id = data.id;
  var title = data.title;
  var servings = data.servings;
  var readyIn = data.readyInMinutes;
  var prep = data.preparationMinutes;
  var imgType = data.imageType; // var img = data.image;

  var img = "https://spoonacular.com/recipeImages/".concat(id, "-556x370.jpg");
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
  /*log(title);
  log(servings);
  log(readyIn);
  log(prep);
  log(img);
  log(gluten);
  log(ingredients);
  log(steps);*/
  // log(winePairing);

  var html = "\n        <div>\n            <img src=\"".concat(img, "\" alt=\"").concat(title, "\" title=\"").concat(title, "\">\n        </div>\n\n        <div>\n           <h2>").concat(title, "</h2>\n            <p>Servings: ").concat(servings, "</p>\n           <p>Cook time: ").concat(readyIn, " min</p>\n           <p>Gluten Free: ").concat(gluten, "</p>\n           <h3>Ingredients</h3>\n           <ul class=\"ingredients\"></ul>\n        </div>\n           \n        <div class=\"similar-recipes\"></div>\n     ");
  $('.main .pdp').html(html);
  var steps = [];

  if (data.analyzedInstructions.length !== 0) {
    $.each(data.analyzedInstructions[0].steps, function (i, val) {
      steps.push(val.step);
    });
    var stepsHtml = " <h3>Steps</h3>\n           <ol class=\"steps\"></ol>";
    $('.ingredients').after(stepsHtml);
    $.each(steps, function (i, val) {
      var li = "<li>".concat(val, "</li>");
      $('.steps').append(li);
    });
  }

  $.each(ingredients, function (i, val) {
    // var li = `<li><a href="${val.image}" target="_blank">${val.string}</a></li>`;
    var li = "<li>".concat(val.string, "</li>");
    $('.ingredients').append(li);
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

},{"./api.js":1,"./get.js":3,"./log.js":5,"./make-list.js":6,"./make-similar-recipes.js":9}],8:[function(require,module,exports){
"use strict";

var get = require('./get.js');

var api = require('./api.js');

var log = require('./log.js');

var makeList = require('./make-list.js');

var makePdp = require('./make-pdp.js');

module.exports = function (data) {
  // log('make-search.js');
  // log(data);
  $('.header').addClass('pdp');
  $('.homepage').hide();
  $('.main .pdp, .search').empty(); // log(data.results.length);

  if (data.results.length == 0) {
    var searchEmptyHtml = "<h2>Oh No!<br> Please try another search.</h2>";
    $('.search').append(searchEmptyHtml);
  } else {
    makeList(data.results, 'search-list', '.main .search');
  }
};

},{"./api.js":1,"./get.js":3,"./log.js":5,"./make-list.js":6,"./make-pdp.js":7}],9:[function(require,module,exports){
"use strict";

var get = require('./get.js');

var api = require('./api.js');

var log = require('./log.js');

var makeList = require('./make-list.js');

var makePdp = require('./make-pdp.js');

module.exports = function (data) {
  // log('make-similar-recipes.js');
  // log(data);
  var h2 = "<h2>Similar Recipes</h2>";
  makeList(data, 'null', '.similar-recipes');
  $('.similar-recipes').prepend(h2);
};

},{"./api.js":1,"./get.js":3,"./log.js":5,"./make-list.js":6,"./make-pdp.js":7}],10:[function(require,module,exports){
"use strict";

var get = require('./get.js');

var log = require('./log.js');

var api = require('./api.js');

var makeList = require('./make-list.js');

var hoverList = require('./hover-list.js');

var makePdp = require('./make-pdp.js'); // const pdp = require('./pdp.js');


module.exports = function (data) {
  // console.log('output.js');
  makeList(data.recipes, 'hp', '.homepage');
  hoverList('.hp li');
  $('.recipe').click(function (e) {
    // log('recipe click');
    e.preventDefault(); // log($(this).attr('data-id'));

    var id = $(this).attr('data-id');
    var url = "https://api.spoonacular.com/recipes/".concat(id, "/information?apiKey=").concat(api); // log(url);

    get(url, makePdp);
  });
};

},{"./api.js":1,"./get.js":3,"./hover-list.js":4,"./log.js":5,"./make-list.js":6,"./make-pdp.js":7}],11:[function(require,module,exports){
"use strict";

var copyright = require('./copyright.js');

var get = require('./get.js');

var api = require('./api.js');

var output = require('./output.js');

var log = require('./log.js');

var searchClick = require('./search-click.js');

var makePdp = require('./make-pdp.js');

$(document).ready(function () {
  copyright();
  var url = "https://api.spoonacular.com/recipes/random?apiKey=".concat(api, "&number=9&tags=dessert"); // console.log(api);

  get(url, output);
  $('.header a').click(function (e) {
    e.preventDefault();
    $('.homepage').show();
    $('.header').removeClass('pdp');
    $('.main .pdp, .main .search').empty();
  });
  $('.header input').keypress(function (e) {
    if (e.keyCode === 13) {
      searchClick();
    }
  });
  $(document).on('click', '.similar-recipes a', function (e) {
    // log('similar recipes click');
    e.preventDefault(); // log($(this).attr('data-id'));

    var id = $(this).attr('data-id');
    var url = "https://api.spoonacular.com/recipes/".concat(id, "/information?apiKey=").concat(api); // log(url);

    get(url, makePdp);
  });
  $(document).on('click', '.search-list a', function (e) {
    // log('search list click');
    e.preventDefault(); // log($(this).attr('data-id'));

    var id = $(this).attr('data-id');
    var url = "https://api.spoonacular.com/recipes/".concat(id, "/information?apiKey=").concat(api); // log(url);

    get(url, makePdp);
  });
});

},{"./api.js":1,"./copyright.js":2,"./get.js":3,"./log.js":5,"./make-pdp.js":7,"./output.js":10,"./search-click.js":12}],12:[function(require,module,exports){
"use strict";

var get = require('./get.js');

var api = require('./api.js');

var log = require('./log.js');

var makeSearch = require('./make-search.js');

module.exports = function () {
  // log('search-click.js');
  $('.main .search').empty();
  var searchTerm = $('.header input').val();
  var offset = Math.floor(Math.random() * 900); // log(offset);
  // log(searchTerm);

  var url = "https://api.spoonacular.com/recipes/search?apiKey=".concat(api, "&query=").concat(searchTerm, "&number=10&offset=").concat(offset);
  get(url, makeSearch);
};

},{"./api.js":1,"./get.js":3,"./log.js":5,"./make-search.js":8}]},{},[11]);
