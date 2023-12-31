module.exports.config = {
  name: "yaytext",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "yaytext",
  commandCategory: "...",
  cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://manhict.tech/other/yaytext?text=${juswa}`);
var msgtext = res.data.msgtext;
return api.sendMessage(`${msgtext}`, event.threadID, event.messageID)
  }