module.exports.config = {
  name: "jeje",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "jejemon",
  usages: "[tExT]",
  commandCategory: "...",
  cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://api.popcat.xyz/mock?text=${juswa}`);
var plaintext = res.data.text;
return api.sendMessage(`${plaintext}`, event.threadID, event.messageID)
}