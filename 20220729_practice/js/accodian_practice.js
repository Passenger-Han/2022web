'use strict';
$(".accodian > li > a").click(function(){
    if ($(this).parent().hasClass("active") == false){
        $(".accodian > li").removeClass("active");
        $(this).parent().addClass("active");
    } else {
        $(this).parent().removeClass("active");
    }
});