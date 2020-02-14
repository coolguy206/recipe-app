const get = require('./get.js');
const log = require('./log.js');
const api = require('./api.js');
const makeList = require('./make-list.js');
const makeRecipes = require('./make-similar-recipes.js');


module.exports = function(data) {
    log('make-pdp.js');

    log(data);
    $('.header').addClass('pdp');
    $('.homepage').hide();
    $('.main .pdp, .search').empty();
    window.scrollTo(0, 0);

    let id = data.id;
    let title = data.title;
    let servings = data.servings;
    let readyIn = data.readyInMinutes;
    let prep = data.preparationMinutes;
    let imgType = data.imageType;
    // let img = data.image;
    let img = `https://spoonacular.com/recipeImages/${id}-556x370.${imgType}`;
    let gluten = data.glutenFree;

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

    var steps = [];
    $.each(data.analyzedInstructions[0].steps, function(i, val) {
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
           <h3>Steps</h3>
           <ol class="steps"></ol>
        </div>
           
        <div class="similar-recipes"></div>
     `;

    $('.main .pdp').html(html);

    $.each(ingredients, function(i, val) {
        // var li = `<li><a href="${val.image}" target="_blank">${val.string}</a></li>`;
        var li = `<li>${val.string}</li>`;
        $('.ingredients').append(li);
    });

    $.each(steps, function(i, val) {
        var li = `<li>${val}</li>`;
        $('.steps').append(li);
    });


    var wines = [];
    if (data.winePairing.pairedWines !== undefined) {
        $.each(data.winePairing.pairedWines, function(i, val) {
            wines.push(val);
        });

        let winePairing = { text: data.winePairing.pairingText, wineList: wines };

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

    let similarRecipeUrl = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${api}&number=4`;

    get(similarRecipeUrl, makeRecipes);

};