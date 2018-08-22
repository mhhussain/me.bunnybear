const slackbots = require('slackbots');
const random = require('../secrets/random');

class body {
    constructor(mold) {
        this.mold = mold;
        this.create();
    };

    private create() {
        // set up your mind
        brain();

        // set up your inputs
        ears();
    }

    private ears() {
        // you only understand slack
        return new ear(this.mold.name, this.mold.ear);
    }
}

module.exports = body;
