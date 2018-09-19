const _ = require('lodash');

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

    if (cmdtext.substr(0, 4) === '::cm') {
        const command = cmdtext.substr(5);

        // create concept
        if (command.substr(0, 14) === 'create concept') {
            const concept = command.substr(15);
            const pad = n => n <= 99999 ? ('00000' + n).slice(-5): n;
            const groupname = concept.substr(0, 17).concat(pad(Math.ceil(Math.random()*10000)));

            this.injector.createGroup(groupname).then(() => {
                this.injector.postMessageToUser('moohh91', channelname + ' has been created.');
            });
        } else if (command.substr(0, 14) === 'flush concept') {
            const concept = command.substr(15);
            
            this.injector.getConversations().then((res) => {
                const channels = res.channels;
                const flushchannel = _.find(channels, (channel) => {
                    const channelname = channel.name;
                    return channelname.substr(channelname.length-5) === '01090';
                });

                this.injector.getChannelHistory(flushchannel.id).then((res) => {
                    const messages = res.messages;
                    
                    var ret = '';
                    _.forEach(messages, (message) => {
                        if (message.text.substr(0,2) === '<@') {
                            return;
                        }
                        ret += message.text + '\n';
                    });
                    this.injector.postMessageToUser('moohh91', ret);
                });
            });
        }
    }

    return;

    /*if (cmdtext.substr(0,4) === '::cm') {
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
    }*/
}

module.exports = bunnybear;