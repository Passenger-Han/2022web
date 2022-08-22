'use strict';
let swiper01 = new Swiper('.swiper', {
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
});

$("#content-3rd.banner > .row > div").hover(function(){
    $(this).find(".card-img").removeClass("moon");
}, function(){
    $(this).find(".card-img").addClass("moon");
})