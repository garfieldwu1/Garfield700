module.exports.config = {
  name: "kissgif",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "random kiss gif",
  commandCategory: "Other",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    let juswa = args.join(" ");
    const res = await axios.get(`https://cdn.nekos.life/kiss/kiss_098.gif`);
    var data = res.data.url;
    var msg = [];
    let a = `${res.data.url}`;
    let imgs1 = (await axios.get(`${a}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.gif", Buffer.from(imgs1, "utf-8"));

    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.gif"));
    return api.sendMessage({body:`mwaaa`, attachment: allimage
    }, event.threadID);
}