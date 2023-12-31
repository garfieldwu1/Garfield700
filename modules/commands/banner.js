const loz = ["https://imgur.com/aE2idak.png","https://imgur.com/h4xef15.png","https://imgur.com/NtKGQY7.png","https://imgur.com/HxKGOLo.png","https://imgur.com/ZTGzq7L.png","https://imgur.com/3TaZMEt.png","https://imgur.com/zwPpOvc.png","https://imgur.com/4Nq1Yza.png","https://imgur.com/1xFXJzn.jpg","https://imgur.com/ey8udtl.png"]
module.exports.config = {
  name: "banner",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hanaku UwuU",
  description: "banner",
  commandCategory: "game",
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
      body: `CHARACTER ID ${args[1]}, DEFAULT COLOR ${lengthchar[args[1]].colorBg}`,
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
      msg += `Page (${page}/${numPage})\nUse ${global.config.PREFIX}${this.config.name} alist <page number>`;
      return api.sendMessage(msg, event.threadID,event.messageID);
  } else {
  const fs =  require('fs-extra')
   if (!fs.existsSync(__dirname +
        `/tad/UTM-Avo.ttf`)) {
        let getfont = (await axios.get(`https://github.com/hanakuUwU/font/blob/main/UTM%20Avo.ttf?raw=true`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/tad/UTM-Avo.ttf`, Buffer.from(getfont, "utf-8"));
      }
         if (!fs.existsSync(__dirname +
      `/tad/phenomicon.ttf`)) {
      let getfont2 = (await axios.get(`https://github.com/hanakuUwU/font/raw/main/phenomicon.ttf`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/phenomicon.ttf`, Buffer.from(getfont2, "utf-8"));
    };
  if (!fs.existsSync(__dirname +
      `/tad/CaviarDreams.ttf`)) {
      let getfont3 = (await axios.get(`https://github.com/hanakuUwU/font/raw/main/CaviarDreams.ttf`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/CaviarDreams.ttf`, Buffer.from(getfont3, "utf-8"));
    };
   return api.sendMessage("Reply This Message To Select Character id", event.threadID, (err, info) => {
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
  if(handleReply.step == 1){
     api.unsendMessage(handleReply.messageID);
    const o = [];
    for(let i = 0; i < loz.length; i++){
    const t = (await axios.get(`${loz[i]}`, {
        responseType: "stream"
      })).data;
    o.push(t)
  }
  const msg = ({
    body: `You have chosen the character with the serial number ${event.body}, reply to this message to choose photo color frame`,
     attachment: o
  })
    return api.sendMessage(msg, event.threadID, (err, info) => {
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
     api.unsendMessage(handleReply.messageID);
    const z = (await axios.get(`${loz[event.body - 1]}`, {
        responseType: "stream"
      })).data;
  const msg = ({
    body: `You have selected frame number${event.body}, this is for the main name`,
     attachment: z
  })
    return api.sendMessage(msg, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Uncertain error`, event.threadID)
      return global.client.handleReply.push({
        step: 3,
        name: this.config.name,
        author: event.senderID,
        id: handleReply.id,
        khung: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  }
    else if(handleReply.step == 3){
     api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`You choose your main name is ${event.body}, reply continue this message to enter sub name`, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Uncertain error`, event.threadID)
      return global.client.handleReply.push({
        step: 4,
        name: this.config.name,
        author: event.senderID,
        id: handleReply.id,
        khung: handleReply.khung,
        tenchinh: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  }
  else if(handleReply.step == 4){
     api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`You choose your secondary name is ${event.body}, reply continue this message to enter username instagram`, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Uncertain error`, event.threadID)
      return global.client.handleReply.push({
        step: 5,
        name: this.config.name,
        author: event.senderID,
        id: handleReply.id,
        khung: handleReply.khung,
        tenchinh: handleReply.tenchinh,
        tenphu: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  }
    else if(handleReply.step == 5){
     api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`You entered your instagram username as ${event.body}, reply continue this message to enter username github`, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Uncertain error`, event.threadID)
      return global.client.handleReply.push({
        step: 6,
        name: this.config.name,
        author: event.senderID,
        id: handleReply.id,
        khung: handleReply.khung,
        tenchinh: handleReply.tenchinh,
        tenphu: handleReply.tenphu,
        inst: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  }
      else if(handleReply.step == 6){
     api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`You entered your github username as ${event.body}, reply continue this message to enter facebook username`, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Uncertain errorh`, event.threadID)
      return global.client.handleReply.push({
        step: 7,
        name: this.config.name,
        author: event.senderID,
        id: handleReply.id,
        khung: handleReply.khung,
        tenchinh: handleReply.tenchinh,
        tenphu: handleReply.tenphu,
        inst: handleReply.inst,
        github: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  }
  else if(handleReply.step == 7){
    api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`You entered your facebook username as ${event.body}, reply continue this message to enter the color you want please write no if you want to use the default color`, event.threadID, (err, info) => {
      if(err) return api.sendMessage(`Uncertain error`, event.threadID)
      return global.client.handleReply.push({
        step: 8,
        name: this.config.name,
        author: event.senderID,
        id: handleReply.id,
        khung: handleReply.khung,
        tenchinh: handleReply.tenchinh,
        tenphu: handleReply.tenphu,
        inst: handleReply.inst,
        github: handleReply.github,
        fb: event.body,
        messageID: info.messageID
      })
    },event.messageID)
  } else if(handleReply.step == 8){
    api.unsendMessage(handleReply.messageID);
    const tenchinh = handleReply.tenchinh;
    const id_ = handleReply.id;
    const subname = handleReply.tenphu;
    const khung = handleReply.khung;
    const inst = handleReply.inst;
    const github = handleReply.github;
    const fb = handleReply.fb;
    const color_ = event.body;
    if(id_ == "random" || id_ == "Random"){
      var id = Math.floor(Math.random() * 848)
    } else {
      var id = id_
    }
    if (color_ == "no" || color_ == "No") {
      var color = lengthchar[id - 1].colorBg;
    } else {
      var color = color_;
    }
     let background = (await axios.get(encodeURI(`${loz[khung - 1]}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
    let ava = (await axios.get(encodeURI(`${lengthchar[id - 1].imgAnime}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathAva, Buffer.from(ava, "utf-8"));
    let l1 = await loadImage(pathAva);
    let a = await loadImage(pathImg);
    let canvas = createCanvas(a.width, a.height);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(l1, -200, -200, 1200, 1200);
    ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
     registerFont(__dirname + `/tad/phenomicon.ttf`, {
      family: "phenomicon"
    });
    ctx.textAlign = "start";
    ctx.strokeStyle = color;
    ctx.filter = "brightness(90%) contrast(110%)";
    ctx.font = "130px phenomicon";
    ctx.fillStyle = color;
    ctx.fillText(tenchinh, 900, 340);
    ctx.beginPath();
  ////////////////////////////////////////
   registerFont(__dirname + `/tad/UTM-Avo.ttf`, {
      family: "UTM"
    });
    ctx.textAlign = "start";
    ctx.font = "70px UTM";
    ctx.fillStyle = "#000000";
    ctx.fillText(subname, 920, 440);
    ctx.restore();
    ctx.save();
registerFont(__dirname + `/tad/CaviarDreams.ttf`, {
      family: "time"
    });
    ctx.textAlign = "start";
    ctx.font = "45px time";
    ctx.fillText("@" + inst, 930, 540)
    ctx.fillText("@" + github, 930, 610)
    ctx.fillText("@" + fb, 930, 690)
    ctx.restore();
    ctx.save();
    ctx.beginPath();
      const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);

     return api.sendMessage({
     body: `ảnh của bạn đây`,
     attachment: fs.createReadStream(pathImg)
   },
     event.threadID,
     () => fs.unlinkSync(pathImg),
     fs.unlinkSync(pathAva),
     event.messageID
   );
  }
    }