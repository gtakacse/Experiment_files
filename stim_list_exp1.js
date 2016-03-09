/* Different video types for Experiment1 */

/* Path of different stimuli types */
var ins = ["in.box.caterpillar.mp4", "in.cave.monkey.mp4", "in.garden.rabbit.mp4", "in.garden.penguin.mp4"];

var intos = ["into.box.caterpillar.mp4", "into.cave.monkey.mp4", "into.garden.rabbit.mp4", "into.garden.penguin.mp4"];

var ons = ["on.plate.rabbit.mp4", "on.box.monkey.mp4", "on.book.penguin.mp4", "on.basket.caterpillar.mp4"];

var ontos = ["onto.plate.rabbit.mp4", "onto.box.monkey.mp4", "onto.book.penguin.mp4", "onto.basket.caterpillar.mp4"];

var fillerP = ["filler.rabbit.push.mp4", "filler.penguin.push.mp4",  
				"filler.monkey.pull.mp4", "filler.caterpillar.pull.mp4"];

var fillerUnder = ["filler.under.g.caterpillar.mp4", "filler.under.p.caterpillar.mp4", 
				"filler.under.g.monkey.bed.mp4", "filler.under.p.monkey.bed.mp4"]

var stim_paths = $.merge($.merge($.merge($.merge($.merge($.merge([],ins),intos),ons),ontos),fillerP),fillerUnder);

var shuffled_trials = jsPsych.randomization.repeat(stim_paths, 1);
var len = shuffled_trials.length;
/*
for (var i =0; i < shuffled_paths.length; i++){
	/* Video http skeleton 
	shuffled_paths[i] = '<video width="800" height="400" autoplay preload="auto"> <source src="stim/' 
	+ shuffled_paths[i] + '" type="video/mp4"></video>';
	
};
*/
