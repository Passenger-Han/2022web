// jQuery
let switching = false;
$(".toggle-menu").click(function(){
    if (switching == false){
        $(".top-menu").addClass("active");
        $(".toggle-menu").addClass("active");
        switching = true;
    } else {
        $(".top-menu").removeClass("active");
        $(".toggle-menu").removeClass("active");
        switching = false;
    }
})