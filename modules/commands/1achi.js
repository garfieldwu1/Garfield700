module.exports.config = {
  name: "achivements",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PhanHuy",
  description: "Create a minecraft achievement banner reply version",
  commandCategory: "image",
  cooldowns: 0,
  dependencies: {
      "fs-extra": "",
      "request": "",
      "axios": ""
  }
};
module.exports.handleReply = async ({ api, event, handleReply }) => {
const { threadID, messageID, senderID, body } = event;
if (handleReply.content.id != senderID) return;
const input = body.trim();
const sendC = (msg, step, content) => api.sendMessage(msg, threadID, (err, info) => {
  global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
  api.unsendMessage(handleReply.messageID);
  global.client.handleReply.push({
    step: step,
    name: this.config.name,
    messageID: info.messageID,
    content: content
  })
}, messageID);
const send = async (msg) => api.sendMessage(msg, threadID, messageID);

let content = handleReply.content;
switch (handleReply.step) {
  case 1:
    content.block = input;
    sendC("Reply to this message to enter the title", 2, content);
    break;
  case 2:
    content.title = input;
    sendC("Reply to this message to enter text", 3, content);
    break;

  case 3:
    content.text = input;
    const axios = require("axios");
    const fs = require("fs");
    send("Initializing image program !");
    global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
    api.unsendMessage(handleReply.messageID);

    let c = content;
    let res = await axios.get(encodeURI(`https://minecraft-api.com/api/achivements/${c.block}/${c.title}/${c.text}`), { responseType: "arraybuffer" })
      .catch(e => { return send("An unknown error") });
    if (res.status != 200) return send("Something went wrong, please try again later!");
    let path = __dirname + `/cache/achivements__${senderID}.png`;
    fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
    send({
      body: "Your picture",
      attachment: fs.createReadStream(path)
    }).then(fs.unlinkSync(path));
    break;
  default:
    break;
}
}

module.exports.run = ({ api, event, args }) => {
const { threadID, messageID, senderID } = event;
return api.sendMessage("Reply to this message to enter the block", event.threadID, (err,info) => {
  global.client.handleReply.push({
    step: 1,
    name: this.config.name,
    messageID: info.messageID,
    content: {
      id: senderID,
      block: "",
      title: "",
      text: ""
    }
  })
}, event.messageID);
}