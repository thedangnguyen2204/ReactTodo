var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp ', now.unix());


var timestamp = 1504167824;
var currentMoment = moment.unix(timestamp);
console.log('currentMoment is ', currentMoment.format("dddd, MMMM Do YYYY, h:mm:ss a"));
