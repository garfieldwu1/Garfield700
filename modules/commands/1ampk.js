const axios = require("axios");
module.exports.config = {
    name: "amapk",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "Eugene Aguilar",
    description: "Random amlink download",
    prefix: true,
    commandCategory: "Others",
    usages: "amapk",
    cooldowns: 7,
};
module.exports.run = async function({ api, event, args}) {
  var { threadID, messageID } = event;
  try {
    const res = await axios(`https://alightmotionlink-api.Diciper09.repl.co/alightmotionapk`);
    api.sendMessage(`『 AlightMotion Apk』:\n\n➦ ${res.data.alight}`, threadID, messageID);
  } catch (error) {
    api.sendMessage(error, threadID, messageID);
  }
}