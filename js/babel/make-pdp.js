"use strict";

var get = require('./get.js');

var log = require('./log.js');

var api = require('./api.js');

var makeList = require('./make-list.js');

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
  var imgType = data.imageType; // let img = data.image;

  var img = "https://spoonacular.com/recipeImages/".concat(id, "-556x370.").concat(imgType);
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
