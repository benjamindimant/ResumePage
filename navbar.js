var a = $(".navbar").offset().top;

$(document).scroll(function() {
  if ($(this).scrollTop() >= $("#projects").offset().top) {
    $('.navbar').css({"background-color": "#f8f9fa", "box-shadow": "0 0 100px 1px #f8f9fa"});
  } else if ($(this).scrollTop() >= $("#experience").offset().top) {
    $('.navbar').css({"background-color": "#222", "box-shadow": "0 0 100px 1px #222", "color": "#f8f9fa"});
  } else if ($(this).scrollTop() >= $("#education").offset().top) {
    $('.navbar').css({"background-color": "#f8f9fa", "box-shadow": "0 0 100px 1px #f8f9fa"});
  } else if ($(this).scrollTop() >= $("#about").offset().top) {
    $('.navbar').css({"background-color": "#222", "box-shadow": "0 0 100px 1px #222", "color": "#f8f9fa"});
  } else {  
    $('.navbar').css({"background-color": "#f8f9fa", "box-shadow": "0 0 100px 1px #f8f9fa"});
  }
});