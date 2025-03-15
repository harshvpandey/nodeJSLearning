var request = require("request");
require('dotenv').config();
var headers = {
  "X-CleverTap-Account-Id": "RK4-RWW-8R6Z",
  "X-CleverTap-Passcode": process.env.PASSCODE,
  "Content-Type": "application/json",
};

var dataString = '{"from": 20250313,"to": 20250313}';
var options = {
  url:"https://in1.dashboard.clevertap.com/RK4-RWW-8R6Z/campaigns",
  method: "GET",
  headers: headers,
  body: dataString,
};
function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
}
request(options, callback);
