module.exports.config = {
  name: "neon3",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Deku",
  description: "text generator",
  commandCategory: "image",
  usages: "[text]",
  cooldowns: 3
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
    axios.get(`https://api.reikomods.repl.co/textpro/neon3?text=${encodeURIComponent(juswa)}`).then(res =>
    {
      var result = res.data.result;
      let callback = function ()
      {
        api.sendMessage(
        {attachment: fs.createReadStream(__dirname + `/cache/covidtk.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/covidtk.png`), event.messageID);
      };
      request(encodeURI(result)).pipe(fs.createWriteStream(__dirname + `/cache/covidtk.png`)).on("close", callback);
    })
  }
}