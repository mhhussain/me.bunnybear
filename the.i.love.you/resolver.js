export function iloveyouresolver(whatwassaid) {
	if(whatwassaid == thegood['if'][0]) {
		return thegood['then'][dice(thegood['then'].length)];
	}

	if(whatwassaid == themiddle['if'][0]) {
		return themiddle['then'][dice(themiddle['then'].length)];
	}

	if(whatwassaid == thebad['if'][0]) {
		return thebad['then'][dice(themiddle['then'].length)];
	}
}

function dice(within) {
	return Math.floor(Math.random() * Math.floor(max));
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