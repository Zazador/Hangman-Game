$(document).ready(function(){

	var wordbank = ["bulbasaur","ivysaur","venusaur","charmander","charmeleon","charizard",
	"squirtle","wartortle","blastoise"]

	var word = wordbank[Math.floor(Math.random()*9)];

	$(document).keypress(function(e) {
		console.log(word);
		for (var i = 0; i < word.length; i++) {
			if (e.which == word.charCodeAt(i)) {
				alert("oh shit");
			}
		}
	});

});