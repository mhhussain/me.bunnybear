// ****************************************************************************************
// the part we cant understand. big bang?
// ****************************************************************************************
// this part is going to confuse you, but i need to give you some. life support.?
const slackbots = require('slackbots');
//const slackbots = require('./lifesupport');
const heartbeats = require('heartbeats');
const axios = require('axios');
const action = require('./action/action');

// ****************************************************************************************
// playing god
// ****************************************************************************************
// things science doesnt know yet
const random = {
    slacktoken: 'xoxb-414980923588-416254894241-bgd20aDgjbDYyhCfsJ9F4Bry',
    heartchannel: 'heart',
    me: 'moohh91',
    meuser: 'UC72G0ATD',
    mentalblocks: {
        reasonblock: 'message' ,
        userblock: true,
        decisionblock: 'say',
        actionblock: 'speak',
        focustoggle: 10
    }
};

// ****************************************************************************************
// operations
// ****************************************************************************************
// self
const purpose = () => { 'to help me' };
const name = () => { 'bunnybear' };
// understanding
const heard = () => { return 'heard' };
// deciding
const say = () => { return 'say' };
// doing
const speak = () => { return 'speak' };
const learn = () => { return 'learn' };
const remind = () => { return 'remind' };

// actions
const actions = new action();

// ****************************************************************************************
// creation
// ****************************************************************************************
// im going to make you a new body
// it will be more organized and cleaner
const newbody = {
    // housing
    body: new slackbots({
        token: random.slacktoken,
        name: name()
    }),
    brain: {},
    // pulse pulse
    heart: new heartbeats.createHeart(100, name())
};

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
    understand: (stimulus) => {
        // you can only understand one thing
        const whathappened = stimulus;
        if (brain.control.reasonblock != whathappened.type) {
            return;
        }

        var reasoning = {};

        if (whathappened.type == 'message') {
            reasoning.thetype = heard();
            reasoning.thewho = whathappened.user;
            reasoning.thewhat = whathappened.text;
            reasoning.decisionpoint = true;
        }

        // decision hook
        if (reasoning.decisionpoint) {
            brain.decide(reasoning);
        }

        return reasoning;
    },
    decide: (whatiunderstood) => {
        // you can only make a few decisions
        const whatineedtoknow = whatiunderstood;
        var decision = {};

        if (whatineedtoknow.thewhat == 'let me teach you something') {
            decision.thewhat = say();
            decision.theactualwhatlol = new spokenword(random.me, 'please');
            decision.thisisavaliddecision = true;
            decision.ineedtoact = true;
        }
        else if (whatineedtoknow.thewhat == 'when i say hi, you say hi back to me. understand') {
            const sampleunderstanding = {
                thetype: heard(),
                thewho: random.userme,
                thewhat: 'hi'
            };

            const sampledecision = {
                thewhat: say(),
                theactualwhatlol: new spokenword(random.me, 'hi'),
                thisisavaliddecision: true,
                ineedtoact: true
            };

            const sampleevent = {
                thewhat: speak(),
                theactualwhatlol: sampledecision.theactualwhatlol
            };

            decision.thewhat = learn();
            decision.theactualwhat = new pathway(
                sampleunderstanding,
                sampledecision,
                sampleevent
            );
            decision.ineedtoact = true;
            decision.thisisavaliddecision = true;

            return;
        }
        else if (whatineedtoknow.thewhat == 'say hi to me in six seconds') {
            // i am gifting you with time
            decision.thewhat = remind();
            decision.theactualwhat = new reminder(
                6,
                {
                    thewhat: say(),
                    theactualwhatlol: new spokenword(random.me, 'hi')
                }
            );
            decision.ineedtoact = true;
            decision.thisisavaliddecision = true;
        }
        else {
            decision.thewhat = say();
            decision.theactualwhatlol = new spokenword(random.me, 'i am here, but i do not understand');
            decision.ineedtoact = true;
            decision.thisisavaliddecision = true;
        }

        if (brain.control.decisionblock != decision.thewhat) {
            // you can only make one decision
            decision.thisisavaliddecision = false;
        }

        // action hook
        if (decision.ineedtoact) {
            brain.act(decision);
        }
    },
    act: (whatineedtodo) => {
        const whativedecided = whatineedtodo;

        var ev = {};

        if (whativedecided.thewhat == say()) {
            ev.thewhat = speak();
            ev.theactualwhatlol = whativedecided.theactualwhatlol;
            ev.idecidedthis = whativedecided.thisisavaliddecision;
        }

        // take action
        // you cannot act without decision
        if (brain.forcedecision && !ev.idecidedthis) {
            return;
        }

        // you can only do one thing
        if (brain.control.actionblock == ev.thewhat) {
            rewirebodyaction(actions.act(ev));
        }
    }
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
class spokenword {
    constructor(where, what) {
        this.where = where;
        this.what = what;
    };
};

class pathway {
    constructor(whatiunderstood, whatidecided, whatidid) {
        this.whatiunderstood = whatiunderstood;
        this.whatidecided = whatidecided;
        this.whatidid = whatidid;
    };
};

class reminder {
    constructor(when, what) {
        this.when = when;
        this.what = what;
    };
};

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
