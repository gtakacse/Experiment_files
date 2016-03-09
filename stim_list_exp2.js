/* Different video types for Experiment2 */

/* Path of different stimuli types */
var ins = ["in.box.caterpillar.mp4", "in.cave.monkey.mp4", "in.garden.rabbit.mp4", "in.garden.penguin.mp4"];

var intos = ["into.box.caterpillar.mp4", "into.cave.monkey.mp4", "into.garden.rabbit.mp4", "into.garden.penguin.mp4"];

var ons = ["on.plate.rabbit.mp4", "on.box.monkey.mp4", "on.book.penguin.mp4", "on.basket.caterpillar.mp4"];

var ontos = ["onto.plate.rabbit.mp4", "onto.box.monkey.mp4", "onto.book.penguin.mp4", "onto.basket.caterpillar.mp4"];

var fillerP = ["filler.rabbit.push.mp4", "filler.penguin.push.mp4",  
				"filler.monkey.pull.mp4", "filler.caterpillar.pull.mp4"];

var fillerUnder = ["filler.under.g.caterpillar.mp4", "filler.under.p.caterpillar.mp4", 
				"filler.under.g.monkey.bed.mp4", "filler.under.p.monkey.bed.mp4"];

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

// Structure: [condition1 match, condition1 mismatch, condition2 match, etc.]
var fillerUnder_sent = ["The caterpillar crawled under the blue table.",
				"The monkey walked under the bed."];

var fillerP_sent = ["The bunny pushed the cup.", "The penguin pushed the cup.",
					"The penguin pushed the cup.", "The bunny pushed the cup.",
					"The monkey pulled the car.", "The caterpillar pulled the car.",
					"The caterpillar pulled the car.", "The monkey pulled the car."];

var fullPath = function(path){
	fullP = '<video width="800" autoplay preload="auto"> <source src="stim/' 
	+ path + '" type="video/mp4"></video>';
	return fullP
};

var trials = [];
for (var i = 0; i < ins.length; i++){
	for (var j = 0; j < 4; j++){
		/* video in - sentence in */
		if (j==0){
			var stim = {
				video: ins[i],
				sentence: in_sent[i],
				condition: "match"
			};
		}
		/* video into - sentence into */
		else if (j==3){
			stim = {
				video: intos[i],
				sentence: into_sent[i],
				condition: "match"
			};
		}
		/* video into - sentence in */
		else if (j==1){
			stim = {
				video: intos[i],
				sentence: in_sent[i],
				condition: "mismatch"
			};
		}
		/* video in - sentence into */
		else if (j==2){
			stim = {
				video: ins[i],
				sentence: into_sent[i],
				condition: "mismatch"
			};
		}
		trials.push(stim);
		
	};
	
};

for (var i = 0; i < ons.length; i++){
	for (var j = 0; j < 4; j++){
		/* video on - sentence on */
		if (j==0){
			stim = {
				video: ons[i],
				sentence: on_sent[i],
				condition: "match"
			};
		}
		/* video onto - sentence onto */
		else if (j==3){
			stim = {
				video: ontos[i],
				sentence: onto_sent[i],
				condition: "match"
			};
		}
		/* video onto - sentence on */
		else if (j==1){
			stim = {
				video: ontos[i],
				sentence: on_sent[i],
				condition: "mismatch"
			};
		}
		/* video on - sentence onto */
		else if (j==2){
			stim = {
				video: ons[i],
				sentence: onto_sent[i],
				condition: "mismatch"
			};
		}
		trials.push(stim);
	};
	
};


for (var i = 0; i < fillerUnder_sent.length; i++){
	stim = {
		video: fillerUnder[i*2],
		sentence: fillerUnder_sent[i],
		condition: "goal"
	}
	trials.push(stim);
	
	stim = {
		video: fillerUnder[i*2+1],
		sentence: fillerUnder_sent[i],
		condition: "place"
	}	
	
	trials.push(stim);
	
};
/*
for (var i =0; i < fillerP.length; i++){
	stim = {
		video: fillerP[i],
		sentence: fillerP_sent[2*i],
		condtion: "match"
	};
	trials.push(stim);
	stim = {
		video: fillerP[i],
		sentence: fillerP_sent[2*i+1],
		condition: "mismatch"
	}
	trials.push(stim);
};
*/
var shuffled_trials = jsPsych.randomization.shuffle(trials);
var len = shuffled_trials.length;