var css = document.querySelector(".lol");
var css1 = document.querySelector(".lol1");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var btn = document.querySelector("button");
var body = document.getElementById("gradient");


function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function currentCSS() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value
    + ", " 
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

currentCSS();

function randomHEX() {
    var hex = "0123456789abcdef";
    var hexCode = "#";
    for(var i=0;i<6;i++) {
        hexCode += hex[Math.floor(Math.random()*hex.length)];
    }
    
    return hexCode;
}

console.log(randomHEX());
console.log(randomHEX());

function randomGradient() {
    color1.value = randomHEX();
    color2.value = randomHEX();

    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value
    + ", " 
    + color2.value
    + ")";

    css1.textContent = "Random gradient: " + body.style.background + ";";
}


btn.addEventListener("click", randomGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
