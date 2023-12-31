module.exports.config = {
  name: "aco",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "talk to aco bot",
  commandCategory: "Other",
    cooldowns: 2,
};
module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://api-toxic-devil.herokuapp.com/api/ai/aco?id=AnyTextAsIDWhichMakesBotToRememberYou&text=${juswa}&lang=en`);
var re = res.data.response;
return api.sendMessage(`${re}`, event.threadID, event.messageID)
  }