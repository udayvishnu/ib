
window.alert("DECIDE THE PLAYERS BETWEEN YOU AND YOUR OPPONENT");

var randomnumber1 = Math.floor(Math.random()*6 +1 );

var randomimage1 = "images/dice"+randomnumber1+".png";

var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomimage1);;

var randomnumber2 = Math.floor(Math.random()*6 +1 );

var randomimage2 = "images/dice"+randomnumber2+".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomimage2);


if(randomnumber1 > randomnumber2){

    document.getElementById("tf").innerHTML = "Player 1 wins";
}

else if( randomnumber2 > randomnumber1) {

    document.getElementById("tf").innerHTML = "Player 2 wins";
}
else{

    document.getElementById("tf").innerHTML = "DRAW";
}
