const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "zerotwo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Anup Kumar",
  description: "Zerotwo photo",
  commandCategory: "Random-img",
  usages: "zerotwo",
  cooldowns: 2,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [

"https://i.imgur.com/z1DkZLB.png",
"https://i.imgur.com/Pe7NVnm.jpeg",
"https://i.imgur.com/7Rq4cbJ.jpeg",
"https://i.imgur.com/Qu9JkcR.png",
"https://i.imgur.com/1OwSlPw.jpeg",
"https://i.imgur.com/B6MrYnY.jpeg",
"https://i.imgur.com/s5gz9Rs.png",
"https://i.imgur.com/4vmxxYv.jpeg",
"https://i.imgur.com/jp1Fa06.png",
"https://i.imgur.com/houyeqj.jpeg",
"https://i.imgur.com/PGdDH3j.jpeg",
"https://i.imgur.com/lggzs0p.png",
"https://i.imgur.com/8xPCfzi.png",
"https://i.imgur.com/CV2aIrS.png",
"https://i.imgur.com/4lG0qBC.png",
"https://i.imgur.com/amOyJus.png",
"https://i.imgur.com/bIs4pzZ.png",
"https://i.imgur.com/v59s50N.png",
"https://i.imgur.com/VB6Q9ot.png",
"https://i.imgur.com/xELhAmD.png",
"https://i.imgur.com/VI7aMyv.png",
"https://i.imgur.com/vMvOdZJ.png",
"https://i.imgur.com/1LOyzmP.jpeg",
"https://i.imgur.com/JQ3z84B.jpeg",
"https://i.imgur.com/JQ3z84B.jpeg",

];
  var callback = () => api.sendMessage({body:`Photos of Zerotwo `,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };