/* Different video types for Experiment 3 - Hungarian */

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

var filler1_sent = ["A nyuszi tolta a poharat.", 
					"A majom húzta a kocsit."];

var filler2_sent = ["A pingvin tolta a poharat.", 
					"A hernyó húzta a kocsit."];
					
var fillerUnder_g = ["filler.under.g.caterpillar.mp4",  
					"filler.under.g.monkey.bed.mp4"];

var fillerUnder_p = ["filler.under.p.caterpillar.mp4",
					"filler.under.p.monkey.bed.mp4"];

var filler_u_g_s = ["A hernyó a kék asztal alá mászott.",
					"A majom az ágy alá sétált."];
					
var filler_u_p_s = ["A hernyó a kék asztal alatt mászott.",
					"A majom az ágy alatt sétált."];

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
trials = trials.concat(stimCreator(fillerUnder_g, filler_u_g_s, filler_u_p_s));
trials = trials.concat(stimCreator(fillerUnder_p, filler_u_p_s, filler_u_g_s));

var shuffled_trials = jsPsych.randomization.shuffle(trials);
var len = shuffled_trials.length;
var train_len = 0;