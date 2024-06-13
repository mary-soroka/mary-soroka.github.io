/* HIDE_ELEMENTS_ON_SCROLL_DOWN */

$(window).scroll(function(){
  $(".video-background").css("opacity", 1 - $(window).scrollTop() / 100);
  $(".top_right_light").css("opacity", 1 - $(window).scrollTop() / 100);
  $(".top_left_light").css("opacity", 1 - $(window).scrollTop() / 100);
  $(".top_left_dark_mobile").css("opacity", 1 - $(window).scrollTop() / 100);
  $(".bottom_left").css("opacity", 1 - $(window).scrollTop() / 100);
});

/* SHOW_ELEMENTS_ON_SCROLL_DOWN  */

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.bottom_right').fadeIn(100);
  } else {
    $('.bottom_right').fadeOut();
  }
});