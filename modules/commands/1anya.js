module.exports.config = {
  name: "anyav2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "Random Anya Forger cute pics",
  commandCategory: "Random-IMG",
  cooldowns: 2
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://apianyaforger.joshuacarrera1.repl.co/').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `UwU`,
            attachment: fs.createReadStream(__dirname + `/cache/1.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/1.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/1.${ext}`)).on("close", callback);
      })
  }