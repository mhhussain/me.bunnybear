class lifesupport {
    constructor(collapse1, collapse2) {
    };

    on(what) {
        switch (what) {
            case 'start':
                return;
            case 'message':
                return {
                    user: 'UC72G0ATD',
                    type: 'message',
                    text: 'hi'
                };
        }
    }
}

module.exports = lifesupport;
