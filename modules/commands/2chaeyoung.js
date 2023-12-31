module.exports.config = {
  name: "chaeyoung",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy simp4Chaeyoung",
  description: "Chaeyoung Pictures.",
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
"https://i.imgur.com/NpdvSbS.jpeg ",
"https://i.imgur.com/VFP7Hg5.jpeg",
"https://i.imgur.com/0Pfo7hO.jpeg",
"https://i.imgur.com/MpxzeRZ.jpeg",
"https://i.imgur.com/SGZSrY0.jpeg",
"https://i.imgur.com/uny4mIB.jpeg",
"https://i.imgur.com/cFnjSzv.jpeg",
"https://i.imgur.com/Age7035.jpeg",
"https://i.imgur.com/XsX3Ajq.jpeg",
"https://i.imgur.com/iGRbWjI.jpeg",
"https://i.imgur.com/eUkQvwn.jpeg",
"https://i.imgur.com/dt9uATN.jpeg",
"https://i.imgur.com/G2jUtip.jpeg",
"https://i.imgur.com/A4evL78.jpeg",
"https://i.imgur.com/vf0tZAa.jpeg",
"https://i.imgur.com/UBo4Xg2.jpeg",
"https://i.imgur.com/HYYckS0.jpeg",
"https://i.imgur.com/9wIwGXS.jpeg",
"https://i.imgur.com/hNpFOjm.jpeg",
"https://i.imgur.com/mSfDXkI.jpeg",
"https://i.imgur.com/cN4M7vf.jpeg",
"https://i.imgur.com/6PkL2ZO.jpeg",
"https://i.imgur.com/95vkZdy.jpeg",
"https://i.imgur.com/u0lAkjh.jpeg",
"https://i.imgur.com/c5AetxM.jpeg",
"https://i.imgur.com/uFXn4nS.jpeg",
"https://i.imgur.com/slsV4wp.jpeg",
"https://i.imgur.com/Wcy2Muu.jpeg",
"https://i.imgur.com/mOvxSnJ.jpeg",
"https://i.imgur.com/EaA7nKY.jpeg",
  ];
   var callback = () => api.sendMessage({body:`Here is a picture of the Chaeyoung \nNumber of photos available: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };