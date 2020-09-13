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
  } else {
    $('.nav-gradient').fadeOut();
    $('.nav-name').fadeOut();
  }
});

$('#close_mx').click(function(e) {
  mx = $('#mx');
  mx.html(mx.html());
  $('#mx').hide();
});

$('#close_td').click(function(e) {
  td_visa = $('#td_visa');
  td_visa.html(td_visa.html());
  $('#td_visa').hide();
});

$('#close_bell').click(function(e) {
  bell = $('#bell');
  bell.html(bell.html());
  $('#bell').hide();
});

$('#close_ferrero').click(function(e) {
  ferrero = $('#ferrero');
  ferrero.html(ferrero.html());
  $('#ferrero').hide();
});

$('#close_virgin').click(function(e) {
  virgin = $('#virgin');
  virgin.html(virgin.html());
  $('#virgin').hide();
});

$('#close_ct').click(function(e) {
  ct = $('#ct');
  ct.html(ct.html());
  $('#ct').hide();
});

$("#open_mx").click(function(e){
  $("#mx").show();
});

$("#open_virgin").click(function(e){
  $("#virgin").show();
});

$("#open_td").click(function(e){
  $("#td_visa").show();
});

$("#open_bell").click(function(e){
  $("#bell").show();
});

$("#open_ct").click(function(e){
  $("#ct").show();
});

$("#open_ferrero").click(function(e){
  $("#ferrero").show();
});