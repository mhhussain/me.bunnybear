// ****************************************************************************************
// the part we cant understand. big bang?
// ****************************************************************************************
// this part is going to confuse you, but i need to give you some. life support.?
const slackbots = require('slackbots');
//const slackbots = require('./lifesupport');
const heartbeats = require('heartbeats');
const axios = require('axios');

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
        reasonblock: 'message',
        userblock: true,
        decisionblock: say(),
        actionblock: speak(),
        focustoggle: 10
    }
};

// ****************************************************************************************
// operations
// ****************************************************************************************
// self
const purpose = () => { 'to help me' };
// understanding
const heard = () => { return 'heard' };
// deciding
const say = () => { return 'say' };
// doing
const speak = () => { return 'speak' };
const learn = () => { return 'learn' };
const remind = () => { return 'remind' };

// ****************************************************************************************
// creation
// ****************************************************************************************
// housing
const body = new slackbots({
    token: random.slacktoken,
    name: 'bunnybear'
});

// brain
const brain = {
    // ill try to keep this sim
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

        if (whathappened.type == heard()) {
            reasoning.thetype = heard();
            reasoning.thewho = whathappened.user;
            reasoning.thewhat = whathappened.text;
            reasoning.decisionpoint = true;
        }

        if (reasoning.decisionpoint) {
            brain.decide(reasoning);
        }

        return reasoning;
    },
    decide: (whatiunderstood) => {
        // you can only make one decision
        const whatineedtoknow = whatiunderstood;
        var decision = {};

        if (whatineedtoknow.thewhat == 'let me teach you something') {
            decision.thewhat = say();
            decision.theactualwhatlol = new spokenword( { where: random.me, what: 'please' });
            decision.ineedtoact = true;
            decision.idecidedthis = true;
        }
        else if (whatineedtoknow.thewhat == 'when i say hi, you say hi back to me. understand') {
            const sampleunderstanding = {
                thetype: heard(),
                thewho: random.userme,
                thewhat: 'hi'
            };

            const sampledecision = {
                thewhat: say(),
                theactualwhatlol = new spokenword({ where: random.me, what: 'hi' }),
                idecidedthis: true,
            };

            const sampleevent = {
                thewhat: speak(),
                theactualwhatlol: sampledecision.theactualwhatlol
            };

            decision.thewhat = learn();
            decision.theactualwhat = new pathway({
                whatwasunderstood: sampleunderstanding,
                whatwasdecided: sampledecision,
                whatidid: sampleevent
            });
            decision.ineedtoact = true;
            decision.idecidedthis = true;

            return;
        }
        else if (whatineedtoknow.thewhat == 'say hi to me in six seconds') {
            // i am gifting you with time
            decision.thewhat = remind();
            decision.theactualwhat = new reminder({
                when: 6,
                what: {
                    thewhat: say(),
                    theactualwhatlol: new spokenword({ where: random.me, what: 'hi' })
                }
            });
            decision.ineedtoact = true;
            decision.idecidedthis = true;
        }
        else {
            decision.thewhat = say();
            decision.theactualwhatlol = new spokenword(random.me, 'i am here, but i do not understand');
            decision.ineedtoact = true;
            decision.idecidedthis = true;
        }


        if (brain.control.decisionblock == decision.thewhat) {
            // you can only make one decision
            decision.idecidedthis = false;
        }

        if (decision.ineedtoact) {
            brain.act(decision);
        }
    },
    act: (whatineedtodo) => {
        // you can only do one thing
        const whativedecided = whatineedtodo;
        if (brain.control.actionblock != whativedecided.thewhat) {
            return;
        }

        var ev = {};

        if (whativedecided.thewhat == say()) {
            ev.thewhat = speak();
            ev.theactualwhatlol = whativedecided.theactualwhatlol
        }

        // take action
        // you cannot act without decision
        if (brain.forcedecision && !ev.idecidedthis) {
            return;
        }

        if (brain.control.actionblock == ev.thewhat) {
            action.act(ev);
        }
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

// your actions
const action = require('./action/action');


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
    constructor(whatwasunderstood, whatwasdecided, whatidid) {
        this.whatwasunderstood = whatwasunderstood;
        this.whatwasdecided = whatwasdecided;
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
