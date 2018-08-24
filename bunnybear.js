const bunnyslack = require('./bunnyslack');
const wake = require('./wake/wake');

(() => {
    const body = new bunnyslack({
        token: 'xoxb-414980923588-416254894241-bgd20aDgjbDYyhCfsJ9F4Bry',
        name: 'bunnybear'
    });

    const up = new wake(body);
})();
