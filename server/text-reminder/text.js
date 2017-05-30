/*jshint esversion: 6 */
var twilioAccount = require('../protection/twilioAccount.json');
var accountSid = twilioAccount.accountSid;
var authToken = twilioAccount.authToken;

let what = 'Devleague full time';
let where = '2800 Woodlawn dr';
let when = 'Tomorrow';

var client = require('twilio')(accountSid, authToken);

// var numbers = twilioAccount.numbers;
// console.log(numbers);

const groupText = (num, message) => {
  console.log(num);

  client.messages.create({
    messagingServiceSid: twilioAccount.messaging,
    to:  num,
    from: '+16152191888',

    body: message

  }, function(err, message) {
    console.log(message);
  });
};

const getNumber = (params, message)  => {
 for(let i = 0; i < params.length; i++) {
    console.log(params[i].dataValues.number);
    groupText(params[i].dataValues.number, message);
  }
};


module.exports = {
  groupText,
  getNumber
};