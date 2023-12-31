module.exports.config = {
  name: "tech",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "text generator",
  commandCategory: "image",
  usages: "[text]",
  cooldowns: 5
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
    axios.get(`hhttps://cakrayp.herokuapp.com/api/textmaker/textprome/create?text=${encodeURIComponent(juswa)}&url=https://textpro.me/create-space-text-effects-online-free-1042.html&apikey=cakrayp24Q6&responsetype=json`).then(res =>
    {
      var result = res.data.result.image_url;
      let callback = function ()
      {
        api.sendMessage({body:`${juswa}`,
        attachment: fs.createReadStream(__dirname + `/cache/covidtk.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/covidtk.png`), event.messageID);
      };
      request(encodeURI(result)).pipe(fs.createWriteStream(__dirname + `/cache/covidtk.png`)).on("close", callback);
    })
  }
}