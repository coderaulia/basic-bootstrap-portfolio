$(".scrolling").on("click", function (e) {
	var links = $(this).attr("href");

	var Elements = $(links);

	$("html, body").animate({
		scrollTop: Elements.offset().top - 50,
	});

	e.preventDefault();
});
