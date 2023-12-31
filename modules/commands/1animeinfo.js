 module.exports.config = {
  name: "animeinf",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "anime info",
  commandCategory: "info",
  usages: "[anime title]",
  cooldowns: 2
};

module.exports.run = async (
{
  api,
  event,
  args
}) =>
{
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var juswa = args.join(" ");
  if (!juswa) return api.sendMessage(`Add text lmao`, event.threadID, event.messageID);
  else
  {
    axios.get(`https://betabotz-api.herokuapp.com/api/anime/manga?search=${encodeURIComponent(juswa)}&apikey=BetaBotz`).then(res =>
    {
      let n = res.data.result.name,
        m = res.data.result.type,
        a = res.data.result.author,
        r = res.data.result.released,
        g = res.data.result.genre
      var t = res.data.result.thumb;
      let callback = function ()
      {
        api.sendMessage(
        {
          body: `Name: ${n}\nType: ${m}\nAuthor: ${a}\nReleased: ${r}\nGenre: ${g}`,
          attachment: fs.createReadStream(__dirname + `/cache/juswa.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/juswa.png`), event.messageID);
      };
      request(encodeURI(t)).pipe(fs.createWriteStream(__dirname + `/cache/juswa.png`)).on("close", callback);
    })
  }
}