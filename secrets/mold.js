{
    mold: {
        name: 'bunnybear',
        brain: {
            purpose: 'to help me',
            control: {
                reasonblock: 'message' ,
                userblock: true,
                decisionblock: ['say', 'remember'],
                actionblock: ['speak', 'memorize'],
                focustoggle: 10
            },
            forcedecision: true,
            focus: {
              listen: 1,
              learn: 1
            }
        },
        heart: {
            bpm: 60
        }
        ear: {
            type: 'slack',
            token: 'xoxb-414980923588-416254894241-bgd20aDgjbDYyhCfsJ9F4Bry',
            heart: 'heart',
            me: 'moohh91',
            meuser: 'UC72G0ATD'
        },
        life: {
            when: 60,
            what: {
                name: 'awaken',
                lettherebelight: () => {
                    console.log('im awake');
                    console.log('my heart is beating');

                    if (bunnybear.brain.dead) {
                        console.log('my brain is not working');
                    }
                    else {
                        console.log('my brain is functioning');
                    }

                    if (bunnybear.body.dead) {
                        console.log('my body is not working');
                    }
                    else {
                        console.log('my body is functioning');
                    }

                    console.log('what now?');
                }
            }
        }
    }
}
