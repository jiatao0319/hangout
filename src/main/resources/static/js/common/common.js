$(function(){
	$(".hw-tab-toggle-box .hw-tab-content").eq(0).show();

	$(".hw-tab-toggle .hw-tab-nav li").click(function(){
		var _index = $(this).index(); 
		$(this).addClass("active").siblings().removeClass("active");
		var _selector= $(".hw-tab-toggle-box .hw-tab-content");
		_selector.hide();
		_selector.eq(_index).show();
	});

	$(".hw-tab-content-box .hw-tab-cont-ul").each(function(){
		$(this).find("li:gt(4)").hide();
	});

	$(".hw-toggle-more").click(function(){
		var _parents = $(this).parents(".hw-tab-content-box");
		_parents.find(".hw-tab-cont-ul li").show();
	});

	// When "喊我" button is clicked
	$("#hangout-go").on("click", function () {
	    $("#hangout-type").val();
        window.location = "createdate.html?type=" + $("#hangout-type").val();
	});
})
