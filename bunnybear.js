const projector = require('./injector');

var cmdmode = false;
var cmdbag = {};

function bunnybear(injector, cmd) {
    this.injector = injector;
    this.cmd = cmd;

    this.handlemessage();
}

bunnybear.prototype.handlecommand = function() {
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

bunnybear.prototype.handlemessage = function() {
    if (this.cmd.user != 'UC72G0ATD') {
        return;
    }

    if (this.cmd.type != 'message') {
        return;
    }

    const cmdtext = this.cmd.text;

    if (cmdtext.substr(0,4) === '::cm') {
        return handlecommand(cmdtext);
    } else if (cmdtext === 'hi') {
        this.injector.postMessageToUser('moohh91', 'hi').then(() => {
            this.injector.postMessageToUser('moohh91', 'go away!!');
        });
    } else if (cmdtext === 'you\'re useless') {
        this.injector.postMessageToUser('moohh91', 'im a fucking computer').then(() => {
            this.injector.postMessageToUser('moohh91', 'on a fucking computer');
        });
    }

    if (cmdtext === 'the piano should play moonlight sonata') {
        cmdmode = true;
        cmdbag = {};
        this.injector.postMessageToUser('moohh91', 'the moonlight looks and sounds beautiful tonight');
    } else if (cmdtext === 'the piano doesnt kill the player if it doesnt like the music') {
        projector.slacki.postMessageToUser('moohh91', ';');
        cmdbag = {};
        cmdmode = false;
    }
}

module.exports = bunnybear;