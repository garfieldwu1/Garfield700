module.exports.config = {
  name: "avtwibu3",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hanaku UwuU/fix and modified by Joshua Sy",//fix and modified by Joshua Sy
  description: "banner",
  commandCategory: "image banner",
  usages: "",
  cooldowns: 5
};
module.exports.run = async function({ api, args, event, permssion }) {
  const axios = require('axios')
  const lengthchar = (await axios.get('https://run.mocky.io/v3/0dcc2ccb-b5bd-45e7-ab57-5dbf9db17864')).data
  if(args[0] == "find" || args[0] == "tìm"){
    const t = (await axios.get(`${lengthchar[args[1]].imgAnime}`, {
        responseType: "stream"
      })).data;
    var msg = ({
      body: `ID NHÂN VẬT ${args[1]}, MÀU MẶC ĐỊNH ${lengthchar[args[1]].colorBg}`,
      attachment: t
    })
    return api.sendMessage(msg, event.threadID, event.messageID)
  }
  else if(args[0] == "list"){
    const alime = (await axios.get('https://run.mocky.io/v3/0dcc2ccb-b5bd-45e7-ab57-5dbf9db17864')).data
    var count = alime.listAnime.length;
      var data = alime.listAnime
      var page = 1;
      page = parseInt(args[1]) || 1;
      page < -1 ? page = 1 : "";
      var limit = 20;
      var numPage = Math.ceil(count/limit);
      var msg = ``;
      for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
         if(i >= count) break;
        msg += `[ ${i+1} ] - ${data[i].ID} | ${data[i].name}\n`;
      }
      msg += `Page (${page}/${numPage})\nUse ${global.config.PREFIX}${this.config.name} list <number of pages>`;
      return api.sendMessage(msg, event.threadID,event.messageID);
  } else {
  const fs =  require('fs-extra')
   if (!fs.existsSync(__dirname +
        `/tad/UTM-Avo.ttf`)) {
        let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=1d8Tw8tuAxzQGxty6YG2BVZPLPdVu5tmA&export=download`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/tad/UTM-Avo.ttf`, Buffer.from(getfont, "utf-8"));
      }
         if (!fs.existsSync(__dirname +
      `/tad/phenomicon.ttf`)) {
      let getfont2 = (await axios.get(`https://drive.google.com/u/0/uc?id=1Smgc_tXWQrCDursNm5G5fMMCADVZOGnY&export=download`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/phenomicon.ttf`, Buffer.from(getfont2, "utf-8"));
    };
  if (!fs.existsSync(__dirname +
      `/tad/CaviarDreams.ttf`)) {
      let getfont3 = (await axios.get(`https://drive.google.com/u/0/uc?id=1Mbiry_unaQPhA2W6aUkVB5lUFTezM3dp&export=download`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/CaviarDreams.ttf`, Buffer.from(getfont3, "utf-8"));
    };
   return api.sendMessage("Reply This Message To Select Character", event.threadID, (err, info) => {
    return global.client.handleReply.push({
      step: 1,
      name: this.config.name,
      author: event.senderID,
      messageID: info.messageID
    });
  }, event.messageID);
}
}
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
  const axios = require("axios");
  const lengthchar = (await axios.get('https://run.mocky.io/v3/0dcc2ccb-b5bd-45e7-ab57-5dbf9db17864')).data
  const fs = require("fs-extra");
  const request = require("request");
  if (event.senderID != handleReply.author) return api.sendMessage('CúC', event.threaID);
  const { loadImage, createCanvas, registerFont } = require("canvas");
  const path = require('path');
  const Canvas = require('canvas');
   let pathImg = __dirname + `/tad/avatar_1.png`;
  let pathAva = __dirname + `/tad/avatar_2.png`;
  let pathLine = __dirname + `/tad/avatar_3.png`;
  if(handleReply.step == 1){
     api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`You have chosen the character with the serial number ${event.body}, reply to this message to enter the main name`, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Uncertain error`, event.threadID)
      return global.client.handleReply.push({
        step: 2,
        name: this.config.name,
        author: event.senderID,
        id: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  }
   else if(handleReply.step == 2){
    return api.sendMessage(`You entered the name as ${event.body}, reply this message to enter the signature (Note: do not hide to avoid font errors )`, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Uncertain error`, event.threadID)
      return global.client.handleReply.push({
        step: 3,
        name: this.config.name,
        author: event.senderID,
        id: handleReply.id,
        tenchinh: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  }
      else if(handleReply.step == 3){
     api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`Your signature is ${event.body}, reply continue this message to enter color ( reply no if you use basic color )`, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Uncertain error`, event.threadID)
      return global.client.handleReply.push({
        step: 4,
        name: this.config.name,
        author: event.senderID,
        id: handleReply.id,
        tenchinh: handleReply.tenchinh,
        chuky: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  } else if(handleReply.step == 4){
    const x = handleReply.id;
    const y = handleReply.tenchinh;
    const z = handleReply.chuky;
    const color = event.body;
    if(color == "no" || color == "No" || !color){
        var color_ = lengthchar[x].colorBg
    } else {
      var color_ = color
    }
    let avtAnime = (
    await axios.get(encodeURI(`${lengthchar[x].imgAnime}`), { responseType: "arraybuffer" })).data;
  let line = (await axios.get(encodeURI(
    `https://i.imgur.com/4BQHmeI.png`),
    { responseType: "arraybuffer" })).data;
  let background = (await axios.get(encodeURI(`https://i.imgur.com/HUblFwC.png`), { responseType: "arraybuffer" })).data;
  fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
  fs.writeFileSync(pathLine, Buffer.from(line, "utf-8"));
  fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
  if (!fs.existsSync(__dirname +
    `/tad/GMV_DIN_Pro.ttf`)) {
    let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=1R9lK81iJMd_V2JBTWf0aywIn1TW_WuWR&export=download`, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(__dirname + `/tad/GMV_DIN_Pro.ttf`, Buffer.from(getfont, "utf-8"));
  };
  if (!fs.existsSync(__dirname + `/tad/Asem-Kandis-PERSONAL-USE.ttf`)) {
    let getfont2 = (await axios.get(`https://drive.google.com/u/0/uc?id=1BjYCMyZO4CisB9L5azYvqwI074xundgQ&export=download`, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(__dirname + `/tad/Asem-Kandis-PERSONAL-USE.ttf`, Buffer.from(getfont2, "utf-8"));
  };
  let a = await loadImage(pathImg);
  let ab = await loadImage(pathAva);
  let az = await loadImage(pathLine);
  let canvas = createCanvas(a.width, a.height);
  let ctx = canvas.getContext("2d");
  let canvas2 = createCanvas(a.width, a.height);
  let ctx1 = canvas2.getContext("2d");
  ctx1.fillStyle = "#ffff"
  ctx1.fillRect(0, 0, 1500, 1500)
  ctx1.save();
  ctx1.globalAlpha = "0.1";
  ctx1.drawImage(ab, 0, 0, 1500, 1500);
  ctx1.restore();
  ctx1.save();
  ctx1.fillStyle = "#000"
  ctx1.globalCompositeOperation = "color";
  ctx1.fillRect(0, 0, 1500, 1500)
  ctx1.restore();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color_;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "destination-in";
  ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "destination-over";
  ctx.save();
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
  ctx.globalCompositeOperation = "source-over";
  ctx.drawImage(az, 0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.textAlign = "center";
  Canvas.registerFont(__dirname + `/tad/GMV_DIN_Pro.ttf`, {
    family: "GMV DIN Pro Cond"
  });
  ctx.fillStyle = "rgba(255, 255, 255,0.8)";
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 2;
  ctx.font = "200px GMV DIN Pro Cond";
  ctx.strokeText(y, canvas.width / 2, 650);
  ctx.fillText(y, canvas.width / 2, 825);
  ctx.strokeText(y, canvas.width / 2, 1000);
  ctx.restore();
  ctx.save();
  ctx.globalCompositeOperation = "multiply";
  ctx.drawImage(canvas2, -canvas.width / 4, -canvas.width / 4, canvas.width * 1.5, canvas.height * 1.5);
  ctx.restore();
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0, 0.3)";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.drawImage(ab, 0, 0, canvas.width, canvas.height);
  ctx.restore();
  ctx.save()
  Canvas.registerFont(__dirname + `/tad/Asem-Kandis-PERSONAL-USE.ttf`, {
    family: "Asem Kandis"
  });
  ctx.textAlign = "center";
  ctx.fillStyle = color_;
  ctx.font = "120px Asem Kandis"
  ctx.fillText(z, canvas.width / 2, 200)
  ctx.save();
  ctx.beginPath();
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage({
    body: "Here's Your Photo",
    attachment: fs.createReadStream(pathImg)
  },
    event.threadID,
    () => fs.unlinkSync(pathImg),
    fs.unlinkSync(pathAva),
    fs.unlinkSync(pathLine),
    event.messageID
  );
  }
  }