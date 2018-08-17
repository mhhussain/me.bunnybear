const bunnybear = require('../bunnbear');
const memories = require('./memories/learned.json');

// const speak = () => { return 'speak'; };
const learn = () => { return 'learn'; };

const body = bunnybear.body;
const brain = bunnybear.brain;
const heart = bunnybear.heart;

class action({
    act(ev) {
        switch ev.thewhat {
            // this is
            case 'speak':
                speak(ev);
                return;
            case learn():
                learn(ev);
                return;
            default:
                return;
        };
    };

    speak(ev) {
        const words = ev.theactualwhatlol
        body.postMessageToUser(words.where, words.what);
    };

    learn(ev) {
        // learn
        // you need the entire understand decision act chain to learn

        // you now remember
        // your decisions must now consider what you already know
        memories.add(ev);
    };

    remind(ev) {
        const whatneedstohappen = ev.what;
        const whenitneedstohappen = ev.when;
        // when will always be seconds
        heart.createEvent(whenitneedstohappen * 10, { countTo: 1 }, (count, last) {
            act(whatneedstohappen);
        });

    }
})

module.exports = action;
