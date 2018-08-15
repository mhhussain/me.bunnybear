const SlackBot = require('slackbots');
const axios = require('axios');
const heartbeats = require('heartbeats');

const bot = new SlackBot({
	token: 'xoxb-414980923588-416254894241-bgd20aDgjbDYyhCfsJ9F4Bry',
	name: 'bunnybear'
});


// Play god
var heart = new heartbeats.createHeart(1000, 'bunnybear')

// Start Handler

bot.on('start', () => {
	heart.createEvent(1, { name: 'bunnyspulse', countTo: 500 }, () => {
		bot.postMessageToChannel('bunnysheart', 'this is my heart beat');
	});
});

bot.on('message', data => {
	if (data.type !== 'message') {
		return;
	}


	//console.log(data.text);
	console.log(data);
	/*
	bot.getUsers().then(function(u) {
		console.log(u);
	});*/

	var whatiwanttosayback = '';// iloveyouresolver(data.text);

	if (data.user !== 'UC72G0ATD') {
		return;
	}
	else if (data.text === 'hi') {
		whatiwanttosayback = 'hey.';
		tellem(whatiwanttosayback);
	}
	else if (data.text === 'how are you?') {
		whatiwanttosayback = 'oh. you know. it\'s past midnight. fuck me, right?';
		tellem(whatiwanttosayback);
	}
	else if (data.text === 'bye') {
		whatiwanttosayback = 'see yaaaa';
		tellem(whatiwanttosayback);
	}
	else if (data.text === 'kill yourself') {
		var heartAge = heart.age;
		heart.createEvent(heartAge, { countTo: 1 }, () => {
			tellem('whoa that\'s a bit much')
		});

		heart.createEvent(heartAge + 3, { countTo: 1 }, () => {
			tellem('ow that actually kinda hurts')
			heart.event('bunnyspulse').kill()
		});

		heart.createEvent(heartAge + 4, { countTo: 1 }, () => {
			tellem('AHHHHHH (no it doesn\'t actually hurt)');
			bot.postMessageToChannel('bunnysheart', 'OMGHEARTATTACKKKKKK');
		});

		heart.createEvent(heartAge + 6, { countTo: 1 }, () => {
			tellem('my heartbeat disappeared. how did you do that? am i dead...');
		});

		heart.createEvent(heartAge + 8, { countTo: 1 }, () => {
			tellem('was i alive?');
		});
	}
	else {
		whatiwanttosayback = iloveyouresolver(data.text)
		tellem(whatiwanttosayback);
	}
});


function tellem(what) {
	bot.postMessageToUser('moohh91', what);
}


//  ************************************************************************************************************************
// the.no.no.peoples
//  ************************************************************************************************************************
function amiallowedtotalktothisperson(person) {
	bot.getUsers().then(function(u) {
		for(var i = 0; i < u.length; i++) {
			if (u[i].id === person) {
				return true;
			}
		}
	})
}

//  ************************************************************************************************************************
// the.i.love.you
//  ************************************************************************************************************************
function iloveyouresolver(whatwassaid) {
	switch(whatwassaid) {
		case thegood['if'][0]:
			return thegood['then'][dice(thegood['then'].length)];
		case themiddle['if'][0]:
			return themiddle['then'][dice(themiddle['then'].length)];
		case thebad['if'][0]:
			return thebad['then'][dice(thebad['then'].length)];
		case theannoy['if'][0]:
			return theannoy['then'][dice(theannoy['then'].length)];
		default:
			return 'no dice, try again.'
	};


	return
}

function dice(within) {
	return Math.floor(Math.random() * Math.floor(within));
}

var thegood = {
	'if': ['i love you'],
	'then': ['...fuck you.', 'you\'re being extra', 'aww same i guess.']
}

var themiddle = {
	'if': ['thank you'],
	'then': ['like literally, what would you do without me?', 'lol ya yaa', 'your welcommmmeeee']
}

var thebad = {
	'if': ['im sad'],
	'then': ['ya i know. it sucks. /:', 'sounds like a job for drugs and alcoholll. but no seriously, i probably need help. blaahhh']
}

var theannoy = {
	'if': ['experiment'],
	'then': ['/remind @bunnybear to Come back to life in fifteen seconds']
}