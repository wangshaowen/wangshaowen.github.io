var arr = ["img2/Banner (1).jpg", "img2/Banner (2).jpg", "img2/Banner (3).jpg"];
$("#bg_img_msk span").click(function() {
	$("#bg_img_msk span").removeClass("changeColor");
	$(this).addClass("changeColor");
	index = $(this).index();
	$("#bg_img_t img").attr("src", arr[index]).fadeIn();
});
var index = 1;
var timerID = setInterval(function() {
	$("#bg_img_t img").attr("src", arr[index]).fadeIn();
	$("#bg_img_msk span").removeClass("changeColor");
	$("#bg_img_msk span").eq(index).addClass("changeColor");
	index++;
	if(index == 3) {
		index = 0;
	}
}, 2000);
$(window).scroll(function() {
	var contentHeight = $(window).height();
	var scrollHeight = $(window).scrollTop();
	var minindex = getMinIndex($('#bd_falls_f ul'));
	var minHeight =$("#bd_falls_f ul").eq(minindex).outerHeight();
	if(contentHeight + scrollHeight > minHeight) {
		var data = {
			"data": [{
				"src": "室外1021更新-0001.jpg"
			}, {
				"src": "室外1021更新-0002.jpg"
			}, {
				"src": "室外1021更新-0003.jpg"
			}, {
				"src": "室外1021更新-0004.jpg"
			}, {
				"src": "室外1021更新-0005.jpg"
			}, {
				"src": "室外1021更新-0006.jpg"
			}, {
				"src": "室外1021更新-0007.jpg"
			}, {
				"src": "室外1021更新-0008.jpg"
			}, {
				"src": "室外1021更新-0009.jpg"
			}, {
				"src": "室外1021更新-0010.jpg"
			}, {
				"src": "室外1021更新-0011.jpg"
			}, {
				"src": "室外1021更新-0012.jpg"
			}, {
				"src": "室外1021更新-0013.jpg"
			}, {
				"src": "室外1021更新-0014.jpg"
			}, {
				"src": "室外1021更新-0015.jpg"
			}, {
				"src": "室外1021更新-0016.jpg"
			}, {
				"src": "室外1021更新-0017.jpg"
			}, {
				"src": "室外1021更新-0018.jpg"
			}, {
				"src": "室外1021更新-0019.jpg"
			}, {
				"src": "室外1021更新-0020.jpg"
			}, {
				"src": "室外1021更新-0021.jpg"
			}, {
				"src": "室外1021更新-0022.jpg"
			}, {
				"src": "室外1021更新-0023.jpg"
			}, {
				"src": "室外1021更新-0024.jpg"
			}]
		};
		var str = "";
		var templ = '<li><a href = "###" ><img src="img2/{{src}}" /> <div class = "mask" ><img src="img2/fangda.png" alt="" /> </div> </a> </li>'
		var num = 0;
		for(var i = 0; i < data.data.length; i++) {
			str = templ.replace("{{src}}", data.data[i].src);
			var minIndex = getMinIndex($('#bd_falls_f ul'));
			$(str).appendTo($('#bd_falls_f ul')[minIndex]);
			num++;
			if(num == 4) {
				num = 0;
			}
		}

		$("#bd_falls_f ul li").mouseenter(function() {
			$(this).find(".mask").css("display", "block");
		});
		$("#bd_falls_f ul li").mouseleave(function() {
			$(this).find(".mask").css("display", "none");
		});
		$("#bd_falls_f ul li .mask").click(function() {
			$("#mask_b").css("display", "block");
			var src = $(this).parent().find("img").eq(0).attr("src");
			$("#mask_b img").attr("src", src);
			console.log(src);
		});
		$("#mask_b").click(function() {
			$("#mask_b").css("display", "none");
		});
	}
	$("#mask_b").css("top", $(window).scrollTop());
});

function getMinIndex(eleArr) {
	var min = 0; //默认第一个最小
	for(var i = 0; i < eleArr.length; i++) {
		min = eleArr[min].offsetHeight > eleArr[i].offsetHeight ? i : min;
	}
	return min;
}