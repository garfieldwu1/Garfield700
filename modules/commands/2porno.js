module.exports.config = {
  name: "pornhub",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Deku",
  description: "text generator",
  commandCategory: "image",
  usages: "[text1 | text2]",
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
  let text = args.join(" ")
  const text1 = text.substr(0, text.indexOf(' | ')); 
  const length = parseInt(text1.length)
  const text2 = text.split(" | ").pop()
  const length_2 = parseInt(text2.length)
  if (!text) return api.sendMessage(`Add text lmao`, event.threadID, event.messageID);
  else
  {
    axios.get(`https://api.reikomods.repl.co/textpro/pornhub?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`).then(res =>
    {
      var result = res.data.result.result;
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