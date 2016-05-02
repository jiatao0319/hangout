$(function(){

    var type = getURLParameter("type");

    // Init datetimepicker
    $("#datetimepicker").datetimepicker({value: new Date()});

    // Set the hangout type
    setHangoutType(type);

     $("#create-date-btn").on("click", function () {
            $.ajax({
                url: "/hangouts",
                data: {
                      "date": $("#datetimepicker").val(),
                      "type": $("#type-" + type + "-select").val(),
                      "location": $("#location").val(),
                      "scope": $("#scope").val()
                    },
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    //请求成功时处理
                    alert("创建成功！");
                },
                error : function() {
                    // view("异常！");
                    alert("异常！");
                }
            });
     });
})

function setHangoutType (type) {
    $("div[id*='type-']").hide();
    $("#type-" + type).show();
};

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
};
