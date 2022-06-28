var num = Math.floor(Math.random() * 10);
// console.log(num);

// Math.floor() 소수점 버림
// Math.random() 0에서 1사이의 난수 생성

var result;
var comInput;
if (num < 3) {
    var comInput = "가위";
} else if (num < 6) {
    var comInput = "바위";
} else {
    var comInput = "보";
}
console.log("컴퓨터의 선택: " + comInput);

var userInput = prompt("가위, 바위, 보를 입력하세요.");
console.log("당신의 선택: " + userInput);

if (userInput != "가위" && userInput != "바위" && userInput != "보") {
    alert("가위, 바위, 보 중 하나를 입력하세요.");
} else {    
    if (comInput == "가위") {
        if (userInput == "가위") {
            result = "비겼습니다.";
        }
        
        if (userInput == "바위") {
            result = "당신이 이겼습니다.";
        }
        
        if (userInput == "보") {
            result = "당신이 졌습니다.";
        }
    }

    if (comInput == "바위") {
        if (userInput == "바위") {
            result = "비겼습니다.";
        }
        
        if (userInput == "보") {
            result = "당신이 이겼습니다.";
        }
        
        if (userInput == "가위") {
            result = "당신이 졌습니다.";
        }
    }

    if (comInput == "보") {
        if (userInput == "보") {
            result = "비겼습니다.";
        }
        
        if (userInput == "가위") {
            result = "당신이 이겼습니다.";
        }
        
        if (userInput == "바위") {
            result = "당신이 졌습니다.";
        }
    }
}

alert(result);