module.exports.config = {
  name: "tttest",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "couple dp",
  commandCategory: "Other",
    cooldowns: 2,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const tiktok = require("tiktok-down");
const res = await tiktok(args.join(" "));
    let img1 = `${res.UrlVideo}`;
    //let img2 = `${res.data.female}`;

    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.mp4", Buffer.from(imgs1, "utf-8"));
   // let imgs2 = (await axios.get(`${img2}`, {
        responseType: 'arraybuffer'
    })).data;
    //fs.writeFileSync(__dirname + "/cache/img2.png", Buffer.from(imgs2, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.mp4"));
    //allimage.push(fs.createReadStream(__dirname + "/cache/img2.png"));
   return api.sendMessage({
        attachment: allimage
    }, event.threadID, event.messageID);
}