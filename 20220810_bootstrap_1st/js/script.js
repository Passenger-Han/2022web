'use strict';

$("#content-2nd .btn-group .btn").click(function(){
    $("#content-2nd .btn-group .btn").removeClass("active");
    $(this).addClass("active");
    
    $("#content-2nd .row").isotope({
        filter: $(this).attr("data-filter"),
    });
});


window.onload = function(){    
    // $("#content-2nd .btn-group .btn").eq(0).trigger("click");
    $("#content-2nd .row").isotope();
    $("#owl1").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 24,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            760: {
                items: 2,
            },
            1200: {
                items: 4,
            },
        },
    });
    $("#owl2").owlCarousel({
        loop: true,
        center: true,
        autoplay: true,
        margin: 24,
        nav: true,
        navText: [`<i class="fa-solid fa-circle-chevron-left d-none d-md-block"></i>`, `<i class="fa-solid fa-circle-chevron-right d-none d-md-block"></i>`],
        responsive: {
            0: {
                items: 1,
            },
            760: {
                items: 2,
            },
            1200: {
                items: 5,
            },
        },
    });
    $("#content-2nd .row a").magnificPopup({type: 'image',});
    $("#content-4th #owl2 a").magnificPopup({type: 'image',});
}

const lazyLoadCall = document.querySelectorAll(".lazy-load");

console.log(window.innerHeight);

window.addEventListener('scroll', function(){
    lazyLoadCall.forEach((element) => {
        let rect = element.getBoundingClientRect().top;
        console.log(rect);
        if (rect <= window.innerHeight - 225){
            element.classList.add("fade");
        }
    })
})