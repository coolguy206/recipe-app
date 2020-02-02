const log = require('./log.js');

module.exports = function(data, theClass, elem) {
    log('make-list.js');
    // console.log(data);
    log(data);
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
    $(ul).addClass(theClass);
    $(ul).append(li);
    $(elem).html(ul);


};