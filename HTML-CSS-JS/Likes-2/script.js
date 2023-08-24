var nine = document.querySelector("#nine");
var twelve = document.querySelector("#twelve");
var nine2 = document.querySelector("#nine-2");

var count = 9;
var count1 = 12;
var count2 = 9;
var message = "like(s)"

function owo(element) {
    nine.innerText = count++ + message;
}

function uwu(element) {
    twelve.innerText = count1++ + message;
}

function owu(element) {
    nine2.innerText = count2++ + message;
}