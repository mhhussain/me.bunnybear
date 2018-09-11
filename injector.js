const bunnyslack = require('./bunnyslack');
const tokens = require('./secrets');

const bunnybear = require('./bunnybear');

const slacki = new bunnyslack({
    token: tokens.bot,
    wptoken: tokens.ws,
    name: 'bunnybear'
});

slacki.on('message', (message) => {
    new bunnybear(slacki, message);
});