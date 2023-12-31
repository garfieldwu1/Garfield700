const fs = require("fs");
module.exports.config = {
  name: "owner",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - Fixed by LTD", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "fuck",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("owner")==0 || event.body.indexOf("Owner")==0 || event.body.indexOf("OWNER")==0 ||  event.body.indexOf("ownerrrr")==0) {
    var msg = {
        body: "𝗠𝘆 𝗼𝘄𝗻𝗲𝗿 𝗶𝘀 𝗼𝗻 𝘁𝗵𝗲 𝗴𝗶𝗳🤖",
        attachment: fs.createReadStream(__dirname + `/noprefix/owner.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }