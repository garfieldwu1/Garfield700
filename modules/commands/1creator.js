module.exports.config = {
  name: "creator",
  version: "2.0", 
  hasPermssion: 0,
  credits: "Zeska Vhyanse", 
  description: "bot creator",
  commandCategory: "...",
  cooldowns: 2,
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const res = await api.getUserInfoV2(global.config.CUID);
const axios = require('axios');
const request = require('request');
const fs = require('fs-extra');
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『MM/D/YYYY』 【HH:mm:ss】");
var callback = () => api.sendMessage({body:`•——[ Creator of ${global.config.BOTNAME} ]——•
✫Creator : ${global.config.CREATOR}
❂Admin UID : ${global.config.CUID} 
♛Admin FB Link : 
${global.config.CLINK}
If you want your own bot just message the bot owner.
`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(res.avatar)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());

      };