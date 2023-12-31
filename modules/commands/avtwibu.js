module.exports.config = {
  name: "avtwibu",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "create avtwibu banner",
  commandCategory: "image",
  usages: "id | text | text",
  cooldowns: 0,
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
  try {
      let axios = require('axios');
      let fs = require("fs-extra");
      let request = require("request");
      let {threadID, senderID, messageID} = event;
let text = args.join(" ")
if (!text) return api.sendMessage('Please enter the correct format [text1 | text2 | text3]!', event.threadID, event.messageID);
const length_0 = parseInt(text.length)
const text1 = text.substr(0, text.indexOf(' | ')); 
if (!text1) return api.sendMessage('Please enter the correct format [text1 | text2 | text3]!', event.threadID, event.messageID);
const length = parseInt(text1.length)
const text3 = text.split(" | ").pop()
if (!text3) return api.sendMessage('Please enter the correct format [text1 | text2 | text3]!', event.threadID, event.messageID);
const length_3 = parseInt(text3.length)
const text2 = text.slice(length+2, length_0-length_3-2)
if (!text2) return api.sendMessage('Please enter the correct format [text1 | text2 | text3]!', event.threadID, event.messageID);
let callback = function() {
          return api.sendMessage({
              body:`Your avtwibu is here`,
              attachment: fs.createReadStream(__dirname + `/cache/image.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/image.png`), event.messageID);
      };
  return request(encodeURI(`https://source-api.tuanvudev2.repl.co/taoanhdep/avatarwibu?id=${text1}&chu_nen=${text2}&chu_ky=${text3}`)).pipe(fs.createWriteStream(__dirname + `/cache/image.png`)).on("close", callback);
  } catch (err) {
      console.log(err)
      return api.sendMessage(`Error`, event.threadID)
  }
    }