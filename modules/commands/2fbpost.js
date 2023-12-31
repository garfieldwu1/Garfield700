module.exports.config = {
  name: "fbpost",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Sake",//don't change the credits bitch
  description: "fbpost",
  commandCategory: "Edit-img",
  usages: "fbpost [text]",
  cooldowns: 10,
dependencies: {"canvas": "",
 "axios": ""}
};
/*----FOR CIRCLE AVATAR----*/
module.exports.circle = async (image) => {
    const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
/*-------END HERE------*/
module.exports.wrapText = (ctx, text, maxWidth) => {
  return new Promise(resolve => {
    if (ctx.measureText(text).width < maxWidth) return resolve([text]);
    if (ctx.measureText('W').width > maxWidth) return resolve(null);
    const words = text.split(' ');
    const lines = [];
    let line = '';
    while (words.length > 0) {
      let split = false;
      while (ctx.measureText(words[0]).width >= maxWidth) {
        const temp = words[0];
        words[0] = temp.slice(0, -1);
        if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
        else {
          split = true;
          words.splice(1, 0, temp.slice(-1));
        }
      }
      if (ctx.measureText(`${line}${words[0]}`).width < maxWidth) line += `${words.shift()} `;
      else {
        lines.push(line.trim());
        line = '';
      }
      if (words.length === 0) lines.push(line.trim());
    }
    return resolve(lines);
  });
} 

module.exports.run = async function({ api, event, args, client, __GLOBAL, Users }) {
  let {threadID, senderID, messageID} = event;
 let name = (await api.getUserInfo(senderID))[senderID].name
  //const res = await api.getUserInfoV2(senderID); 
  const { loadImage, createCanvas } = require("canvas");
  const fs = require("fs-extra");
  const axios = require("axios")
  let avatar = __dirname + '/cache/avt.png';
  let pathImg = __dirname + '/cache/porn.png';
  var text = args.join(" ");
  if (!text) return api.sendMessage(`Wrong format\nUse: ${global.config.PREFIX}${this.config.name} text`, threadID, messageID);
  let getAvatar = (await axios.get(`https://graph.facebook.com/${senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  let getPorn = (await axios.get(`https://i.imgur.com/VrcriZF.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatar, Buffer.from(getAvatar, 'utf-8'));
oms = await this.circle(avatar);
  fs.writeFileSync(pathImg, Buffer.from(getPorn, 'utf-8'));
  let image = await loadImage(oms);
  let baseImage = await loadImage(pathImg);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 17, 17, 104, 104);
  ctx.font = "696 32px Sans-serif";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "start";
  ctx.fillText(name, 130, 55);
  /*ctx.font = "400 16px Arial";
  ctx.fillStyle = "#BBC0C0";
  ctx.textAlign = "start";
  ctx.fillText(`@${name}`, 153, 99);*/
  ctx.font = "400 45px Arial";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "start";
  let fontSize = 250;
  while (ctx.measureText(text).width > 2600) {
    fontSize--;
    ctx.font = `500 ${fontSize}px Arial`;
  }
  const lines = await this.wrapText(ctx, text, 650);
  ctx.fillText(lines.join('\n'), 17, 180);
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(avatar);
  return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);        
                        }