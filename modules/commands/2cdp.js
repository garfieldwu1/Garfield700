module.exports.config = {
  name: "cdp2",
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
    const res = await axios.get(`https://erdwpe-api.herokuapp.com/randomimg/ppcouple`);
    var data = res.data.result;
    var msg = [];
    let img1 = `${res.data.male}`;
    let img2 = `${res.data.female}`;

    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.png", Buffer.from(imgs1, "utf-8"));
    let imgs2 = (await axios.get(`${img2}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img2.png", Buffer.from(imgs2, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img2.png"));

    {
        msg += `Here is your couple dp`
    }

    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID, event.messageID);
}