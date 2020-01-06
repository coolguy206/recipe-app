module.exports = function(url) {
  $.get(url, function(data) {
    console.log(data);
    var html = '<img src="' + data.recipes[0].image + '" alt="' + data.recipes[0].title + '">';
    $('.main').html(html);
  });
};