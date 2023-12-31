module.exports.config = {
  name: "slice",
  slersion: "1.0.0",
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
    axios.get(`https://cakrayp.herokuapp.com/api/textmaker/textprome/create?text=${encodeURIComponent(juswa)}&url=https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html&apikey=cakrayp24Q6&responsetype=json`).then(res =>
    {
     //for costum https://cakrayp.herokuapp.com/api/textmaker/textprome/create?text=${encodeURIComponent(juswa)}&url=[url]&apikey=cakrayp24Q6&responsetype=json
      //let status = res.data.status,
       // url = res.data.result.image_url
      var result = res.data.result.image_url;
      let callback = function ()
      {
        api.sendMessage(
        {
          body: `Your wish is my command`,
          attachment: fs.createReadStream(__dirname + `/cache/covidtk.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/covidtk.png`), event.messageID);
      };
      request(encodeURI(result)).pipe(fs.createWriteStream(__dirname + `/cache/covidtk.png`)).on("close", callback);
    })
  }
}

//https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html