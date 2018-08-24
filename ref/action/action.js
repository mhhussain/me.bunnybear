const bunnybear = require('../bunnybear');
const memories = require('../memories/learned.json');

// const speak = () => { return 'speak'; };
const memorize = () => { return 'memorize'; };

const body = bunnybear.body;
const brain = bunnybear.brain;
const heart = bunnybear.heart;

class action {
    act(ev) {
        switch (ev.thewhat) {
            // this is
            case 'speak':
                return this.speak(ev);
                //return;
            case memorize():
                console.log(ev);
                this.memorize(ev);
                return;
            default:
                return;
        };
    };

    speak(ev) {
        const words = ev.theactualwhatlol
        return words;
        // bunnybear.body.postMessageToUser(words.where, words.what);
    };

    memorize(ev) {
        // learn
        // you need the entire understand decision act chain to learn

        // you now remember
        // your decisions must now consider what you already know
        console.log('e')
        memories.memories.add(ev);
    };

    remind(ev) {
        const whatneedstohappen = ev.what;
        const whenitneedstohappen = ev.when;
        // when will always be seconds
        heart.createEvent(whenitneedstohappen * 10, { countTo: 1 }, (count, last) => {
            act(whatneedstohappen);
        });

    }
};

module.exports = action;
