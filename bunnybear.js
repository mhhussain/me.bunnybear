const bunnyslack = require('./bunnyslack');
const wake = require('./wake/wake');
const tokens = require('./secrets');

var cmdmode = false;
var cmdbag = {};

const handlemessage = (message) => {
    if (message.user != 'UC72G0ATD') {
        return;
    }

    if (message.type != 'message') {
        return;
    }

    const cmd = message.text;

    if (cmd.substr(0,4) === '::cm') {
        if (cmdmode) {
            const evcmd = cmd.substr(5)
                .replace(/‘/g, String.fromCharCode(39))
                .replace(/’/g, String.fromCharCode(39));
            console.log(cmd);
            console.log(cmdmode);
            console.log(evcmd);
            eval(evcmd);
        } else {
            return;
        }
    }

    if (cmd === 'the piano should play moonlight sonata') {
        cmdmode = true;
        cmdbag = {};
        body.postMessageToUser('moohh91', 'the moonlight looks and sounds beautiful tonight');
    } else if (cmd === 'the piano doesnt kill the player if it doesnt like the music') {
        body.postMessageToUser('moohh91', ';');
        cmdbag = {};
        cmdmode = false;
    }

};

const body = new bunnyslack({
    token: tokens.bot,
    wptoken: tokens.ws,
    name: 'bunnybear'
});

body.on('message', handlemessage);

(() => {
    const up = new wake(body);
})();
