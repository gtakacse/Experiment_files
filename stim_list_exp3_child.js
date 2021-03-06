/* Different video types and audio files for Experiment3 - Child version */
/* Truely random order -- number of condition is NOT balanced */

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
				
var fillerTrans_audio1 = ["bunny.push.cup.wav",
						"monkey.pull.car.wav"];
						
var fillerTrans_audio2 = ["penguin.push.cup.wav",
						"caterpillar.pull.car.wav"];
						
var training_audio_true = ["monkey.kick.ball.wav",
							"ball.hit.penguin.wav",
							"frog.jump.nextto.can.wav",
							"cup.cover.bunny.wav"];

var training_audio_false = ["bunny.kick.ball.wav",
							"ball.hit.monkey.wav",
							"frog.jump.over.can.wav",
							"cup.cover.penguin.wav"];

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

var training_set = [];
training_set = training_set.concat(stimCreator(training_vid, training_audio_true, training_audio_false));
train_len = training_set.length;

var shuffled_trials = jsPsych.randomization.shuffle(trials);
var len = shuffled_trials.length;