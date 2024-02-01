/* HIDE_ELEMENTS_ON_SCROLL_DOWN */

$(window).scroll(function(){
  $(".video-background").css("opacity", 1 - $(window).scrollTop() / 200);
  $(".top_right_light").css("opacity", 1 - $(window).scrollTop() / 200);
  $(".top_left_light").css("opacity", 1 - $(window).scrollTop() / 200);
  $(".top_left_dark_mobile").css("opacity", 1 - $(window).scrollTop() / 200);
  $(".bottom_left").css("opacity", 1 - $(window).scrollTop() / 200);
});

/* SHOW_ELEMENTS_ON_SCROLL_DOWN  */

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 200) {
    $('.bottom_right').fadeIn(200);
  } else {
    $('.bottom_right').fadeOut();
  }
});