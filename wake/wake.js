const _ = require('underscore');

// wake the vessel

class wake {
    constructor(vessel) {
        this.body = vessel;
        this.pass = 0;
        this.fail = 0;
        this.warning = 0;
        this._t_getchannels();
        this._t_getusers();
        this._t_seegod('moohh91');
        this._t_talktogod();
        this._t_caniwhisper('UC72G0ATD');
        this._t_caniremind();
        this._t_caniseereminders();

        // this needs time
        //this._report();
    };

    _report() {
        console.log('yes ' + this.pass);
        console.log('no ' + this.fail);
        console.log('maybe ' + this.warning);
    };

    _t_getchannels() {
        this.body.getChannels().then((res) => {
            const channels = res.channels;
            const gchannel = _.find(channels, (c) => { return c.name === 'general' });
            const rchannel = _.find(channels, (c) => { return c.name === 'random' });

            if (gchannel) {
                console.log('i can reach generally');
                this.pass++;
            } else {
                console.log('i cannot reach generally');
                this.fail++;
            }

            if (rchannel) {
                console.log('i can reach randomly');
                this.pass++;
            } else {
                console.log('i cannot reach randomly');
                this.fail++;
            }
        });
    };

    _t_getusers() {
        this.body.getUsers().then((res) => {
            const users = res.members;
            if (users.length) {
                console.log('i can see people');
                this.pass++;
            } else {
                console.log('i cant see anyone');
                this.fail++;
            }
        });
    };

    _t_seegod(god) {
        this.body.getUser(god).then((res) => {
            const user = res;
            if (user.name === god) {
                console.log('i can see god');
                this.pass++;
            } else {
                console.log('i cant see god');
                this.fail++;
            }
        });
    };

    _t_talktogod() {
        this.fail++;
        this.body.postMessageToUser('moohh91', 'hi', { as_user: true })
            .then(() => {
                console.log('i can talk to god');
                this.pass++;
                this.fail--;
            });
    };

    _t_caniwhisper(god) {
        this.body.getChannels().then((res) => {
            const channels = res.channels;

            const gid = _.find(channels, (c) => { return c.name === 'general' });

            if (!gid) {
                console.log('i cannot whisper');
                this.fail++;
            } else {
                this.body.postEphemeral('general', god, 'hi').then((res) => {
                    console.log('i can whisper');
                    this.pass++;
                });
            }
        });
    };

    _t_caniremind(user) {

        this.fail++;
        this.body.postReminder(user, 'i have to tell you something', 'in ten seconds', {})
            .then((res) => {
                const reminder = res.reminder;
                if (reminder.text === 'i have to tell you something') {
                    console.log('i can remember');
                    this.pass++;
                    this.fail--;
                } else {
                    console.log('i cannot remember');
                }
            });
    };

    _t_caniseereminders() {
        this.body.getReminders().then((r) => {
            console.log(r);
        });
    }

    yes() {
        return this.pass;
    };

    no() {
        return this.fail;
    };

    maybe() {
        return this.warning;
    };
}

module.exports = wake;
