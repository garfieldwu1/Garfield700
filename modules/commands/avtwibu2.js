module.exports.config = {
  name: "avtwibu2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JoshuaSy",
  description: "create avt wibu2",
  commandCategory: "Create a banner",
  usages: "[ID] [TEXT] [TEXT] [TEXT]",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
  const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  if(!args[0]) {
          let getAvatar = (await axios.get(`https://i.imgur.com/jaxXQzb.png`, { responseType: "arraybuffer" } )).data; 
          fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(getAvatar, "utf-8") );
          api.sendMessage({ body: `Please enter in the format:\n${prefix}${this.config.name} ID + Name + Text + Text\nExample:\n${prefix}${this.config.name} 5 JoshuaSy joshuadev101 Josh\nIf you don't really get it, contact the admin\ nFacebook: https://www.facebook.com/joshuadev101`,
                attachment: fs.createReadStream(__dirname + `/cache/avt.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avt.png`), event.messageID);
  }
  else{
  const id = args[0]; 
  if(!args[1]) {


          api.sendMessage(`Please enter in the format:\n${prefix}${this.config.name} ID + Name + Text + Text`, event.threadID);
  } 
  else {     
  const name = args[1]; 
  if(!args[2]) {


          api.sendMessage(`Please enter in the format:\n${prefix}${this.config.name} ID + Name + Text + Text`, event.threadID);
  } 
  else {    
  const juswa = args[2]; 
  const bgtext = args[3];


          let getAvatar = (await axios.get(`https://manhict.tech/api/avtWibu2?id=${id}&tenchinh=${name}&fb=${juswa}&tenphu=${bgtext}&apikey=bKfbFLZX`, { responseType: "arraybuffer" } )).data; 
          fs.writeFileSync( __dirname + "/cache/avttt.png", Buffer.from(getAvatar, "utf-8") );
          api.sendMessage({ body: `Your Avatar Wibu is here`,
                attachment: fs.createReadStream(__dirname + `/cache/avttt.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avttt.png`), event.messageID);
}
}
}
}
//https://manhict.tech/tad?id=4&tenchinh=Joshua%20Sy&fb=joshuadev101&tenphu=Joshua&apikey=KeyTest