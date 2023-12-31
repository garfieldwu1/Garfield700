module.exports.config = {
  name: "pepe",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sake",
  description:  "pepe photo",
  commandCategory: "pepe-IMG",
  usages: "pepe",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/8ZaQVKM.jpg"
     ];
     var callback = () => api.sendMessage({body:`tag pisong pepe 👇👇👇`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };