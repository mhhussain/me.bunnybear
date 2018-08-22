// you
const bunnybear = require('./bunnybear');

const heartbeats = require('heartbeats');

class heart {
    constructor(mold) {
        this.mold = mold;

        this.bunnybear = new heartbeats.createHeart(Math.ceiling(mold.heart.bpm / 1000.0))
    };

    linktolife(ev) {
        this.bunnybear.createEvent(ev.when, { name: ev.what.name, countTo: 1 },
            (count, last) => {
                ev.what.lettherebelight();
            }
        );
    };
}

module.exports = heart;
