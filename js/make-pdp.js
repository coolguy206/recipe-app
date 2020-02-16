const get = require('./get.js');
const log = require('./log.js');
const api = require('./api.js');
const makeList = require('./make-list.js');
const makeRecipes = require('./make-similar-recipes.js');


module.exports = function(data) {
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
    var imgType = data.imageType;
    // var img = data.image;
    var img = `https://spoonacular.com/recipeImages/${id}-556x370.jpg`;
    var gluten = data.glutenFree;

    if (gluten == true) {
        gluten = 'yes';
    } else {
        gluten = 'no';
    }

    var ingredients = [];
    $.each(data.extendedIngredients, function(i, val) {
        var imgUrl = 'https://spoonacular.com/cdn/ingredients_250x250/';
        var obj = { string: val.original, image: imgUrl + val.image };
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

    var html = `
        <div>
            <img src="${img}" alt="${title}" title="${title}">
        </div>

        <div>
           <h2>${title}</h2>
            <p>Servings: ${servings}</p>
           <p>Cook time: ${readyIn} min</p>
           <p>Gluten Free: ${gluten}</p>
           <h3>Ingredients</h3>
           <ul class="ingredients"></ul>
        </div>
           
        <div class="similar-recipes"></div>
     `;

    $('.main .pdp').html(html);

    var steps = [];
    if (data.analyzedInstructions.length !== 0) {
        $.each(data.analyzedInstructions[0].steps, function(i, val) {
            steps.push(val.step);
        });

        var stepsHtml = ` <h3>Steps</h3>
           <ol class="steps"></ol>`;

        $('.ingredients').after(stepsHtml);

        $.each(steps, function(i, val) {
            var li = `<li>${val}</li>`;
            $('.steps').append(li);
        });

    }

    $.each(ingredients, function(i, val) {
        // var li = `<li><a href="${val.image}" target="_blank">${val.string}</a></li>`;
        var li = `<li>${val.string}</li>`;
        $('.ingredients').append(li);
    });


    var wines = [];
    if (data.winePairing.pairedWines !== undefined) {
        $.each(data.winePairing.pairedWines, function(i, val) {
            wines.push(val);
        });

        var winePairing = { text: data.winePairing.pairingText, wineList: wines };

        var wineHtml = `
            <h3>Wine Pairing</h3>
            <ul class="wines"></ul>
            <p>${winePairing.text}</p>
        `;

        $('.steps').after(wineHtml);

        $.each(winePairing.wineList, function(i, val) {
            var li = `<li>${val}</li>`;
            $('.wines').append(li);
        });

    }

    var similarRecipeUrl = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${api}&number=4`;

    get(similarRecipeUrl, makeRecipes);

};