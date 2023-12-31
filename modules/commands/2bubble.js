module.exports.config = {
  name: "bubble",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "text to bubble font",
  usages: "[text]",
  commandCategory: "...",
  cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://hadi-api.herokuapp.com/api/font?teks=${juswa}`);
var morse = res.data.result;
return api.sendMessage(`${morse}`, event.threadID, event.messageID)
}