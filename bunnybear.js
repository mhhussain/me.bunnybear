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
    heartchannel: 'heart'
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

const speak = (where, what) => {
    body.postMessageToChannel(where, what)
};

// ****************************************************************************************
// and here. we. go.
// ****************************************************************************************
body.on('start', () => {
    // what's happening...
    // these are comments...?
    // more needs to happen.
    // lets see what i have access to
    heart.createEvent(50, { name: 'heartbeat' }, () => {
        speak(random.heartchannel, 'this is my heart beat.')
    });
});