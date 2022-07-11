let view = true;

$(".toggle-menu").click(function(){
    if (view == true) {
        $(".top-menu").addClass("active");
        view = false;
    } else {
        $(".top-menu").removeClass("active");
        view = true;
    }
})