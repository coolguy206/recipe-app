"use strict";

var get = require('./get.js');

var log = require('./log.js');

var api = require('./api.js'); // const pdp = require('./pdp.js');


module.exports = function (data) {
  console.log('home-page.js'); // console.log(data);

  log(data);
  var ul = document.createElement("UL");
  var li = '';
  $.each(data.recipes, function (i, val) {
    var imgsrc = val.image;
    var title = val.title;
    var id = val.id;
    var html = "\n      <li>\n        <div class=\"overlay\"></div>\n        <a href=\"#/recipe/".concat(id, "\" data-id=\"").concat(id, "\" class=\"recipe\">\n          <img src=").concat(imgsrc, " alt=\"").concat(title, "\" title=\"").concat(title, "\">\n        </a>\n      </li>\n      ");
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
  $('.recipe').click(function (e) {
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

      var html = "\n          <div>\n          <img src=\"".concat(img, "\" alt=\"").concat(title, "\" title=\"").concat(title, "\">\n          </div>\n          <div>\n           <h2>").concat(title, "</h2>\n          <p>Servings: ").concat(servings, "</p>\n           <p>Cook time: ").concat(readyIn, " min</p>\n           <p>Gluten Free: ").concat(gluten, "</p>\n           <h3>Ingredients</h3>\n           <ul class=\"ingredients\"></ul>\n           <h3>Steps</h3>\n           <ol class=\"steps\"></ol>\n           </div>\n           <div class=\"similar-recipes\"></div>\n          ");
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
        var wineHtml = "\n                <h3>Wine Pairing</h3>\n                <ul class=\"wines\"></ul>\n                <p>".concat(winePairing.text, "</p>\n                ");
        $('.steps').after(wineHtml);
        $.each(winePairing.wineList, function (i, val) {
          var li = "<li>".concat(val, "</li>");
          $('.wines').append(li);
        });
      }

      var similarRecipeUrl = "https://api.spoonacular.com/recipes/".concat(id, "/similar?apiKey=").concat(api, "&number=4"); //get similar recipes

      $.get(similarRecipeUrl, function (data) {
        log('similar recipes');
        log(data);
        var h2 = "<h2>Similar Recipes</h2>";
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

        $(ul).addClass('hp');
        $(ul).append(h2, li);
        $('.similar-recipes').html(ul);
        $('.hp li').hover(function () {
          $(this).find('.overlay').addClass('hide');
        }, function () {
          $(this).find('.overlay').removeClass('hide');
        });
      });
    });
  });
};
