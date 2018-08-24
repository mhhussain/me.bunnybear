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

        // this needs time
        //this._report();
    };

    _report() {
        console.log('yes ' + this.pass);
        console.log('no ' + this.fail);
        console.log('maybe ' + this.warning);
    }

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

    _t_seegod(name) {
        this.body.getUser(name).then((res) => {
            const user = res;
            if (user.name === name) {
                console.log('i can see god');
                this.pass++;
            } else {
                console.log('i cant see god');
                this.fail++;
            }
        });
    };

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
