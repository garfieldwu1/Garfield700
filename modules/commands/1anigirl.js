module.exports.config = {
    name: "anigirl",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "æ„šã‹ãªåˆ‡æ–­è€…",
    description: "random dp",
    commandCategory: "random-img",
    usages: "send message",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
  var leiamnashh = (`Anime profile for you\nTag: anime girl`);
    var leiamnash = [   
"https://i.imgur.com/G369uCX.jpg",
"https://i.imgur.com/hXLXtQx.jpg",
"https://i.imgur.com/vyclI98.jpg",
"https://i.imgur.com/5gjcey3.jpg",
"https://i.imgur.com/4VPgIA3.jpg",
"https://i.imgur.com/E32ki1K.jpg",
"https://i.imgur.com/D4O5b6w.jpg",
"https://i.imgur.com/sjEbnDC.jpg",
"https://i.imgur.com/LEuJA9g.jpg",
"https://i.imgur.com/r2C6u9X.jpg",
"https://i.imgur.com/jSYfmsc.jpg",
"https://i.imgur.com/9OgpKGT.jpg",
"https://i.imgur.com/ZzHW0O4.jpg"     
    ];
    var leiamnash2 = () => api.sendMessage({ body: leiamnashh, attachment: fs.createReadStream(__dirname + "/cache/LeiamNash1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/LeiamNash1.jpg"), event.messageID);
    return request(encodeURI(leiamnash[Math.floor(Math.random() * leiamnash.length)])).pipe(fs.createWriteStream(__dirname + "/cache/LeiamNash1.jpg")).on("close", () => leiamnash2());
};