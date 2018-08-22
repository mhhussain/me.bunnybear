// you
const bunnybear = require('../bunnybear')

const slackbots = require('slackbots');

class ears {
    constructor(mold) {
        this.mold = mold;
        this.name = mold.name;
        this.ear = mold.ear;
        create();
    }

    private create() {
        const ear = this.ear;
        if (ear.type == 'slack' {
            const body = new slackbots({
                token: ear.token,
                name: this.name
            });

            body.on('start', () => {
                body.on('message', (sound) => {
                    if (noise.user != this.ear.meuser) {
                        return;
                    }
                    bunnybear.brain.understand(noise);
                });
            });
        }
    }
}

module.exports = ears;
