const _ = require('underscore');

// wake the vessel

class wake {
    constructor(vessel) {
        this.body = vessel;
        this.tests = 0;
        this.pass = 0;
        this.fail = 0;
        this.warning = 0;
        this.randomnumber = '' + Math.ceil(Math.random()*1e15);
        console.log(this.randomnumber);
        this._t_getchannels();
        this._t_getusers();
        this._t_seegod('moohh91');
        this._t_talktogod();
        this._t_caniwhisper('UC72G0ATD');
        
        // create
        this._t_caniremind('UC72G0ATD', this.randomnumber);
        this._t_caniseereminders('RmEJDTGZ34')
        
        // access
        setTimeout(() => {this._t_caniseereminders(this.randomnumber)}, 10000);
        setTimeout(() => {this._t_caniunderstandreminders(this.randomnumber)}, 10000);

        // this needs time
        //this._report();
    };

    _report() {
        console.log('yes ' + this.pass);
        console.log('no ' + this.fail);
        console.log('maybe ' + this.warning);
    };

    _t_getchannels() {
        this.tests++;
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
        this.tests++;
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
        this.tests++;
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
        this.tests++;
        this.body.postMessageToUser('moohh91', 'hi', { as_user: true })
            .then(() => {
                console.log('i can talk to god');
                this.pass++;
            });
    };

    _t_caniwhisper(god) {
        this.tests++;
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

    _t_caniremind(user, randomnumber) {
        this.tests++;
        this.body.postReminder(user, randomnumber, 'in a minute', {})
            .then((res) => {
                const reminder = res.reminder;
                if (reminder.text === randomnumber) {
                    console.log('i can remember');
                    this.pass++;
                } else {
                    console.log('i cannot remember');
                    this.fail++;
                }
            });
    };

    _t_caniseereminders(randomnumber) {
        this.tests++;
        this.body.getReminders().then((res) => {
            const reminder = _.find(res.reminders, (r) => {
                return r.id === randomnumber
            });

            if (reminder) {
                console.log('i can see reminders');
                this.pass++;
            } else {
                console.log('i cannot see reminders');
                this.fail++;
            }
        });
    }

    _t_caniunderstandreminders(randomnumber) {
        this.tests++;
        this.body.getReminders().then((res) => {
            const r = _.find(res.reminders, (r1) => {
                return r1.text === randomnumber && !r1.completed_ts;
            });

            this.body.getReminder(r.id).then((res1) => {
                console.log(res1)
                const r2 = _.find(res1, (r3) => {
                    return r3.text === randomnumber && !r3.complete_ts;
                });

                if (r2) {
                    console.log(r2);
                    console.log('i can understand reminders');
                    this.pass++;
                } else {
                    console.log('i cannot understand reminders');
                    this.fail++;
                }
            });
        })
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
