module.exports.config = {
  name: "dick",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sake",
  description: "dick Pictures.",
  commandCategory: "Image",
  cooldowns: 1,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/xLBPphn.jpg",
"https://i.imgur.com/hsUlqOp.jpg",
"https://i.imgur.com/xLBPphn.jpg",
"https://i.imgur.com/fz55blu.jpg",
"https://i.imgur.com/rFYcUaw.jpg",
"https://i.imgur.com/bygYoVp.jpg",
"https://i.imgur.com/ujbVXGR.jpg",
"https://i.imgur.com/axoaE0B.jpg",
"https://i.imgur.com/rovYaOI.jpg",
"https://i.imgur.com/vaIvfw4.jpg",
"https://i.imgur.com/SsKrWGX.jpg",
"https://i.imgur.com/FWAULT3.jpg",
"https://i.imgur.com/pcqZtak.jpg",
"https://i.imgur.com/l7tcf4A.jpg",
"https://i.imgur.com/QYQmL2X.jpg",
"https://i.imgur.com/BEFdchC.jpg",
"https://i.imgur.com/hCvfAI2.jpg",
"https://i.imgur.com/0FBWNO7.jpg",
"https://i.imgur.com/yvkHAPZ.jpg",
  ];
   var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };