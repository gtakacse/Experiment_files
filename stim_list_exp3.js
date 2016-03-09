/* Different video types for Experiment2 */

/* Path of different stimuli types */

var ins = ["in.box.caterpillar.mp4", 
			"in.cave.monkey.mp4", 
			"in.garden.rabbit.mp4", 
			"in.garden.penguin.mp4"];

var intos = ["into.box.caterpillar.mp4", 
			"into.cave.monkey.mp4", 
			"into.garden.rabbit.mp4", 
			"into.garden.penguin.mp4"];

var ons = ["on.plate.rabbit.mp4", 
			"on.box.monkey.mp4", 
			"on.book.penguin.mp4", 
			"on.basket.caterpillar.mp4"];

var ontos = ["onto.plate.rabbit.mp4", 
			"onto.box.monkey.mp4", 
			"onto.book.penguin.mp4", 
			"onto.basket.caterpillar.mp4"];

var filler1 = ["filler.rabbit.push.mp4", 
			"filler.monkey.pull.mp4"];

var filler2 = ["filler.penguin.push.mp4", 
			"filler.caterpillar.pull.mp4"];

var in_sent = ["The caterpillar crawled in the box.", 
			"The monkey walked in the cave.", 
			"The bunny hopped in the garden.", 
			"The penguin waddled in the garden."];

var into_sent = ["The caterpillar crawled into the box.", 
			"The monkey walked into the cave.", 
			"The bunny hopped into the garden.", 
			"The penguin waddled into the garden."];

var on_sent = ["The bunny hopped on the plate.", 
			"The monkey walked on the box.", 
			"The penguin waddled on the book.", 
			"The caterpillar crawled on the basket."];

var onto_sent = ["The bunny hopped onto the plate.", 
			"The monkey walked onto the box.", 
			"The penguin waddled onto the book.", 
			"The caterpillar crawled onto the basket."];

var filler1_sent = ["The bunny pushed the cup.", 
					"The monkey pulled the car."];

var filler2_sent = ["The penguin pushed the cup.", 
					"The caterpillar pulled the car."];

var fullPath = function(path){
	fullP = '<video width="800" autoplay preload="auto"> <source src="stim/' 
	+ path + '" type="video/mp4"></video>';
	return fullP
};

var stimCreator = function(video_list, match_sent, mismatch_sent){
	var stims = [];
	for (var i = 0; i < video_list.length; i++){
		var chance = Math.random();
		if (chance > 0.5){
			var stim = {
				video: video_list[i],
				sentence1: "1. " + match_sent[i],
				sentence2: "2. " + mismatch_sent[i],
				correct: 1
			};
		}
		else {
			var stim = {
				video: video_list[i],
				sentence1: "1. " + mismatch_sent[i],
				sentence2: "2. " + match_sent[i],
				correct: 2
			};
		}
		stims.push(stim);
	};
	return stims;	
};

var trials = [];
trials = trials.concat(stimCreator(ins, in_sent, into_sent));
trials = trials.concat(stimCreator(intos, into_sent, in_sent));
trials = trials.concat(stimCreator(ons, on_sent, onto_sent));
trials = trials.concat(stimCreator(ontos, onto_sent, on_sent));
trials = trials.concat(stimCreator(filler1, filler1_sent, filler2_sent));
trials = trials.concat(stimCreator(filler2, filler2_sent, filler1_sent));

var shuffled_trials = jsPsych.randomization.shuffle(trials);
var len = shuffled_trials.length;