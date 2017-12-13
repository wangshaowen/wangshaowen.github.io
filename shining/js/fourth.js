$("#bd_b ul #bd_b_b").mouseenter(function() {
	var rel = $(this).find(".bd_b_btn").attr("src").replace("_h.", "_b.");
	$(this).find(".bd_b_btn").attr("src", rel);
});
$("#bd_b ul #bd_b_b").mouseleave(function() {
	var rel = $(this).find(".bd_b_btn").attr("src").replace("_b.", "_h.");
	$(this).find(".bd_b_btn").attr("src", rel);
});