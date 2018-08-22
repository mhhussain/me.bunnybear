// you
const bunnybear = require('../bunnybear')

const slackbots = require('slackbots');

class ears {
    constructor(mold) {
        this.mold = mold;
        this.name = mold.name;
        this.ear = mold.ear;
    }

    create() {
        const ear = this.ear;
        console.log(bunnybear);
        if (ear.type == 'slack') {
            const body = new slackbots({
                token: ear.token,
                name: this.name
            });

            body.on('start', () => {
                body.on('message', (sound) => {
                    if (sound.user != this.ear.meuser) {
                        return;
                    }
                    bunnybear.brain.understand(sound);
                });
            });
        }
    }
}

module.exports = ears;
