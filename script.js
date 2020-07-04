var score1 = parseInt(document.getElementById('score1'));
var add1 = document.getElementById("add1");
var subtract1 = document.getElementById("subtract1");

function addScore(){
	score1 = isNaN(score1) ? 0 : score1;
	score1++;
	document.getElementById('score1').innerHTML = score1;
}

function subtractScore(){
	score1 = isNaN(score1) ? 0 : score1;
	score1--;
	document.getElementById('score1').innerHTML = score1;
}

add1.addEventListener("click", addScore)
subtract1.addEventListener("click", subtractScore)

var score2 = parseInt(document.getElementById('score2'));
var add2 = document.getElementById("add2");
var subtract2 = document.getElementById("subtract2");

add2.addEventListener("click", function(){
	score2 = isNaN(score2) ? 0 : score2;
	score2++;
	document.getElementById('score2').innerHTML = score2;
})

subtract2.addEventListener("click", function(){
	score2 = isNaN(score2) ? 0 : score2;
	score2--;
	document.getElementById('score2').innerHTML = score2;
})