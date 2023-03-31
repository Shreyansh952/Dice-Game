function checkRefresh() {
    if(!sessionStorage.getItem("rollDice")){
        sessionStorage.setItem("rollDice","value");
    }else{
        rollDice();
    }
}

function rollDice() {
var randomNumber1 = Math.ceil(Math.random() * 6);
document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.ceil(Math.random() * 6);
document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2 + ".png");

var result = document.querySelector("h1");

if(randomNumber1 > randomNumber2){
    result.innerHTML = "🚩 Player one wins "
}else if(randomNumber2 > randomNumber1){
    result.innerHTML = "Player 2 wins 🚩"
}else {
    result.innerHTML = "Draw!";
}
}

window.onload = checkRefresh();