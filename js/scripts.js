$(window).on("scroll", function(e) {
	if ($(window).scrollTop() >= $('name').height()) $('name').fadeOut(500);
	else $('name').fadeIn(500);
});