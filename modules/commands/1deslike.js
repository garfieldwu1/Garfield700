const fs = require("fs");
module.exports.config = {
  name: "dislike",
    version: "1.0.0",
  hasPermssion: 0,
  credits: "John Arida", 
  description: "no prefix",
  commandCategory: "No command marks needed",
  usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Dislike")==0 || (event.body.indexOf("dislike")==0)) {
    var msg = {
        body: "just shut up",
        attachment: fs.createReadStream(__dirname + `/noprefix/.`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👎", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

       }