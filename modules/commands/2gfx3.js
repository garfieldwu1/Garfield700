var dek = "Deku";
module.exports.config = {
  name: "gfx3",
  version: "1.0.1",
  hasPermssion: 0,
  credits: `${dek}`,
  description: "gfx banner",
  commandCategory: "banner",
  usages: "text",
  cooldowns: 2,
};
module.exports.run = async function ({ api, event, args, Users }) {
  let { senderID, threadID, messageID } = event;
  const request = require('request');
  const fs = require("fs-extra");
  const axios = require("axios");
  let pathImg = __dirname + `/cache/${event.threadID}_${event.senderID}.png`;
  let text = args.join(" ")
  if (!text) return api.sendMessage(`Wrong fomat\nUse: ${global.config.PREFIX}${this.config.name} text`, event.threadID, event.messageID);
  const text1 = text.substr(0, text.indexOf(' | ')); 
  const length = parseInt(text1.length)
  const text2 = text.split(" | ").pop()
  const length_2 = parseInt(text2.length)
  let getWanted = (
    await axios.get(`https://api.reikomods.repl.co/canvas/gfx3?text1=${text1}&text2=${text2}`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getWanted, "utf-8"));
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};