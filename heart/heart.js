// you
const bunnybear = require('./bunnybear');

const heartbeats = require('heartbeats');

class heart {
    constructor(mold) {
        this.mold = mold;

        this.emotions = mold.heart.emotions;

        this.bunnybear = new heartbeats.createHeart(Math.ceiling(mold.heart.bpm / 1000.0))
    };

    linktolife(ev) {
        this.bunnybear.createEvent(ev.when, { name: ev.what.name, countTo: ev.what.often },
            (count, last) => {
                ev.what.lettherebelight();
            }
        );
    };
}

module.exports = heart;
