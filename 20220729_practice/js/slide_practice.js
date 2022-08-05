'use strict';
let horizontalCounter = 0;
let verticalCounter = 0;
let fadingCounter = 0;
let fadingZIndex = 0;

setInterval(horizontal, 3000);
function horizontal(){
    horizontalCounter++;
    if (horizontalCounter == 4) {
        $(".slide-horizontal").css("left", 0);
        horizontalCounter = 1;
    }
    $(".slide-horizontal").stop().animate({"left": `${horizontalCounter * -600}px`}, 600);
}

setInterval(vertical, 3000);
function vertical(){
    verticalCounter++;
    if (verticalCounter == 4) {
        $(".slide-vertical").css("top", 0);
        verticalCounter = 1;
    }
    $(".slide-vertical").stop().animate({"top": `${verticalCounter * -250}px`}, 600);
}

setInterval(fading, 3000);
function fading(){
    fadingCounter++;
    if (fadingCounter == 3){
        fadingCounter = 0;
        fadingZIndex++;
    }
    $(".slide-fading li").stop().animate({"opacity": 0,}, 600);
    $(".slide-fading li").eq(fadingCounter).stop().animate({"opacity": 1, "z-index": `${fadingZIndex}`}, 600);
}