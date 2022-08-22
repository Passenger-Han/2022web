// 'use strict';

let $oneTop = $("#s01").offset().top;
let $twoTop = $("#s02").offset().top;
let $threeTop = $("#s03").offset().top;

// $(".menu-wrapper > a").eq(0).click(function(e){
//     e.preventDefault();
//     $(".menu-wrapper > a").removeClass("active");
//     $(this).addClass("active");
//     $("html, body").stop().animate({scrollTop: $oneTop});
// })

$(".menu-wrapper > a").click(function(e){
    e.preventDefault();
    let $scene = $(".scene").eq($(this).index()).offset().top;
    $("html, body").stop().animate({scrollTop: $scene}, 1100);
})

$(window).scroll(function(){
    // console.log($(document).scrollTop());
    
    // if ($(document).scrollTop() < $twoTop){
    //     $(".menu-wrapper > a").removeClass("active");
    //     $(".menu-wrapper > a").eq(0).addClass("active");
    // } else if ($(document).scrollTop() < $threeTop){
    //     $(".menu-wrapper > a").removeClass("active");
    //     $(".menu-wrapper > a").eq(1).addClass("active");
    // } else if ($(document).scrollTop() >= $threeTop){
    //     $(".menu-wrapper > a").removeClass("active");
    //     $(".menu-wrapper > a").eq(2).addClass("active");
    // }

    // if (scrollY >= $oneTop){
    //     $(".menu-wrapper > a").removeClass("active");
    //     $(".menu-wrapper > a").eq(0).addClass("active");
    // }
    // if (scrollY >= $twoTop){
    //     $(".menu-wrapper > a").removeClass("active");
    //     $(".menu-wrapper > a").eq(1).addClass("active");
    // }
    // if (scrollY >= $threeTop){
    //     $(".menu-wrapper > a").removeClass("active");
    //     $(".menu-wrapper > a").eq(2).addClass("active");
    // }
    
    // for (let i = 0; i < $(".scene").length; i++){
    //     if ($(".scene").eq(i).offset().top <= scrollY){
    //         $(".menu-wrapper > a").removeClass("active").eq(i).addClass("active");
    //     }
    // }

    $(".scene").each(function(index){
        if ($(this).offset().top <= scrollY){
            $(".menu-wrapper > a").removeClass("active").eq(index).addClass("active");
        }
    })
})