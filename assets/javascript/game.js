$(document).ready(function(){

	//variables
	var wordbank = ["johanna", "muradin", "illidan", "valla", "falstad", "leoric",
	"diablo", "chen", "zagara", "arthas"];
	var blankWord = [];
	var word = wordbank[Math.floor(Math.random()*wordbank.length)];
	var currentGuess = "";

	//For testing purposes
	$("#title").append(word);

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

	$(document).keypress(function(e) {

		for (var i = 0; i < word.length; i++) {
			if (e.which == word.charCodeAt(i)) {
				correctLetters.push(word.charAt(i));
				rebuildWord(word.charAt(i));
				$("#word-body").text(blankWordString);
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