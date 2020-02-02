const get = require('./get.js');
const log = require('./log.js');
const api = require('./api.js');
const makeList = require('./make-list.js');
const hoverList = require('./hover-list.js');
// const pdp = require('./pdp.js');

module.exports = function(data) {
    console.log('output.js');
    // console.log(data);

    // log(data);
    // var ul = document.createElement("UL");
    // var li = '';
    // $.each(data.recipes, function(i, val) {
    //     var imgsrc = val.image;
    //     var title = val.title;
    //     var id = val.id;
    //     var html = `
    //   <li>
    //     <div class="overlay"></div>
    //     <a href="#/recipe/${id}" data-id="${id}" class="recipe">
    //       <img src=${imgsrc} alt="${title}" title="${title}">
    //     </a>
    //   </li>
    //   `;

    //     li = li + html;
    // });
    // // console.log(li);
    // $(ul).addClass('hp');
    // $(ul).append(li);
    // $('.homepage').html(ul);

    // $('.hp li').hover(function() {
    //     $(this).find('.overlay').addClass('hide');
    // }, function() {
    //     $(this).find('.overlay').removeClass('hide');
    // });

    makeList(data.recipes, 'hp', '.homepage');

    hoverList('.hp li');

    $('.recipe').click(function(e) {
        e.preventDefault();
        // log($(this).attr('data-id'));
        const id = $(this).attr('data-id');
        var url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${api}`;
        log(url);
        $.get(url, function(data) {
            console.log(data);
            $('.header').addClass('pdp');
            $('.homepage').hide();


            let title = data.title;
            let servings = data.servings;
            let readyIn = data.readyInMinutes;
            let prep = data.preparationMinutes;
            let img = data.image;
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

            log(title);
            log(servings);
            log(readyIn);
            log(prep);
            log(img);
            log(gluten);
            log(ingredients);
            log(steps);
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
            //get similar recipes
            $.get(similarRecipeUrl, function(data) {
                log('similar recipes');
                log(data);

                var h2 = `<h2>Similar Recipes</h2>`;
                var ul = document.createElement("UL");
                var li = '';
                $.each(data, function(i, val) {
                    // var imgsrc = val.image;
                    var title = val.title;
                    var id = val.id;
                    var imgsrc = `https://spoonacular.com/recipeImages/${id}-636x393.jpg`;
                    var html = `
      <li>
        <div class="overlay"></div>
        <a href="#/recipe/${id}" data-id="${id}" class="recipe">
          <img src=${imgsrc} alt="${title}" title="${title}">
        </a>
      </li>
      `;

                    li = li + html;
                });
                // console.log(li);
                $(ul).addClass('hp');
                $(ul).append(h2, li);
                $('.similar-recipes').html(ul);

                $('.hp li').hover(function() {
                    $(this).find('.overlay').addClass('hide');
                }, function() {
                    $(this).find('.overlay').removeClass('hide');
                });
            });

        });
    });


};