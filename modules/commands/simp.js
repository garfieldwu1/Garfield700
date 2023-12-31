module.exports.config = {
  name: "simp",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "create simp banner",
  commandCategory: "love",
  usages: "name of your crush/love",
  cooldowns: 3,
  dependencies: {
    canvas: "",
    axios: "",
    "fs-extra": "",
  },
};
module.exports.run = async function ({ api, event, args, Users }) {
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = require("fs-extra");
  const axios = require("axios");
  let pathImg = __dirname + `/cache/${event.threadID}_${event.senderID}.png`;
  //let pathAva = __dirname + `/cache/a${event.senderID}.png`;
  let text = args.join(" ");
  /*if (!text) return api.sendMessage(`Wrong fomat\nUse: ${global.config.PREFIX}${this.config.name} name of your crush`, event.threadID, event.messageID);*/
const loz = await api.getThreadInfo(event.threadID);
        var oms = loz.participantIDs;
        var id = oms[Math.floor(Math.random() * oms.length)];
        const res1 = await api.getUserInfoV2(id);
        var name = text || res1.name;
  let uid = event.senderID;
  const res = await api.getUserInfoV2(uid);
  let getWanted = (
    await axios.get(`https://api.harold0810.repl.co/sus/simpcard?uid=${uid}&simp=${res.name}&simpsfor=${name}`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getWanted, "utf-8"));
  let baseImage = await loadImage(pathImg);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};
  