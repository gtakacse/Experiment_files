/* Different video types for Experiment2 - Hungarian */

/* Path of different stimuli types */
var ins = ["in.box.caterpillar.mp4", "in.cave.monkey.mp4", "in.garden.rabbit.mp4", "in.garden.penguin.mp4"];

var intos = ["into.box.caterpillar.mp4", "into.cave.monkey.mp4", "into.garden.rabbit.mp4", "into.garden.penguin.mp4"];

var ons = ["on.plate.rabbit.mp4", "on.box.monkey.mp4", "on.book.penguin.mp4", "on.basket.caterpillar.mp4"];

var ontos = ["onto.plate.rabbit.mp4", "onto.box.monkey.mp4", "onto.book.penguin.mp4", "onto.basket.caterpillar.mp4"];

var fillerP = ["filler.rabbit.push.mp4", "filler.penguin.push.mp4",  
				"filler.monkey.pull.mp4", "filler.caterpillar.pull.mp4"];

var fillerUnder = ["filler.under.g.caterpillar.mp4", "filler.under.p.caterpillar.mp4", 
				"filler.under.g.monkey.bed.mp4", "filler.under.p.monkey.bed.mp4"];
				
var in_sent = ["A hernyó a dobozban mászott.",
				"A majom a barlangban sétált.",
				"A nyuszi a kertben ugrált.",
				"A pingvin a kertben totyogott."];
				
var into_sent = ["A hernyó a dobozba mászott.", 
				"A majom a barlangba sétált.", 
				"A nyuszi a kertbe ugrált.", 
				"A pingvin a kertbe ugrált."];
				
var on_sent = ["A nyuszi a tányéron ugrált.", 
				"A majom a dobozon sétált.", 
				"A pingvin a könyvön totyogott.",  
				"A hernyó a kosáron mászott."];

var onto_sent = ["A nyuszi a tányérra ugrált.", 
				"A majom a dobozra sétált.", 
				"A pingvin a könyvre totyogott.",
				"A hernyó a kosárra mászott."];

// Structure: [condition1 match, condition1 mismatch, condition2 match, etc.]
var fillerUnder_sent = ["A hernyó a kék asztal alá mászott.",
						"A hernyó a kék asztal alatt mászott.",
						"A majom az ágy alá sétált.",
						"A majom az ágy alatt sétált."];

var fillerP_sent = ["A nyuszi tolta a poharat.", "A pingvin tolta a poharat.",
					"A pingvin tolta a poharat.", "A nyuszi tolta a poharat.",
					"A majom húzta a kocsit.", "A hernyó húzta a kocsit.",
					"A hernyó húzta a kocsit.", "A majom húzta a kocsit."];
					
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


for (var i = 0; i < fillerUnder.length; i++){
	if (i% 2 == 0){
		stim = {
			video: fillerUnder[i],
			sentence: fillerUnder_sent[i],
			condition: "match"
		}
		trials.push(stim);
		stim = {
			video: fillerUnder[i],
			sentence: fillerUnder_sent[i+1],
			condition: "mismatch"
		}
		trials.push(stim);
	}
	else {
		stim = {
			video: fillerUnder[i],
			sentence: fillerUnder_sent[i],
			condition: "match"
		};
		trials.push(stim);
		
		stim = {
			video: fillerUnder[i],
			sentence: fillerUnder_sent[i-1],
			condition: "mismatch"
		};
		trials.push(stim);
	}
	
};

var shuffled_trials = jsPsych.randomization.shuffle(trials);
var len = shuffled_trials.length;
var train_len = 0;
