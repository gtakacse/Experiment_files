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
var trial_length = ins.length + intos.length + ons.length + ontos.length + fillerTrans1.length + fillerTrans2.length +
fillerUnder_g.length + fillerUnder_p.length;

/* Create a condition list (a list of 1s and 2s, the length of the list equals to the number of trials,
the ratio of the conditions is 50/50) */
var condList = function(stim_length){
	var conditions = [];

	for (var i = 0; i < stim_length/2; i++){
		chance = Math.random();
		if (chance < 0.5){
			conditions.push(1);
			conditions.push(2);
		}
		else{
			conditions.push(2);
			conditions.push(1);
		}
	}

	return conditions;
};

var training_conditions = condList(training_length);
var trial_conditions = condList(trial_length);

/* Stimulus prototype - a dictionary that links the video to matching and mismatching sentences */
var stimObjC = function(video_list, match_list, mismatch_list){
	var stims = [];
	for (var i = 0; i < video_list.length; i++){
		var stim = {
			video: video_list[i],
			match: match_list[i],
			mismatch: mismatch_list[i]
		};
		stims.push(stim);
	}
	return stims;
};

/* Helper function that joins the targets and the fillers in an evenly distributed fashion */
var joinTargFill = function(target_list, filler_list){
	var all_trials = [];
	var fill_len = filler_list.length;

	for (var i = 0; i < target_list.length; i++){
		if (i % fill_len == 0 & i != 0){
			all_trials.push(filler_list[parseInt(i/fill_len)-1]);
			all_trials.push(target_list[i]);
		}
		else{
			all_trials.push(target_list[i]);
		}
	}

	if (target_list.length%fill_len == 0){
		all_trials.push(filler_list[fill_len-1]);
	}

	return all_trials;
};

/* Helper function which adds a condition to the prototype stimuli.
It returns an object which can be used in experiment html files. */
var addConditions = function(trialObj_list, cond_list){
	expStims = [];
	for (var i = 0; i < cond_list.length; i++){
		var temp = trialObj_list[i];
		if (cond_list[i] == 1){
			var expS = {
				video: temp.video,
				sentence1: temp.match,
				sentence2: temp.mismatch,
				correct: 1 
			};
			expStims.push(expS);
		}
		else {
			var expS = {
				video: temp.video,
				sentence1: temp.mismatch,
				sentence2: temp.match,
				correct: 2
			};
			expStims.push(expS);
		}

	}
	return expStims;
};


/* Create complete video list */
var videos = [];
videos = videos.concat(ins);
videos = videos.concat(intos);
videos = videos.concat(ons);
videos = videos.concat(ontos);
videos = videos.concat(fillerUnder_g);
videos = videos.concat(fillerUnder_p);

var filler_v = [];
filler_v = filler_v.concat(fillerTrans1);
filler_v = filler_v.concat(fillerTrans2);

/* Create complete match sentence list */
var match_sent = [];
match_sent = match_sent.concat(in_audio);
match_sent = match_sent.concat(into_audio);
match_sent = match_sent.concat(on_audio);
match_sent = match_sent.concat(onto_audio);
match_sent = match_sent.concat(filler_u_g_s);
match_sent = match_sent.concat(filler_u_p_s);

var filler_match = [];
filler_match = filler_match.concat(fillerTrans_audio1);
filler_match = filler_match.concat(fillerTrans_audio2);

var mismatch_sent = [];
mismatch_sent = mismatch_sent.concat(into_audio);
mismatch_sent = mismatch_sent.concat(in_audio);
mismatch_sent = mismatch_sent.concat(onto_audio);
mismatch_sent = mismatch_sent.concat(on_audio);
mismatch_sent = mismatch_sent.concat(filler_u_p_s);
mismatch_sent = mismatch_sent.concat(filler_u_g_s);

var filler_mismatch = [];
filler_mismatch = filler_mismatch.concat(fillerTrans_audio2);
filler_mismatch = filler_mismatch.concat(fillerTrans_audio1);

var targ_trials = stimObjC(videos, match_sent, mismatch_sent);
var shuffled_targets = jsPsych.randomization.shuffle(targ_trials);

var filler_trials = stimObjC(filler_v, filler_match, filler_mismatch);
var shuffled_fillers = jsPsych.randomization.shuffle(filler_trials);

/* Join targets and fillers in way that fillers are evenly distributed among targets */
var joined_trials = joinTargFill(shuffled_targets, shuffled_fillers);
/* Add conditions, and return stimuli which is ready for the experiment */
var shuffled_trials = addConditions(joined_trials, trial_conditions);
var len = shuffled_trials.length;

var train_objects = stimObjC(training_vid, training_audio_true, training_audio_false);
var training_set = addConditions(train_objects, training_conditions);
var train_len = training_set.length;
