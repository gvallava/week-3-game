
//Array of possible computer choices//

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];

//Start game at zero//

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];


//Computer chooses a random letter//

var computerChoice = letters[Math.floor(Math.random() * letters.length)];


//set guess limit//
var updateGuessesLeft = function () {
	document.querySelector("#guessesLeft").innerHTML = " " + guessesLeft;
};

var updateGuessedLetters = function () {
	document.querySelector("#guessedLetters").innerHTML = " " + guessedLetters.join(",");
};




 //Function to automatically reset game//
 	var reset = function() {
 		guesses = 9;
 		guessesLeft = 9;
 		guessedLetters = [];

  		updateGuessedLetters();
  		updateGuessesLeft();
};
 	


//On Key Events//

document.onkeyup = function(event) {
	guessesLeft--;
	var userChoice = String.fromCharCode(event.keyCode).toLowerCase();

	guessedLetters.push(userChoice);
	updateGuessesLeft();
	updateGuessedLetters();

	if (guessesLeft > 0) {
		if (userChoice === computerChoice){
		wins++;
		document.querySelector("#wins").innerHTML = " " + wins;
		alert("Yer a wizard, Harry!");
		reset();
		}

	} else {
	  if (guessesLeft === 0) {
		losses++;
		document.querySelector("#losses").innerHTML = " " + losses;
		alert("You're Not So Raven...");
		reset();
	}
	}
};