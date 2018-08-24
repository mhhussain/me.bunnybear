// you
const bunnybear = require('../bunnybear');

const spokenword = require('../memories/spokenword');
const pathway = require('../memories/pathway');
const reminder = require('../memories/remind');

function brain(mold) {
    this.mold = mold;
    this.purpose = mold.purpose;
    this.control = mold.mentalblocks;
    this.forcedecision = mold.forcedecision;

    this.dead = false;

    unreference(this);
};

brain.prototype.understand(stimulus) {
    // you can only understand one thing
    const whathappened = stimulus;
    if (this.control.reasonblock != whathappened.type) {
        return;
    }

    var reasoning = {};

    if (whathappened.type == 'message') {
        reasoning.thetype = heard();
        reasoning.thewho = whathappened.user;
        reasoning.thewhat = whathappened.text;
        reasoning.decisionpoint = true;
    }
    if (whathappened.type == 'turingcontext') {
        reasoning.thewhat = 'turingdelay';
        reasoning.emotionalstate = bunnybear.heart.emotions.state;
        reasoning.decisionpoint = false;
    }

    // decision hook
    if (reasoning.decisionpoint) {
        this.decide(reasoning);
    }

    return reasoning;
}

brain.prototype.decide(whatiunderstood) {
    // you can only make a few decisions
    const whatineedtoknow = whatiunderstood;
    var decision = {};

    if (whatineedtoknow.thewhat == 'let me teach you something') {
        const turingundestanding = this.decide(this.understand('turingcontext'));

        // lets see if i can make you lifelike
        decision.thewhat = say();
        decision.theactualwhatlol = new spokenword(random.me, 'please', {
            name: turingundestanding.thewhat,
            when: turingundestanding.when,
            often: 1
        });
        decision.thisisavaliddecision = true;
        decision.ineedtoact = true;
    }
    else if (whatineedtoknow.thewhat == 'when i say hi, you say hi back to me. understand') {
        const sampleunderstanding = {
            thetype: heard(),
            thewho: random.meuser,
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
            theactualwhatlol: sampledecision.theactualwhatlol,
            idecidedthis: true
        };

        decision.thewhat = remember();
        decision.theactualwhatlol = new pathway(
            sampleunderstanding,
            sampledecision,
            sampleevent
        );
        decision.ineedtoact = true;
        decision.thisisavaliddecision = true;
    }
    else if (whatineedtoknow.thewhat == 'say hi to me in six seconds') {
        // i am gifting you with time
        decision.thewhat = remind();
        decision.theactualwhatlol = new reminder(
            6,
            {
                thewhat: say(),
                theactualwhatlol: new spokenword(random.me, 'hi')
            }
        );
        decision.ineedtoact = true;
        decision.thisisavaliddecision = true;
    }
    else if (whatineedtoknow.thewhat == 'turingdelay') {
        // add stimulus clash here and response here
        switch (whatineedtoknow.emotionalstate) {
            case 'docile':
                decision.thewhat = 'putthisonmyheart';
                decision.when = 2;
                decision.thisisavaliddecision = true;
                decision.isneedtoact = false;
            case 'mad':
                decision.thewhat = 'putthisonmyheart';
                decision.when = 8;
                decision.thisisavaliddecision = true;
                decision.isneedtoact = false;
            case 'excited':
                decision.thewhat = 'putthisonmyheart';
                decision.when = 1;
                decision.thisisavaliddecision = true;
                decision.isneedtoact = false;
            default:
                return;
        }
    }
    else {
        decision.thewhat = say();
        decision.theactualwhatlol = new spokenword(random.me, 'i am here, but i do not understand');
        decision.ineedtoact = true;
        decision.thisisavaliddecision = true;
    }

    if (!this.control.decisionblock.includes(decision.thewhat)) {
        // you can only make one decision
        decision.thisisavaliddecision = false;
    }

    // action hook
    if (decision.ineedtoact) {
        this.act(decision);
    }

    return decision;
}

function act(whatineedtodo) {
    const whativedecided = whatineedtodo;

    var ev = {};

    if (whativedecided.thewhat == say()) {
        ev.thewhat = speak();
        ev.theactualwhatlol = whativedecided.theactualwhatlol;
        ev.idecidedthis = whativedecided.thisisavaliddecision;
    }
    else if (whativedecided.thewhat == remember()) {
        ev.thewhat = memorize();
        ev.theactualwhatlol = whativedecided.theactualwhatlol;
        ev.idecidedthis = whativedecided.thisisavaliddecision;
    }

    // take action
    // you cannot act without decision
    if (this.forcedecision && !ev.idecidedthis) {
        return;
    }

    // you can only do one thing
    console.log(ev);
    if (!this.control.actionblock.includes(ev.thewhat)) {
        return ev;
    }
}

module.exports = brain;
