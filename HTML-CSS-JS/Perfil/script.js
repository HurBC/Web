var owo = document.querySelector("#owo")
var img = document.querySelector(".avatar-m")
var user1 = document.querySelector(".user-line1")
var user2 = document.querySelector(".user-line2")

var number1 = document.querySelector(".connections1")
var count1 = 1;

var number2 = document.querySelector(".connections2")
var count2 =  488;

function changeName(element) {
    owo.innerText = "BruH"
    img.src = "img/si.jpg"
}

function accept(event) {
    number1.innerText = count1--;
    number2.innerText = count2++;
    user1.remove()
}

function accept2(event) {
    number1.innerText = count1--;
    number2.innerText = count2++;
    user2.remove()
}

function removing(event) {
    number1.innerText = count1--;
    number2.innerText = count2--;
    user1.remove()
}

function removing2(event) {
    number1.innerText = count1--;
    number2.innerText = count2--;
    user2.remove()
}