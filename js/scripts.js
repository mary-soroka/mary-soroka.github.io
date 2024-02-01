/* HIDE_ELEMENTS_ON_SCROLL_DOWN */

$(window).scroll(function(){
  $(".video-background").css("opacity", 1 - $(window).scrollTop() / 500);
  $(".top_light").css("opacity", 1 - $(window).scrollTop() / 500);
  $(".top_left_light").css("opacity", 1 - $(window).scrollTop() / 500);
});

/* SHOW_ELEMENTS_ON_SCROLL_DOWN  */

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.top_dark').fadeIn(500);
    $('.top_left_dark').fadeIn(500);
  } else {
    $('.top_dark').fadeOut(500);
    $('.top_left_dark').fadeOut(500);
  }
});