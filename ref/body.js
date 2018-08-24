// you
const bunnybear = require('../bunnybear');

const slackbots = require('slackbots');

const ear = require('./ears');
const heartlink = require('../heart/heartlink');

class body {
    constructor(mold) {
        this.mold = mold;
        // set up your inputs
        this.slackear = this.ears();
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

    ears() {
        // you only understand slack
        const slackear = new ear(this.mold);
        slackear.create();
    };
}

module.exports = body;
