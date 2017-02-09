$(document).ready(function(){

	//variables
	var wordbank = ["bulbasaur","ivysaur","venusaur","charmander","charmeleon","charizard",
	"squirtle","wartortle","blastoise"];
	var blankWord = [];
	var word = wordbank[Math.floor(Math.random()*9)];
	var currentGuess = "";

	//For testing purposes
	$("#titlePokemon").append(word);

	//build array of underscores, and append to HTML
	for (var i = 0; i < word.length; i++) {
		blankWord.push('_');
		$("#word-body").append("_ ");
	}

	//build string of underscores
	var blankWordString = blankWord.join(" ");
	console.log(blankWordString);

	$(document).keypress(function(e) {

		for (var i = 0; i < word.length; i++) {
			if (e.which == word.charCodeAt(i)) {
				console.log(word.charAt(i));
				rebuildWord(word.charAt(i));
				$("#word-body").replaceWith(blankWordString);
			}
		}
	});

	function rebuildWord(char) {

		var underscore = '_';

		for (var i = 0; i < word.length; i++) {
			if (word.charAt(i) === char) {
				currentGuess += char;
			} else {
				currentGuess += underscore;
			}
		}
		blankWordString = currentGuess;
		console.log("bws: " + blankWordString);
		console.log("cg: " + currentGuess);
	}

});