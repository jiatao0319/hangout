$(function(){

    var type = getURLParameter("type");

    // Init datetimepicker
    $("#datetimepicker").datetimepicker({value: new Date(), format: 'Y-m-d'});

    // Set the hangout type
    setHangoutType(type);

     $("#create-date-btn").on("click", function () {
            $.ajax({
                url: "/hangouts",
                data: JSON.stringify({
                      "date": $("#datetimepicker").val(),
                      "type": $("#type-" + type + "-select").val(),
                      "location": $("#location").val(),
                      "scope": $("#scope").val()
                    }),
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    //请求成功时处理
                    window.location = "index.html?type=" + type;
                },
                error : function() {
                    // view("异常！");
                    alert("没网还想调戏我！");
                }
            });
     });
});