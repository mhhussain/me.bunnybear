let _ = require('lodash');

let config = {
  slack: {
    token: _.defaultTo(process.env.SLACKBOT_TOKEN, ''),
    wptoken: _.defaultTo(process.env.SLACKBOT_WPTOKEN, '')
  },
  myUsername: ''
};

module.exports = config;
