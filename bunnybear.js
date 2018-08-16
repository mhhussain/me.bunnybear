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
    meuser: 'UC72G0ATD'
}

// housing
const body = new slackbots({
    token: random.slacktoken,
    name: 'bunnybear'
});

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
        if (noise.type !== 'message') {
            // do nothing.
            return;
        }
        if (noise.user !== random.meuser) {
            // speak to no one.
            return;
        }

        speak(new spokenword(random.me, 'hi.'));
    });
});