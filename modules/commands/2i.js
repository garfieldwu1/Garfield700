module.exports.config = {
  name: "i",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "i",
  usages: "[text]",
  commandCategory: "...",
  cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
  const res = await axios.get(`https://sanuw-api.herokuapp.com/docs/other/hilih?kata=${juswa}&apikey=sanuwa`);
var ok = res.data.result.output;
return api.sendMessage(`${ok}`, event.threadID, event.messageID)
}