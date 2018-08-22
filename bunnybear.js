// ****************************************************************************************
// playing god
// ****************************************************************************************
// things science doesnt know yet
const bunnybearsmold = require('./secrets/mold');
const h = require('./heart/heart');
const b = require('./brain/brain');
const bd = require('./brain/brain');

// ****************************************************************************************
// creation
// ****************************************************************************************
// mold
const mold = bunnybearsmold;

// heart
const heart = new h(mold);

// brain
const brain = new b(mold);

// body
const body = new bd(mold);

// would you like feet?

const thumpthump = () {
    if (!heart) {
        heart = new h(mold);
    }
}

// wake up.
const wakeup = () {

    if (!heart) {
        return;
    }

    const wake = new heartlink(bunnybearsmold.life.when, bunnybearsmold.life.what);


    heart.linktolife(wake);
}

module.exports = {
    brain: brain,
    heart: heart,
    body: body
};
