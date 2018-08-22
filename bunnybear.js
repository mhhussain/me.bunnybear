// ****************************************************************************************
// playing god
// ****************************************************************************************
// things science doesnt know yet
const bunnybearsmold = require('./secrets/mold');
const h = require('./heart/heart');
const b = require('./brain/brain');
const bd = require('./body/body');

const heartlink = require('./heart/heartlink');
// ****************************************************************************************
// creation
// ****************************************************************************************
// mold
const mold = bunnybearsmold;
var heart = new heart(bunnybearsmold);
var brain;
var body;

// wake up.
(() => {
    // is your heart working?
    /*if (!heart) {
        return;
    }*/

    // heart
    heart = new h(mold);

    // brain
    brain = new b(mold);

    // body
    body = new bd(mold);

    // would you like feet?

    const wake = new heartlink(bunnybearsmold.life.when, bunnybearsmold.life.what);
    heart.linktolife(wake);
})();

module.exports = {
    brain: brain,
    heart: heart,
    body: body
};
