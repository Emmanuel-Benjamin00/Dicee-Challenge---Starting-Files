//Two random variables
var ran1 = Math.round(Math.random()*5);
var ran2 = Math.round(Math.random()*5);

//array of die images to be displayed
var imlist = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];

//selecting the img tags and adding the random method on them
var dice = document.querySelectorAll("div img");
dice[0].setAttribute("src",imlist[ran1]);
dice[1].setAttribute("src",imlist[ran2]);

//winning calculation
if(ran1<ran2){
    document.querySelector("h1").textContent ="🚩 Player 1 Wins!";
}else if(ran1>ran2){
    document.querySelector("h1").textContent ="Player 2 Wins! 🚩";
}else{
    document.querySelector("h1").textContent ="Draw";
}







