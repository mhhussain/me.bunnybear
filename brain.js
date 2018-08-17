const bunnybear = require('./bunnybear');

const random = bunnybear.random;

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

        if (whathappened.type == heard()) {
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
            decision.theactualwhatlol = new spokenword( { where: random.me, what: 'please' });
            decision.idecidedthis = true;
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
                theactualwhatlol = new spokenword({ where: random.me, what: 'hi' }),
                idecidedthis: true,
                ineedtoact: true
            };

            const sampleevent = {
                thewhat: speak(),
                theactualwhatlol: sampledecision.theactualwhatlol
            };

            decision.thewhat = learn();
            decision.theactualwhat = new pathway({
                whatiunderstood: sampleunderstanding,
                whatidecided: sampledecision,
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

        // action hook
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
