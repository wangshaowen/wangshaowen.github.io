$("#head #head_r li,#footer ul li").mouseenter(function() {
	var rel = $(this).children().children()[0] ? true : false;
	if(rel) {
		var rel = $(this).children().children().attr("src").replace(".", "_h.");
		$(this).children().children().attr("src", rel);
	} else {
		$(this).children().addClass("mouse").css("color", "white");
	}
});
$("#head #head_r ul li,#footer ul li").mouseleave(function() {
	var rel = $(this).children().children()[0] ? true : false;
	if(rel) {
		var rel = $(this).children().children().attr("src").replace("_h.", ".");
		$(this).children().children().attr("src", rel);
	} else {
		$(this).children().removeClass("mouse").css("color", "");
	}
});
$("#nav").mouseenter(function(){
	$("#nav ul").css("display","block");
});
$("#nav").mouseleave(function(){
	$("#nav ul").css("display","none");
});
