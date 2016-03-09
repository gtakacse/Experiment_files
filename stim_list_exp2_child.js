/* Different video types and audio files for Experiment2 - Child version */

/* Path of different stimuli types */
var ins = ["in.box.caterpillar.mp4", "in.cave.monkey.mp4", "in.garden.rabbit.mp4", "in.garden.penguin.mp4"];

var intos = ["into.box.caterpillar.mp4", "into.cave.monkey.mp4", "into.garden.rabbit.mp4", "into.garden.penguin.mp4"];

var ons = ["on.plate.rabbit.mp4", "on.box.monkey.mp4", "on.book.penguin.mp4", "on.basket.caterpillar.mp4"];

var ontos = ["onto.plate.rabbit.mp4", "onto.box.monkey.mp4", "onto.book.penguin.mp4", "onto.basket.caterpillar.mp4"];

var fillerTrans = ["filler.rabbit.push.mp4", "filler.penguin.push.mp4",  
				"filler.monkey.pull.mp4", "filler.caterpillar.pull.mp4"];

var fillerUnder = ["filler.under.g.caterpillar.mp4", "filler.under.p.caterpillar.mp4", 
				"filler.under.g.monkey.bed.mp4", "filler.under.p.monkey.bed.mp4"];

var training_vid = ["filler.monkey.kick.mp4", 
					"filler.penguin.hit.mp4",
					"filler.frog.backflip.mp4",
					"filler.rabbit.cover.mp4"];
					
var in_audio = ["caterpillar.crawl.in.box.wav",
				"monkey.walk.in.cave.wav",
				"bunny.hop.in.garden.wav",
				"penguin.waddle.in.garden.wav"];

var into_audio = ["caterpillar.crawl.into.box.wav",
				"monkey.walk.into.cave.wav",
				"bunny.hop.into.garden.wav",
				"penguin.waddle.into.garden.wav"];

var on_audio = ["bunny.hop.on.plate.wav",
				"monkey.walk.on.box.wav",
				"penguin.waddle.on.book.wav",
				"caterpillar.crawl.on.basket.wav"];
				
var onto_audio = ["bunny.hop.onto.plate.wav",
				"monkey.walk.onto.box.wav",
				"penguin.waddle.onto.book.wav",
				"caterpillar.crawl.onto.basket.wav"];

var fillerUnder_audio = ["caterpillar.crawl.under.table.wav",
						"monkey.walk.under.bed.wav"];

var fillerTrans_audio = ["bunny.push.cup.wav",
						"penguin.push.cup.wav",
						"monkey.pull.car.wav",
						"caterpillar.pull.car.wav"];
						
var training_audio_true = ["monkey.kick.ball.wav",
							"ball.hit.penguin.wav",
							"frog.jump.nextto.can.wav",
							"cup.cover.bunny.wav"];

var training_audio_false = ["bunny.kick.ball.wav",
							"ball.hit.monkey.wav",
							"frog.jump.over.can.wav",
							"cup.cover.penguin.wav"];

var training_set = [];

for (var i = 0; i < training_vid.length; i++){
	if (i % 2 == 0){
		if (Math.random()> 0.5){
			var match = true;
			var stim = {
				video: training_vid[i],
				sentence: training_audio_true[i],
				condtion: "train_match"
			};
			training_set.push(stim);
		}
		else {
			var match = false;
			var stim = {
				video: training_vid[i],
				sentence: training_audio_false[i],
				condition: "train_mismatch"
			};
			training_set.push(stim);
		}
	}
	else {
		if (match == true){
			stim = {
				video: training_vid[i],
				sentence: training_audio_false[i],
				condtion: "train_mismatch"
			};
			training_set.push(stim);
		}
		else {
			stim = {
				video: training_vid[i],
				sentence: training_audio_true[i],
				condition: "train_match"
			};
			training_set.push(stim);
		}
	}
	
};

var trials = [];

for (var i = 0; i < ins.length; i++){
	for (var j = 0; j < 4; j++){
		/* video in - sentence in */
		if (j==0){
			var stim = {
				video: ins[i],
				sentence: in_audio[i],
				condition: "match"
			};
			
			
		}
		/* video into - sentence into */
		else if (j==3){
			stim = {
				video: intos[i],
				sentence: into_audio[i],
				condition: "match"
			};
		}
		/* video into - sentence in */
		else if (j==1){
			stim = {
				video: intos[i],
				sentence: in_audio[i],
				condition: "mismatch"
			};
		}
		/* video in - sentence into */
		else if (j==2){
			stim = {
				video: ins[i],
				sentence: into_audio[i],
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
				sentence: on_audio[i],
				condition: "match"
			};
		}
		/* video onto - sentence onto */
		else if (j==3){
			stim = {
				video: ontos[i],
				sentence: onto_audio[i],
				condition: "match"
			};
		}
		/* video onto - sentence on */
		else if (j==1){
			stim = {
				video: ontos[i],
				sentence: on_audio[i],
				condition: "mismatch"
			};
		}
		/* video on - sentence onto */
		else if (j==2){
			stim = {
				video: ons[i],
				sentence: onto_audio[i],
				condition: "mismatch"
			};
		}
		trials.push(stim);
	};
	
};


for (var i = 0; i < fillerUnder_audio.length; i++){
	stim = {
		video: fillerUnder[i*2],
		sentence: fillerUnder_audio[i],
		condition: "goal"
	}
	trials.push(stim);
	
	stim = {
		video: fillerUnder[i*2+1],
		sentence: fillerUnder_audio[i],
		condition: "place"
	}	
	
	trials.push(stim);
	
};

for (var i = 0; i < fillerTrans; i++){
	if (i % 2 == 0){
		stim = {
			video: fillerTrans[i],
			sentence: fillerTrans_audio[i],
			condition: "match"
		};
		trials.push(stim);
		stim = {
			video: fillerTrans[i],
			sentence: fillerTrans_audio[i+1],
			condition: "mismatch"
		};
		trials.push(stim);
	}
	else {
		stim = {
			video: fillerTrans[i],
			sentence: fillerTrans_audio[i],
			condition: "match"
		};
		trials.push(stim);
		stim = {
			video: fillerTrans[i],
			sentence: fillerTrans[i-1],
			condition: "mismatch"
		};
		trials.push(stim);
	};
	
};

var train_len = training_set.length;
var shuffled_trials = jsPsych.randomization.shuffle(trials);
var len = shuffled_trials.length;

