module.exports.config = {
  name: "binaryde",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "binary codes to text",
  commandCategory: "code",
  cooldowns: 1
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://api.popcat.xyz/decode?binary=${juswa}`);
var a = res.data.text;
return api.sendMessage(`${a}`, event.threadID, event.messageID)
}