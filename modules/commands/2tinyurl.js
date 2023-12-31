module.exports.config = {
  name: "tinyurl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "shortlink",
  usages: "[url]",
  commandCategory: "...",
  cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://leyscoders-api.herokuapp.com/api/tinyurl?url=${juswa}&apikey=MIMINGANZ`);
var plaintext = res.data.result;
return api.sendMessage(`${plaintext}`, event.threadID, event.messageID)
}