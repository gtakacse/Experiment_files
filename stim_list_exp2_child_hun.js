/* Different video types and audio files for Experiment2 Hungarian - Child version */

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
					
var in_audio = ["hernyo_dobozban.wav",
				"majom_barlangban.wav",
				"nyuszi_kertben.wav",
				"pingvin_kertben.wav"];

var into_audio = ["hernyo_dobozba.wav",
				"majom_barlangba.wav",
				"nyuszi_kertbe.wav",
				"pingvin_kertbe.wav"];

var on_audio = ["nyuszi_tanyeron.wav",
				"majom_dobozon.wav",
				"pingvin_konyvon.wav",
				"hernyo_kosaron.wav"];
				
var onto_audio = ["nyuszi_tanyerra.wav",
				"majom_dobozra.wav",
				"pingvin_konyvre.wav",
				"hernyo_kosarra.wav"];

var fillerUnder_audio = ["hernyo_asztal_ala.wav", "hernyo_asztal_alatt.wav",
						"majom_agy_ala.wav", "majom_agy_alatt.wav"];

var fillerTrans_audio = ["nyuszi_tol_poharat.wav",
						"pingvin_tol_poharat.wav",
						"majom_huz_kocsit.wav",
						"hernyo_huz_kocsit.wav"];
						
var training_audio_true = ["majom_rug_labdat.wav",
							"labda_eltalal_pingvint.wav",
							"beka_udito_folott.wav",
							"pohar_betakar_nyuszit.wav"];

var training_audio_false = ["nyuszi_rug_labdat.wav",
							"labda_eltalal_majmot.wav",
							"beka_udito_mellett.wav",
							"pohar_betakar_pingvint.wav"];

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


for (var i = 0; i < fillerUnder.length; i++){
	if (i% 2 == 0){
		stim = {
			video: fillerUnder[i],
			sentence: fillerUnder_audio[i],
			condition: "match"
		}
		trials.push(stim);
		stim = {
			video: fillerUnder[i],
			sentence: fillerUnder_audio[i+1],
			condition: "mismatch"
		}
		trials.push(stim);
	}
	else {
		stim = {
			video: fillerUnder[i],
			sentence: fillerUnder_audio[i],
			condition: "match"
		};
		trials.push(stim);
		
		stim = {
			video: fillerUnder[i],
			sentence: fillerUnder_audio[i-1],
			condition: "mismatch"
		};
		trials.push(stim);
	}
	
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

