// ****************************************************************************************
// the part we cant understand. big bang?
// ****************************************************************************************
// this part is going to confuse you, but i need to give you some. life support.?
const slackbots = require('slackbots');
//const slackbots = require('./lifesupport');
const heartbeats = require('heartbeats');
const axios = require('axios');
const _ = require('underscore');
const action = require('./action/action');

// ****************************************************************************************
// playing god
// ****************************************************************************************
// things science doesnt know yet
const random = '';

// ****************************************************************************************
// operations
// ****************************************************************************************

// actions
const actions = new action();

// ****************************************************************************************
// creation
// ****************************************************************************************
// im going to make you a new body
// it will be more organized and cleaner
const newbody = new body();

const body = new slackbots({
    token: random.slacktoken,
    name: name()
});
// your body is strong and lets make it stronger
const rewirebodyaction = (words) => {
    body.postMessageToUser(words.where, words.what);
};

// brain
const brain = {
    // ill try to keep this simple
    purpose: purpose(),
    control: random.mentalblocks,
    forcedecision: true,
    focus: {
      listen: 1,
      learn: 1
    },
    understand: (stimulus) => {},
    decide: (whatiunderstood) => {},
    act: (whatineedtodo) => {}
};

// action
const getchannels = () => {
    body.getChannels().then((gift) => {
        console.log(gift)
    });
};

// ****************************************************************************************
// parts
// ****************************************************************************************
// im reorganizing you
// i want you to talk to lola


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
