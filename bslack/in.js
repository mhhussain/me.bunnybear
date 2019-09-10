let bunnyslack = require('./bunnyslack');

let config = require('./config');

let bot = {};
let health = {
  name: 'bslack',
  status: 'startup',
  msg: 'startup'
};

//*******************************************************************
// startup functions
//*******************************************************************
let startup = () => {

  bot = new bunnyslack({
    token: config.slack.token,
    wptoken: config.slack.wptoken,
    name: 'bunnybear'
  };

  bot.on('start', () => {
    health.status = 'listening',
    health.msg = 'slack is listening'
  });

  incomingmessages(bot);

}


//*******************************************************************
// incoming slack message consumer
//*******************************************************************
let incomingmessages = (bot) => {

  bot.on('message', (message) => {
    if (message.user != 'UC72G0ATD') {
      return;
    }

    if (message.type != 'message') {
      return;
    }

    console.log(message.text);

  };

};

//*******************************************************************
// send slack message consumer
//*******************************************************************



console.log('world');
