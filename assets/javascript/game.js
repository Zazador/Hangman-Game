$(document).ready(function(){

	//variables
	var wordbank = ["johanna", "muradin", "illidan", "valla", "falstad", "leoric",
	"diablo", "chen", "zagara", "arthas"];
	var blankWord = [];
	var word = wordbank[Math.floor(Math.random()*wordbank.length)];
	var currentGuess = "";
	var lives = 10;

	//For testing purposes
	$("#title").append(word);

	//Initial amount of lives
	$("#lives-remaining").text(lives);

	//build array of underscores, and append to HTML
	for (var i = 0; i < word.length; i++) {
		blankWord.push('_');
		$("#word-body").append("_ ");
	}

	//build arrays for correct and incorrect letters
	var correctLetters = [];
	var wrongLetters = [];

	//build string of underscores
	var blankWordString = blankWord.join(" ");
	//console.log(blankWordString);

	//display hint image
	$("#hintImage").attr('src', "assets/images/" + word + ".jpg");
	$("#hintImage").attr('alt', word + " image");

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

		if (!tracker) {
			wrongLetters.push(word.charAt(i));
			$("#incorrect-letters").append(String.fromCharCode(e.which) + " ");
			lives--;
			$("#lives-remaining").text(lives);
			if (lives == 0) {
				alert("Game Over!");
			}
		}
	});

	function rebuildWord(char) {

		var underscore = ' _ ';
		var currentGuess = "";

		for (var i = 0; i < word.length; i++) {
			console.log("Current char is: " + word.charAt(i));
			if (word.charAt(i) === char) {
				console.log("Current char is equal to test.");
				currentGuess += char;
				currentGuess += " ";
			} else if (correctLetters.includes(word.charAt(i))) {
				console.log("Current char is equal to a previously correct letter");
				currentGuess += word.charAt(i);
				currentGuess += " ";
			}
			else {
				console.log("Current char is an underscore");
				currentGuess += underscore;
			}
		}
		blankWordString = currentGuess;
		console.log("bws: " + blankWordString);
		console.log("cg: " + currentGuess);
	}

});