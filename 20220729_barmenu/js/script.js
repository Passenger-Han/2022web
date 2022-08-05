'use strict';

function Over(){
    let i = $(this).index();
    
    let value = i * 300;
    $(".bar").css({"left": value, "opacity": 1,});
}

function Out(){
    $(".bar").css({"opacity": 0,});
}

function MenuIndex(menuNumber){
    function OutSubpage(){
        $(".bar").css({"left": menuNumber * 300, "opacity": 1,});
    }

    if (menuNumber != "main"){
        $(".wrapper-navigator .navigator li").eq(menuNumber).addClass("active");
        $(".wrapper-navigator .bar").css({"left": 300 * menuNumber, "opacity":1,});
        $(".wrapper-navigator .navigator li").mouseover(Over);
        $(".wrapper-navigator .navigator").mouseout(OutSubpage);
    } else {
        $(".wrapper-navigator .navigator li").mouseover(Over);
        $(".wrapper-navigator .navigator").mouseout(Out);
    }
}