$(document).scroll(function() {
  if ($(this).scrollTop() >= $("#projects").offset().top - 40) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#222"});
  } else if ($(this).scrollTop() >= $("#experience").offset().top - 40) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#f8f9fa"});
  } else if ($(this).scrollTop() >= $("#education").offset().top - 40) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#222"});
  } else if ($(this).scrollTop() >= $("#about").offset().top - 40) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#f8f9fa"});
  } else {  
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#222"});
  }
});

$(document).scroll(function() {
  if ($(this).scrollTop() >= $("#projects").offset().top - 40) {
    $('.navbar-brand').css({"color": "#222"});
  } else if ($(this).scrollTop() >= $("#experience").offset().top - 40) {
    $('.navbar-brand').css({"color": "#f8f9fa"});
  } else if ($(this).scrollTop() >= $("#education").offset().top - 40) {
    $('.navbar-brand').css({"color": "#222"});
  } else if ($(this).scrollTop() >= $("#about").offset().top - 40) {
    $('.navbar-brand').css({"color": "#f8f9fa"});
  } else {  
    $('.navbar-brand').css({"color": "#222"});
  }
});