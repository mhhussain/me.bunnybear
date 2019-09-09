const bunnyslack = require('./bunnyslack');
const tokens = require('./secrets');
const wake = require('./wake/wake');

const bunnybear = require('./bunnybear');

const slacki = new bunnyslack({
    token: tokens.bot,
    wptoken: tokens.ws,
    name: 'bunnybear'
});

slacki.on('start', () => {
    // new wake(slacki);
    console.log('im awake.');
});

slacki.on('message', (message) => {
    new bunnybear(slacki, message);
});