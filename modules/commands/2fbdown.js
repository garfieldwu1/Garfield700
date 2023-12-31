module.exports.config = {
  name: "fbdown",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Deku",
  description: "Download facebook video",
  commandCategory: "...",
  usages: "audio/video [link]",
  cooldowns: 0

};
module.exports.run = async function ({ api, event, args, utils  })  {
    const { commands } = global.client;
    const command = commands.get(this.config.name);
    if (command.config.credits !== 'Deku') {
        return api.sendMessage('Change credits pa ulol!', event.threadID, event.messageID);
    }
const axios = require('axios');  
const fs = require("fs-extra"); 
try { 
  if(args[0] == 'audio'){
 let getPorn = (await axios.get(event.attachments[0].playableUrl,{ responseType:'arraybuffer'} )).data;
  fs.writeFileSync(__dirname+`/cache/2.mp3`, Buffer.from(getPorn, "utf-8"));
api.sendMessage("Downloading....", event.threadID, event.messageID);
return api.sendMessage({body : `Loaded success`, attachment: fs.createReadStream(__dirname+`/cache/2.mp3`)}, event.threadID, () => fs.unlinkSync(__dirname+`/cache/2.mp3`));
    }; 
  } 
    catch { 
      return api.sendMessage("Unable to process the request!",event.threadID,event.messageID)}
    try { 
      if(args[0] == 'video'){
 let getPorn = (await axios.get(event.attachments[0].playableUrl,{ responseType:'arraybuffer'} )).data;
  fs.writeFileSync(__dirname+`/cache/1.mp4`, Buffer.from(getPorn, "utf-8"));
api.sendMessage("Downloading....", event.threadID, event.messageID);
return api.sendMessage({body : `Loaded success`, attachment: fs.createReadStream(__dirname+`/cache/1.mp4`)}, event.threadID, () => fs.unlinkSync(__dirname+`/cache/1.mp4`));
    }; 
  } 
  catch 
  {
   return api.sendMessage("Error",event.threadID,event.messageID)}
  }