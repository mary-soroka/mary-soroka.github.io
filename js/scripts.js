$(window).scroll(function(){
    $(".name").css("opacity", 1 - $(window).scrollTop() / 500);
    $(".video").css("opacity", 1 - $(window).scrollTop() / 500);
    $(".prompt").css("opacity", 1 - $(window).scrollTop() / 500);
  });

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 350) {
    $('.nav-gradient').fadeIn(500);
    $('.nav-name').fadeIn(500);
    $('.nav').fadeIn(500);
  } else {
    $('.nav-gradient').fadeOut();
    $('.nav-name').fadeOut();
    $('.nav').fadeOut();
  }
});