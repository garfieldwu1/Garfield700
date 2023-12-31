module.exports.config = {
    name: "bob",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Deku",
    description: "",
    commandCategory: "image",
    cooldowns: 0,
    usages: "or bob uid"

};
module.exports.run = async ({ api, event,args }) => {  {

    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
   const { threadID, messageID, senderID, body } = event;
  var id = args[0] || event.senderID;
   var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/biden.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/biden.png"),event.messageID);
   return request(encodeURI(`https://api.reikomods.repl.co/canvas/burn?uid=${id}`)).pipe(fs.createWriteStream(__dirname+'/cache/biden.png')).on('close',() => callback());     
}}
