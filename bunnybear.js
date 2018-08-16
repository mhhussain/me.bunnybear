// ****************************************************************************************
// the part we cant understand. big bang?
// ****************************************************************************************
const slackbots = require('slackbots');
const heartbeats = require('heartbeats');
const axios = require('axios');

// ****************************************************************************************
// playing god
// ****************************************************************************************
// things science doesnt know yet
var random = {
    slacktoken: 'xoxb-414980923588-416254894241-bgd20aDgjbDYyhCfsJ9F4Bry',
    heartchannel: 'heart',
    me: 'moohh91',
    meuser: 'UC72G0ATD',
    mentalblocks: {
        reasonblock: 'message',
        userblock: true,
        decisionblock: 'speak'
    }
};

// housing
const body = new slackbots({
    token: random.slacktoken,
    name: 'bunnybear'
});

// brain
var brain = {
    control: random.mentalblocks,
    understand: (whathappened) => {
        // you can only understand one thing
        if (whathappened.type != brain.control.reasonblock) {
            return;
        }

        var whatiunderstood = {
            thetype: 'heard',
            thewho: whathappened.user,
            thewhat: whathappened.text
        };

        brain.decide(whatiunderstood);
    },
    decide: (whatiunderstood) => {
        // you can only make one decision
        var whatineedtoknow = whatiunderstood;
        var decision = {};
        
        decision.thewhat = 'speak';
        decision.theactualwhatlol = new spokenword(random.me, 'i am here');
        
        if (brain.control.decisionblock == decision.thewhat) {
            brain.act(decision);
        }
    },
    act: (whatineedtodo) => {
        // you can only do one thing
        speak(whatineedtodo.theactualwhatlol);
    }
};

// heart
var heart = new heartbeats.createHeart(100, 'bunnybear');

// action
const getchannels = () => {
    body.getChannels().then((gift) => {
        console.log(gift)
    });
};

const speak = (words) => {
    // body.postMessageToChannel(words.where, words.what)
    body.postMessageToUser(words.where, words.what);
};


// ****************************************************************************************
// parts
// ****************************************************************************************
class spokenword {
    constructor(where, what) {
        this.where = where;
        this.what = what;
    }
}

// ****************************************************************************************
// and here. we. go.
// ****************************************************************************************
body.on('start', () => {
    // what's happening...
    // these are comments...?
    // more needs to happen.
    // lets see what i have access to
    /*heart.createEvent(50, { name: 'heartbeat' }, () => {
        speak(new spokenword(random.heartchannel, 'this is my heart beat.'));
    });*/
    body.on('message', (noise) => {
        // you can only understand me
        if (noise.user != random.meuser) {
            return;
        }
        brain.understand(noise);

    });
});