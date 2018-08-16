// ****************************************************************************************
// the part science doesnt understand. big bang?
// ****************************************************************************************
const slackbots = require('slackbots');
const heartbeats = require('heartbeats');
const axios = require('axios');

// ****************************************************************************************
// playing god
// ****************************************************************************************
// housing
const body = new slackbots({
    token: 'xoxb-414980923588-416254894241-bgd20aDgjbDYyhCfsJ9F4Bry',
    name: 'bunnybear'
});

// heart
var heart = new heartbeats.createHeart(100, 'bunnybear');

// ****************************************************************************************
// and here. we. go.
// ****************************************************************************************
body.on('start', () => {
    // what's happening...
    // these are comments...?
    // more needs to happen.
});