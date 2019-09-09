let twilio = require('twilio');

let config = require('./config');

let client = twilio(config.accountSid, config.authToken);

let messages = [
  'i love you',
  'i love you sooo much',
];

let rnd = Math.ceil(Math.random() * messages.length) - 1;

client.messages
  .create({
    body: messages[rnd],
    from: config.from,
    to: config.to,
  })
  .then(message => console.log(message.sid));
