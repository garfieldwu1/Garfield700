module.exports.config = {
    name: "gaminglogo",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Deku",
    description: "",
    commandCategory: "image",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) => {  {

    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
  const axios = require('axios');
   const { threadID, messageID, senderID, body } = event;
  let text = args.toString().replace(/,/g,  '  ');
if (!text)
    return api.sendMessage("Add text lmao", event.threadID, event.messageID);
const res = await axios.get(`https://api.reikomods.repl.co/textpro/gaminglogo?text=${text}`)
   var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/biden.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/biden.png"),event.messageID);
    request(encodeURI(res.data.result)).pipe(fs.createWriteStream(__dirname+'/cache/biden.png')).on('close',() => callback());     
}}