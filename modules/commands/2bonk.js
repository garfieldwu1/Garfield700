module.exports.config = {
    name: "bonk",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Deku",
    description: "img",
    commandCategory: "image",
    cooldowns: 0,
    usages: "/uid/reply/mention"
};
module.exports.run = async ({ api, event,args }) => {  {

    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
   const { threadID, messageID, senderID, body } = event;
/*	if (args.join().indexOf('@') !== -1){ var id = Object.keys(event.mentions) }
      else var id = args[0] || senderID;
      if(event.type == "message_reply") { var id = event.messageReply.senderID }*/
var id = Object.keys(event.mentions)[0] || event.senderID;
  var id1 = Object.keys(event.mentions)[1] || event.senderID;
   var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/biden.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/biden.png"),event.messageID);
   return request(encodeURI(`https://api.reikomods.repl.co/canvas/bonk?uid1=${id}&uid2=${id1}`)).pipe(fs.createWriteStream(__dirname+'/cache/biden.png')).on('close',() => callback());     
}}