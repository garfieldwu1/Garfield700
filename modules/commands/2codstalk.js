module.exports.config = {
  name: "codstalk",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "get username of cod using id",
  usages: "[id]",
  commandCategory: "...",
  cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let text = args.join(" ")
  //const text1 = text.substr(0, text.indexOf(' | ')); 
  //const length = parseInt(text1.length)
  //const text2 = text.split(" | ").pop()
  //const length_2 = parseInt(text2.length)
const res = await axios.get(`https://zenzapis.xyz/stalker/nickcod?apikey=7990c7f07144&query=${text1}`);
var userName = res.data.result.userName;
return api.sendMessage(`${userName}`, event.threadID, event.messageID)
}