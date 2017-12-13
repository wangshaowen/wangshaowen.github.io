$("#bd ul").mouseenter(function() {
	$(this).children().eq(1).css("background-color", "rgb(207,219,0)");
	var rel = $(this).find("img").attr("src").replace(".", "_h.");
	$(this).find("img").attr("src", rel);
});
$("#bd ul").mouseleave(function() {
	$(this).children().eq(1).css("background-color", "");
	var rel = $(this).find("img").attr("src").replace("_h.", ".");
	$(this).find("img").attr("src", rel);
});