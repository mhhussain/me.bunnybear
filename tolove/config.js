let _ = require('lodash');

let config = {
  accountSid: _.defaultTo(process.env.TWILIO_ACC_SID, ''),
  authToken: _.defaultTo(process.env.TWILIO_AUTH_TOKEN, ''),
  from: _.defaultTo(process.env.FROM_NUMBER, ''),
  to: _.defaultTo(process.env.TO_NUMBER, '')
};

module.exports = config;
