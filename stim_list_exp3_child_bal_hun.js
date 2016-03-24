/* Different video types and audio files for Experiment3 Hungarian - Child version */

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
			
var fillerTrans1 = ["filler.rabbit.push.mp4", 
					"filler.monkey.pull.mp4"];
			
var fillerTrans2 = ["filler.penguin.push.mp4", 
					"filler.caterpillar.pull.mp4"];
			
var training_vid = ["filler.monkey.kick.mp4", 
					"filler.penguin.hit.mp4",
					"filler.frog.backflip.mp4",
					"filler.rabbit.cover.mp4"];

var in_audio = ["hernyo_dobozban.wav",
				"majom_barlagban.wav",
				"nyuszi_kertben.wav",
				"pingvin_kertben.wav"];

var into_audio = ["hernyo_dobozba.wav",
				"majom_barlangba.wav",
				"nyuszi_kertbe.wav",
				"pingvin_kertve.wav"];

var on_audio = ["nyuszi_tanyeron.wav",
				"majom_dobozon.wav",
				"pingvin_konyvon.wav",
				"hernyo_kosaron.wav"];
			
var onto_audio = ["nyuszi_tanyerra.wav",
				"majom_dobozra.wav",
				"pingvin_konyvre.wav",
				"hernyo_kosarra.wav"];

var fillerTrans_audio1 = ["nyuszi_tol_poharat.wav",
						"majom_huz_kocsit.wav"];
						
var fillerTrans_audio2 = ["pingvin_tol_poharat.wav",
						"hernyo_huz_kocsit.wav"];
						
var training_audio_true = ["majom_rug_labdat.wav",
							"labda_eltalal_pingvint.wav",
							"beka_udito_folott.wav",
							"pohar_betakar_nyuszit.wav"];

var training_audio_false = ["nyuszi_rug_labdat.wav",
							"labda_eltalal_majmot.wav",
							"beka_udito_mellett.wav",
							"pohar_betakar_pingvint.wav"];

var fillerUnder_g = ["filler.under.g.caterpillar.mp4",  
					"filler.under.g.monkey.bed.mp4"];

var fillerUnder_p = ["filler.under.p.caterpillar.mp4",
					"filler.under.p.monkey.bed.mp4"];

var filler_u_g_s = ["hernyo_asztal_ala.wav",
					"majom_agy_ala.wav"];
			
var filler_u_p_s = ["hernyo_asztal_alatt.wav",
					"majom_agy_alatt.wav"];

/* Determine the length of the training and the trial list */
var training_length = training_vid.length;
var trial_length = ins.length + intos.length + ons.length + ontos.length + fillerTrans1.length + 
fillerTrans2.length + fillerUnder_g.length + fillerUnder_p.length;

/* Create a condition list (a list of 1s and 2s, the length of the list equals to the number of trials,
the ratio of the conditions is 50/50) */
var condList = function(stim_length){
	var conditions = [];

	for (var i = 0; i < stim_length; i++){
		if (i < stim_length/2){
			conditions.push(1);
		}
		else{
			conditions.push(2);
		}
	}
	var shuffled_conditions = jsPsych.randomization.shuffle(conditions);
	return shuffled_conditions;
};

var training_conditions = condList(training_length);
var trial_conditions = condList(trial_length);

var stimCreator = function(video_list, cond_list, match_list, mismatch_list){
	var stims = [];
	for (var i = 0; i < video_list.length; i++){
		if (cond_list[i] == 1){
			var stim = {
				video: video_list[i],
				sentence1: match_list[i],
				sentence2: mismatch_list[i],
				correct: 1
			};
			stims.push(stim);
		}
		
		else {
			var stim = {
				video: video_list[i],
				sentence1: mismatch_list[i],
				sentence2: match_list[i],
				correct: 2
			};
			stims.push(stim);
		}
		
	}
	return stims;
};

/* Create complete video list */
var videos = [];
videos = videos.concat(ins);
videos = videos.concat(intos);
videos = videos.concat(ons);
videos = videos.concat(ontos);
videos = videos.concat(fillerTrans1);
videos = videos.concat(fillerTrans2);
videos = videos.concat(fillerUnder_g);
videos = videos.concat(fillerUnder_p);

/* Create complete match sentence list */
var match_sent = [];
match_sent = match_sent.concat(in_audio);
match_sent = match_sent.concat(into_audio);
match_sent = match_sent.concat(on_audio);
match_sent = match_sent.concat(onto_audio);
match_sent = match_sent.concat(fillerTrans_audio1);
match_sent = match_sent.concat(fillerTrans_audio2);
match_sent = match_sent.concat(filler_u_g_s);
match_sent = match_sent.concat(filler_u_p_s);

var mismatch_sent = [];
mismatch_sent = mismatch_sent.concat(into_audio);
mismatch_sent = mismatch_sent.concat(in_audio);
mismatch_sent = mismatch_sent.concat(onto_audio);
mismatch_sent = mismatch_sent.concat(on_audio);
mismatch_sent = mismatch_sent.concat(fillerTrans_audio2);
mismatch_sent = mismatch_sent.concat(fillerTrans_audio1);
mismatch_sent = mismatch_sent.concat(filler_u_p_s);
mismatch_sent = mismatch_sent.concat(filler_u_g_s);

var trials = stimCreator(videos, trial_conditions, match_sent, mismatch_sent);
var shuffled_trials = jsPsych.randomization.shuffle(trials);
var len = shuffled_trials.length;

var training_set = stimCreator(training_vid, training_conditions, training_audio_true, training_audio_false);
var train_len = training_set.length;