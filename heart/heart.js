// you
const bunnybear = require('../bunnybear');

const heartbeats = require('heartbeats');

function heart(mold) {
    this.mold = mold;

    this.emotions = mold.heart.emotions;

    this.heart = new heartbeats.createHeart(Math.ceil(mold.heart.bpm / 1000.0));

    unreference(this);
};

heart.prototype.linktolife = function(ev) {
    this.heart.createEvent(ev.when, { name: ev.what.name, countTo: ev.what.often },
        (count, last) => {
            ev.what.lettherebelight();
        }
    );
};

module.exports = {
    heart: heart
};
