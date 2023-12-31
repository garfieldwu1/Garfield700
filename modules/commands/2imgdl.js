module['exports']['config'] = {
  name: "imgdl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Deku",
  description: "Download image",
  commandCategory: "Image",
  usages: "[ulr]",
  cooldowns: 3
};

module['exports']['run'] = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
  var link = args['join'](" ");
  if (!link){ return api['sendMessage'](`Wrong Format\nUse: ${global['config']['PREFIX']}${this['config']['name']} ${this['config']['usages']}`, event['threadID'], event['messageID']);
            }
  else {
   var callback = () => api['sendMessage']({attachment: fs['createReadStream'](__dirname + "/cache/deku.jpg")}, event['threadID'], () => fs.unlinkSync(__dirname + "/cache/deku.jpg"));	
 request(encodeURI(link))['pipe'](fs['createWriteStream'](__dirname+"/cache/deku.jpg"))['on']("close",() => callback());
  }
   };