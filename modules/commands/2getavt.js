module.exports.config = {
  name: "getavt2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "get profile picture",
  commandCategory: "system",
  cooldowns: 0
};

module.exports.run = async function({ api, event, args }) {
const request = require("request");
const fs = require("fs")
const axios = require("axios")
const prefix = global.config.PREFIX
if (!args[0]) return api.sendMessage(`Wrong format\nUse: ${prefix}fbavt id [uid] »get photo by uid«\n\n${prefix}fbavt link [facebook url] »get uid using fb link«\n\n${prefix}fbavt user »leave it blank to get your own avatar«\n\n${prefix}fbavt user [@mentions] »get the avatar of the person mentioned«`,event.threadID,event.messageID);
else if (args[0] == "id") {
  try {
  var id = args[1];
  if (!id) return api.sendMessage(`Please enter the uid to get avatar.`,event.threadID,event.messageID);
   var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
   return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=1449557605494892|aaf0a865c8bafc314ced5b7f18f3caa6`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
 }
 catch (e) {
  api.sendMessage(`Can't get user picture.`,event.threadID,event.messageID);
 }
}
else if (args[0] == "link") {
var link = args[1];
if (!link) return api.sendMessage(`Please enter the link to get avatar.`,event.threadID,event.messageID);
var tool = require("fb-tools");
try {
var id = await tool.findUid(args[1] || event.messageReply.body);
var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=1449557605494892|aaf0a865c8bafc314ced5b7f18f3caa6`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
}
catch(e){
    api.sendMessage("User does not exist.",event.threadID,event.messageID)
}
}
else if(args[0] == "user") {
  if (!args[1]) {
    var id = event.senderID;
    var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
    return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=1449557605494892|aaf0a865c8bafc314ced5b7f18f3caa6`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
  }
  else if (args.join().indexOf('@') !== -1) {
    var mentions = Object.keys(event.mentions)
    var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
    return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=720&width=720&access_token=1449557605494892|aaf0a865c8bafc314ced5b7f18f3caa6`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
  }
  else {
    api.sendMessage(`Wrong order. Type ${global.config.PRRFIX}${tis.config.name} to know how to use this fucking command.`,event.threadID,event.messageID);
  }
}
else {
  api.sendMessage(`Wrong order. Type ${global.config.PRRFIX}${tis.config.name} to know how to use this fucking command.`,event.threadID,event.messageID);
}
}
