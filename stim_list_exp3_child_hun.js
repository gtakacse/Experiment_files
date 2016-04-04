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

var stimCreator = function(video_list, match_sent, mismatch_sent){
	var stims = [];
	for (var i = 0; i < video_list.length; i++){
		var chance = Math.random();
		if (chance > 0.5){
			var stim = {
				video: video_list[i],
				sentence1: match_sent[i],
				sentence2: mismatch_sent[i],
				correct: 1
			};
		}
		else {
			var stim = {
				video: video_list[i],
				sentence1: mismatch_sent[i],
				sentence2: match_sent[i],
				correct: 2
			};
		}
		stims.push(stim);
	};
	return stims;	
};

var trials = [];
trials = trials.concat(stimCreator(ins, in_audio, into_audio));
trials = trials.concat(stimCreator(intos, into_audio, in_audio));
trials = trials.concat(stimCreator(ons, on_audio, onto_audio));
trials = trials.concat(stimCreator(ontos, onto_audio, on_audio));
trials = trials.concat(stimCreator(fillerTrans1, fillerTrans_audio1, fillerTrans_audio2));
trials = trials.concat(stimCreator(fillerTrans2, fillerTrans_audio2, fillerTrans_audio1));
trials = trials.concat(stimCreator(fillerUnder_g, filler_u_g_s, filler_u_p_s));
trials = trials.concat(stimCreator(fillerUnder_p, filler_u_p_s, filler_u_g_s));

var training_set = [];
training_set = training_set.concat(stimCreator(training_vid, training_audio_true, training_audio_false));
train_len = training_set.length;

var shuffled_trials = jsPsych.randomization.shuffle(trials);
var len = shuffled_trials.length;
