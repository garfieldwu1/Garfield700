module.exports.config = {
  name: "anmquotes",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "tdunguwu",
  description: "random anime qoutes with character",
  commandCategory: "Random Text",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "axios":""}

};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];

const res = await axios.get(`https://animechan.vercel.app/api/random`);
var quote = res.data.quote
var character = res.data.character  
return api.sendMessage(`${quote} 
Character:${character}`, event.threadID, event.messageID)
  }