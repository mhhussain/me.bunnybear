// you
const bunnybear = require('../bunnybear');

const slackbots = require('slackbots');
const random = require('../secrets/random');

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
        // ill need to add a translation here
        // for now you can only speak to me
        mouth.postMessageToUser(words.where, words.what);
    };

    private ears() {
        // you only understand slack
        return new ear(this.mold.name, this.mold.ear);
    };
}

module.exports = body;
