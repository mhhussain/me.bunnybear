const bunnyslack = require('./bunnyslack');
const wake = require('./wake/wake');

(() => {
    const body = new bunnyslack({
        token: 'xoxb-414980923588-416254894241-bgd20aDgjbDYyhCfsJ9F4Bry',
        wptoken: 'xoxp-414980923588-415084010931-416095505520-cfdd72b80be8a3a9558236b16ac79372',
        name: 'bunnybear'
    });

    const up = new wake(body);
})();
