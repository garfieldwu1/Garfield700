module.exports.config = {
  name: "pul",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "pickuplines",
  commandCategory: "...",
  cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const res = await axios.get(`https://api.popcat.xyz/pickuplines`);
var morse = res.data.pickupline;
return api.sendMessage(`${morse}`, event.threadID, event.messageID)
}