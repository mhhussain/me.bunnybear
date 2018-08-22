const slackbots = require('slackbots');
const random = require('../secrets/random');

class ears {
    constructor(name, ear) {
        this.name = name;
        this.ear = ear;
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
                    if (noise.user != random.meuser) {
                        return;
                    }
                    brain.understand(noise);
                });
            });
        }
    }
}

module.exports = ears;
