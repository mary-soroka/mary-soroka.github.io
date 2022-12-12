/* HIDE_ELEMENTS_ON_SCROLL_DOWN */

$(window).scroll(function(){
  $(".header").css("opacity", 1 - $(window).scrollTop() / 400);
  $(".video").css("opacity", 1 - $(window).scrollTop() / 400);
  $(".loading").css("opacity", 1 - $(window).scrollTop() / 10);
  $(".detail_text_top_left").css("opacity", 1 - $(window).scrollTop() / 200);
  $(".detail_text_top_right").css("opacity", 1 - $(window).scrollTop() / 200);
  $(".detail_text_top_middle").css("opacity", 1 - $(window).scrollTop() / 200);

  $(".detail_text_bottom_middle").css("opacity", 1 - $(window).scrollTop() / 50);

  $(".detail_text_bottom_left").css("opacity", 1 - $(window).scrollTop() / 1250);
  $(".detail_text_bottom_right").css("opacity", 1 - $(window).scrollTop() / 1250);
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