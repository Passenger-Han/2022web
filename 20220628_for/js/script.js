console.log('OK!')
// document.getElementsByClassName('box')[0].innerText = 'lorem2';

let btn = document.querySelectorAll('.btn');
let box = document.querySelectorAll('.box');

btn[0].addEventListener("click", function(){box[0].innerText = "메롱 ^v^";});

let array = [1, 2, 3, 4];
console.log(array);