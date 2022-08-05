'use strict';

$(".navigator > li > a").click(function(){
    let tabIndex = $(this).parent().index();

    $(".navigator").find("li").removeClass("active");
    $(this).parent().addClass("active");

    $(".visual").css({"left": `${tabIndex * -900}px`,})
});