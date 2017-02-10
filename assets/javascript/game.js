$(document).ready(function(){

	//variables
	var wordbank = ["johanna", "muradin", "illidan", "valla", "falstad", "leoric",
	"diablo", "chen", "zagara", "arthas"];
	var blankWord = [];
	var word = wordbank[Math.floor(Math.random()*wordbank.length)];
	var currentGuess = "";
	var lives = 10;
	//build arrays for correct and incorrect letters
	var correctLetters = [];
	var wrongLetters = [];

	//For testing purposes
	$("#title").append(word);

	//Initial amount of lives
	$("#lives-remaining").text(lives);

	//build array of underscores, and append to HTML
	for (var i = 0; i < word.length; i++) {
		blankWord.push('_');
		$("#word-body").append("_ ");
	}

	//build string of underscores
	var blankWordString = blankWord.join(" ");

	//display hint image
	$("#hintImage").attr('src', "assets/images/" + word + ".jpg");
	$("#hintImage").attr('alt', word + " image");

	//Check if presses letter is in word
	$(document).keypress(function(e) {
		var tracker = false;
		for (var i = 0; i < word.length; i++) {
			if (e.which == word.charCodeAt(i)) {
				correctLetters.push(word.charAt(i));
				rebuildWord(word.charAt(i));
				$("#word-body").text(blankWordString);
				tracker = true;
			} 
		}

		//Append incorrect letter and check if out of lives
		if (!tracker) {
			wrongLetters.push(word.charAt(i));
			$("#incorrect-letters").append(String.fromCharCode(e.which) + " ");
			lives--;
			$("#lives-remaining").text(lives);
			if (lives == 0) {
				alert("You lose!");
			}
		}
	});

	//Function to append current guess to HTML
	function rebuildWord(char) {

		var underscore = ' _ ';
		var currentGuess = "";

		for (var i = 0; i < word.length; i++) {
			if (word.charAt(i) === char) {
				currentGuess += char;
				currentGuess += " ";
			} else if (correctLetters.includes(word.charAt(i))) {
				currentGuess += word.charAt(i);
				currentGuess += " ";
			}
			else {
				currentGuess += underscore;
			}
		}
		blankWordString = currentGuess;
	}

});