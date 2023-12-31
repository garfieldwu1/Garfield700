module.exports.config = {
  name: "itunes",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "hentai",
  usages: "text",
  commandCategory: "Other",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    let juswa = args.join(" ");
    const res = await axios.get(`https://api.popcat.xyz/itunes?q=${juswa}`);
    var data = res.data.thumbnail;
    var name = res.data.name;
    var artist = res.data.artist;
    var album = res.data.album;
    var rd = res.data.release_date;
    var length = res.data.length;
    var genre = res.data.genre;
    var mi = res.data.url;
    var msg = [];
    let a = `${res.data.thumbnail}`;

    let imgs1 = (await axios.get(`${a}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.png", Buffer.from(imgs1, "utf-8"));

    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.png"));
    return api.sendMessage({body:`Music Name: ${name}\nArtist Name: ${artist}\nAlbum: ${album}\nGenre: ${genre}\nRelease Date: ${rd}\nUrl: ${mi}`, attachment: allimage
    }, event.threadID);
}