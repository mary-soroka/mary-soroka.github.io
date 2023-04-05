/* HIDE_ELEMENTS_ON_SCROLL_DOWN */

$(window).scroll(function(){
  $(".header").css("opacity", 1 - $(window).scrollTop() / 200);
  $(".video").css("opacity", 1 - $(window).scrollTop() / 400);

  $(".nav_top_right").css("opacity", 1 - $(window).scrollTop() / 500);

  $(".detail_text_top_left").css("opacity", 1 - $(window).scrollTop() / 100);
  $(".detail_text_bottom_middle").css("opacity", 1 - $(window).scrollTop() / 50);

  $(".detail_text_bottom_left").css("opacity", 1 - $(window).scrollTop() / 800);
  $(".detail_text_bottom_right").css("opacity", 1 - $(window).scrollTop() / 800);
});

/* SHOW_ELEMENTS_ON_SCROLL_DOWN 

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.back').fadeIn(500);
  } else {
    $('.back').fadeOut();
  }
});

*/