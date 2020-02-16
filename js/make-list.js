const log = require('./log.js');

module.exports = function(data, theClass, elem) {
    // log('make-list.js');
  
    // log(data);
    var ul = document.createElement("UL");
    var li = '';

    $.each(data, function(i, val) {
        // var imgsrc = val.image;
        var title = val.title;
        var servings = val.servings;
        var cookTime = val.readyInMinutes;
        var id = val.id;
        var imgsrc = `https://spoonacular.com/recipeImages/${id}-636x393.jpg`;
        var html = `
      <li>
        <div class="overlay"></div>
        <a href="#/recipe/${id}" data-id="${id}" class="recipe">
          <img src=${imgsrc} alt="${title}" title="${title}">
          <div>
            <h2>${title}</h2>
            <p>Cook time: ${cookTime} min</p>
            <p>Servings: ${servings}</p>
          </div>
        </a>
      </li>
      `;

        li = li + html;
    });
  
    $(ul).addClass(theClass);
    $(ul).append(li);
    $(elem).html(ul);


};