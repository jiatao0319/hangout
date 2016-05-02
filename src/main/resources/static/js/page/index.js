$(function(){
    $("#my-date-div").hide();

	// When "喊我" button is clicked
	$("#hangout-go").on("click", function () {
	    $("#hangout-type").val();
        window.location = "createdate.html?type=" + $("#hangout-type").val();
	});

	var type = getURLParameter("type");
	$("#hangout-type").find("option[value='" + type + "']").attr("selected", true);

    $.ajax({
            url: "/hangouts",
            dataType: "json",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                $.each(data, function(n, value){
                    $("#my-date-div").show();
                    var jsonDateValue = new Date(value.date);
                    var date = jsonDateValue.getFullYear() + "-" + (jsonDateValue.getMonth() + 1) + "-" + jsonDateValue.getDate();
                    var type = "";
                    if ((value.type).indexOf("EAT") >= 0) {
                        type = "吃啥";
                    } else  if ((value.type).indexOf("DRINK") >= 0) {
                        type = "喝啥";
                    } else  if ((value.type).indexOf("PLAY") >= 0) {
                        type = "玩啥";
                    }
                    $("#my-date").append("<li><a href='/datedetail.html?id=" + value.id + "' class='hw-fy-title'><span class='" + (value.matched? "matched" : "") + "'>" + date + ":" + type + "</span></a><span class='pull-right'>匹配度：" + (value.matched? "100%" : "80%") + "</span></li>");
                });
                setInterval(function(){ $(".matched").fadeOut(100).fadeIn(100); },200);
            },
            error : function() {
                // view("异常！");
                alert("没网还想调戏我！");
            }

    });
});