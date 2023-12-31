module.exports.config = {
  name: "ip",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "get your current ip address",
  commandCategory: "info",
  cooldowns: 1
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
  const res = await axios.get(`https://api.ipify.org/?format=json`);
  var ip = res.data.ip;
  return api.sendMessage(`${ip}`, event.threadID, event.messageID)
}