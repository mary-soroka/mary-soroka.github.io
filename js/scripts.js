/* HIDE_ELEMENTS_ON_SCROLL_DOWN */

$(window).scroll(function(){
  $(".video-background").css("opacity", 1 - $(window).scrollTop() / 200);
  $(".top_light").css("opacity", 1 - $(window).scrollTop() / 200);
  $(".top_left_light").css("opacity", 1 - $(window).scrollTop() / 200);
});

/* SHOW_ELEMENTS_ON_SCROLL_DOWN  */

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 200) {
    $('.top_dark').fadeIn(200);
    $('.top_left_dark').fadeIn(200);
    $('.bottom_right').fadeIn(200);
  } else {
    $('.top_dark').fadeOut();
    $('.top_left_dark').fadeOut();
    $('.bottom_right').fadeOut();
  }
});