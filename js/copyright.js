module.exports = function() {
  const d = new Date();
  const year = d.getFullYear();
  const html = `&copy; ${year}`;
  $('.footer span').html(html);
};