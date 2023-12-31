module.exports.config = {
  name: "fbget2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Zera",
  description: "Download video or record from fb",
commandCategory: "Utilities",
usages: "fbget audio/video [link]",
cooldowns: 0
};
module.exports.run = async function ({api,event,args})  {
const axios = global.nodemodule['axios'];  
const fs = global.nodemodule["fs-extra"];
try { 
if(args[0] == 'audio'){
      api.sendMessage(`Processing request!!`, event.threadID, (err, info) =>
  setTimeout(() => {
      api.unsendMessage(info.messageID) } , 100),event.messageID);
      const path = __dirname+`/cache/2.mp3`;
let getPorn = (await axios.get(event.attachments[0].playableUrl,{ responseType:'arraybuffer'} )).data;
fs.writeFileSync(path, Buffer.from(getPorn, "utf-8"));
return api.sendMessage({body : `Here is your request 🎀`, 
  attachment: fs.createReadStream(path)}, event.threadID, () => fs.unlinkSync(path),event.messageID);
  }; 
}catch {return api.sendMessage(`Unable to process the request`,event.threadID,event.messageID)}
  try { 
    if(args[0] == 'video'){
          api.sendMessage(`Processing request!!!`, event.threadID, (err, info) =>
  setTimeout(() => {
      api.unsendMessage(info.messageID) } , 100),event.messageID);
          const path1 = __dirname+`/cache/1.mp4`;
let getPorn = (await axios.get(event.attachments[0].playableUrl,{ responseType:'arraybuffer'} )).data;
fs.writeFileSync(path1, Buffer.from(getPorn, "utf-8"));
return api.sendMessage({body : `Your Request`, 
  attachment: fs.createReadStream(path1)}, event.threadID, () => fs.unlinkSync(path1),event.messageID);
  }; 
}catch {return api.sendMessage(`Unable to process request`,event.threadID,event.messageID)}
}