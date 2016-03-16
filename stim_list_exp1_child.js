/* Different video types for Experiment1 (English and Hungarian)*/

/* Path of different stimuli types */
var ins = ["in.box.caterpillar.mp4", "in.cave.monkey.mp4", "in.garden.rabbit.mp4", "in.garden.penguin.mp4"];

var intos = ["into.box.caterpillar.mp4", "into.cave.monkey.mp4", "into.garden.rabbit.mp4", "into.garden.penguin.mp4"];

var ons = ["on.plate.rabbit.mp4", "on.box.monkey.mp4", "on.book.penguin.mp4", "on.basket.caterpillar.mp4"];

var ontos = ["onto.plate.rabbit.mp4", "onto.box.monkey.mp4", "onto.book.penguin.mp4", "onto.basket.caterpillar.mp4"];

var fillerP = ["filler.rabbit.push.mp4", "filler.penguin.push.mp4",  
				"filler.monkey.pull.mp4", "filler.caterpillar.pull.mp4"];

var fillerUnder = ["filler.under.g.caterpillar.mp4", "filler.under.p.caterpillar.mp4", 
				"filler.under.g.monkey.bed.mp4", "filler.under.p.monkey.bed.mp4"];
				
var training = ["filler.monkey.kick.mp4", 
				"filler.penguin.hit.mp4",
				"filler.frog.backflip.mp4",
				"filler.rabbit.cover.mp4"];

var stim_paths = [];
stim_paths = stim_paths.concat(ins);
stim_paths = stim_paths.concat(intos);
stim_paths = stim_paths.concat(ons);
stim_paths = stim_paths.concat(ontos);
stim_paths = stim_paths.concat(fillerP);
stim_paths = stim_paths.concat(fillerUnder);				
				
var trials = jsPsych.randomization.repeat(stim_paths, 1);
var shuffled_trials = [];
shuffled_trials = shuffled_trials.concat(training);
shuffled_trials = shuffled_trials.concat(trials);
var len = shuffled_trials.length;
var train_len = 0;
/*
for (var i =0; i < shuffled_paths.length; i++){
	/* Video http skeleton 
	shuffled_paths[i] = '<video width="800" height="400" autoplay preload="auto"> <source src="stim/' 
	+ shuffled_paths[i] + '" type="video/mp4"></video>';
	
};
*/
