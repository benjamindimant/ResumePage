$(document).scroll(function() {
  if ($(this).scrollTop() >= $("#contact").offset().top - 40) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#222"});
  } else if ($(this).scrollTop() >= $("#projects").offset().top - 40) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#f8f9fa"});
  } else if ($(this).scrollTop() >= $("#experience").offset().top - 40) {
    $('#navbarCollapse > ul > li.nav-item > a').css({"color": "#222"});
  } else if ($(this).scrollTop() >= $("#skills").offset().top - 40) {
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
  if ($(this).scrollTop() >= $("#contact").offset().top - 40) {
    $('.navbar-brand').css({"color": "#222"});
  } else if ($(this).scrollTop() >= $("#projects").offset().top - 40) {
    $('.navbar-brand').css({"color": "#f8f9fa"});
  } else if ($(this).scrollTop() >= $("#experience").offset().top - 40) {
    $('.navbar-brand').css({"color": "#222"});
  } else if ($(this).scrollTop() >= $("#skills").offset().top - 40) {
    $('.navbar-brand').css({"color": "#f8f9fa"});
  } else if ($(this).scrollTop() >= $("#education").offset().top - 40) {
    $('.navbar-brand').css({"color": "#222"});
  } else if ($(this).scrollTop() >= $("#about").offset().top - 40) {
    $('.navbar-brand').css({"color": "#f8f9fa"});
  } else {  
    $('.navbar-brand').css({"color": "#222"});
  }
});

$(document).scroll(function() {
  if ($(this).scrollTop() >= $("#contact").offset().top - 40) {
    $('nav').css({"background-color": "#f8f9fa", "box-shadow": "0 0 5px 10px #f8f9fa"});
  } else if ($(this).scrollTop() >= $("#projects").offset().top - 40) {
    $('nav').css({"background-color": "#222", "box-shadow": "0 0 5px 10px #222"});
  } else if ($(this).scrollTop() >= $("#experience").offset().top - 40) {
    $('nav').css({"background-color": "#f8f9fa", "box-shadow": "0 0 5px 10px #f8f9fa"});
  } else if ($(this).scrollTop() >= $("#skills").offset().top - 40) {
    $('nav').css({"background-color": "#222", "box-shadow": "0 0 5px 10px #222"});
  } else if ($(this).scrollTop() >= $("#education").offset().top - 40) {
    $('nav').css({"background-color": "#f8f9fa", "box-shadow": "0 0 5px 10px #f8f9fa"});
  } else if ($(this).scrollTop() >= $("#about").offset().top - 40) {
    $('nav').css({"background-color": "#222", "box-shadow": "0 0 5px 10px #222"});
  } else {  
    $('nav').css({"background-color": "#f8f9fa", "box-shadow": "0 0 5px 10px #f8f9fa"});
  }
});