const fs = require("fs");
module.exports.config = {
  name: "goodmorning",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "Secret", 
  description: "no prefix",
  commandCategory: "No command marks needed",
  usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("ano ba")==0 || (event.body.indexOf("Ano ba")==0 || (event.body.indexOf("ano ba talaga tayo")==0 || (event.body.indexOf("Ano ba talaga tayo")==0)))) {
    var msg = {
        body: "Ano ba talaga tayo?",
        attachment: fs.createReadStream(__dirname + `/noprefix/anobatayo.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    }
}	module.exports.run = function({ api, event, client, __GLOBAL }) {

}