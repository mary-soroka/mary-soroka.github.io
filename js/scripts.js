/* HIDE_ELEMENTS_ON_SCROLL_DOWN */

$(window).scroll(function(){
  $(".name").css("opacity", 1 - $(window).scrollTop() / 500);
  $(".video").css("opacity", 1 - $(window).scrollTop() / 400);
  $(".nav_top_left").css("opacity", 1 - $(window).scrollTop() / 200);
  $(".nav_top_right").css("opacity", 1 - $(window).scrollTop() / 200);
  $(".nav_bottom_left").css("opacity", 1 - $(window).scrollTop() / 50);

});

/* SHOW_ELEMENTS_ON_SCROLL_DOWN */

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.back').fadeIn(500);
  } else {
    $('.back').fadeOut();
  }
});

