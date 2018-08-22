const slackbots = require('slackbots');
const random = require('../secrets/random');
const brain = require('../brain/brain');

class body {
    constructor(mold) {
        this.mold = mold;
        // set up your inputs
        this.slackear = ears();
        this.slackmouth = this.slackear;
    };

    speakout(words) {
        const mouth = this.slackmouth;
        mouth.postMessageToUser(words.where, words.what);
    };

    private ears() {
        // you only understand slack
        return new ear(this.mold.name, this.mold.ear);
    };
}

module.exports = body;
