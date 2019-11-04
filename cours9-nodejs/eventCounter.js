// Solution à l'activité en classe -- Événements

var EventEmitter = require('events').EventEmitter;
if (! EventEmitter) process.exit(1);
var fs = require("fs");

function registerEvents(emitter, keywords) {
	var counts = [];
	var incrementCounter = function(index) {
		return function() {
			counts[index]++;
		}
	}
	for (var i=0; i<keywords.length; ++i) {
		var keyword = keywords[i];
		counts[i] = 0;
		emitter.on(keyword, incrementCounter(i) );
	}
	return function() {
		console.log("Counters: ");
		for (var i=0; i<counts.length; i++) {
			var keyword = keywords[i];
			console.log("\tCount[ " + keyword + " ]\t=\t" + counts[i]);
		}
	}
};

// Lit le contenu du fichier et définit les gestionnaires pour analyser les mots
var text = fs.readFileSync("sample.txt").toString();
var keywords = ["a", "the", "this", "is", "an", "test"];

var e = new EventEmitter();
var printCounts = registerEvents(e, keywords);

// Lit le contenu du fichier et émet chaque mot dans le flux
printCounts();
// e.emit("the");
// e.emit("a");
// e.emit("the");
var words = text.split(" ");
words.forEach( function(word){
		e.emit(word.trim());
	});
printCounts();
