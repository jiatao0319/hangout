$(function(){

    var id = getURLParameter("id");

    $.ajax({
        url: "/hangouts/" + id,
        dataType: "json",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            //请求成功时处理
            var jsonDateValue = new Date(data.date);
            var date = jsonDateValue.getFullYear() + "-" + (jsonDateValue.getMonth() + 1) + "-" + jsonDateValue.getDate();
            $("#date-text").val(date);

            var type = "";
            if ((data.type).indexOf("EAT") >= 0) {
                type = "eat";
            } else  if ((data.type).indexOf("DRINK") >= 0) {
                type = "drink";
            } else  if ((data.type).indexOf("PLAY") >= 0) {
                type = "play";
            }

            setHangoutType(type);

            $("#type-" + type + "-select").find("option[value='" + data.type + "']").attr("selected", true);


            $("#scope-text").val(data.scope);
            $("#location-text").val(data.location);
        },
        error : function() {
            // view("异常！");
            alert("没网还想调戏我！");
        }
    });
});