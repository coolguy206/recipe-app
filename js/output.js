const ajax = require('./get.js');
const log =require('./log.js');
const api =require('./api.js');

module.exports = function(data) {
console.log('output.js');
    // console.log(data);
    log(data);
    var ul = document.createElement("UL");
    var li = '';
    $.each(data.recipes, function(i,val){
      var imgsrc = val.image;
      var title = val.title;
      var id = val.id;
      var html = `
      <li>
        <div class="overlay"></div>
        <a href="#/recipe/${id}">
          <img src=${imgsrc} alt="${title}">
        </a>
      </li>
      `;

      li = li + html;
    });
    // console.log(li);
    $(ul).addClass('hp');
$(ul).append(li);
$('.main').html(ul);


};
