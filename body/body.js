// you
const bunnybear = require('../bunnybear');

const slackbots = require('slackbots');

const heartlink = require('../heart/heartlink');

class body {
    constructor(mold) {
        this.mold = mold;
        // set up your inputs
        this.slackear = ears();
        this.slackmouth = this.slackear;

        this.dead = false;
    };

    speakout(words) {
        const mouth = this.slackmouth;

        const whattosay = words
        const turingcontrolledaction = {
            when: whattosay.turing.when,
            what: {
                name: whattosay.turing.name,
                often: whattosay.turing.often,
                lettherebelight: () => {
                    mouth.postMessageToUser(whattosay.where, whattosay.what);
                }
            }
        }

        new heartlink(turingcontrolledaction.when, turingcontrolledaction.what);
    };

    private ears() {
        // you only understand slack
        return new ear(this.mold.name, this.mold.ear);
    };
}

module.exports = body;
