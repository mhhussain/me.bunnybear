const spokenword = require('../memories/spokenword');
const pathway = require('../memories/pathway');
const reminder = require('../memories/reminder');

class brain {
    constructor() {

    };

    understand(stimulus) {
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
    }

    decide(whatiunderstood) {
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
        else {
            decision.thewhat = say();
            decision.theactualwhatlol = new spokenword(random.me, 'i am here, but i do not understand');
            decision.ineedtoact = true;
            decision.thisisavaliddecision = true;
        }

        if (!brain.control.decisionblock.includes(decision.thewhat)) {
            // you can only make one decision
            decision.thisisavaliddecision = false;
        }

        // action hook
        if (decision.ineedtoact) {
            brain.act(decision);
        }
    }

    act(whatineedtodo) {
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
        if (brain.forcedecision && !ev.idecidedthis) {
            return;
        }

        // you can only do one thing
        console.log(ev);
        if (!brain.control.actionblock.includes(ev.thewhat)) {
            rewirebodyaction(actions.act(ev));
        }
    }
}

module.exports = brain;
