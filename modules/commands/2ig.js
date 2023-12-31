module.exports.config = {
  name: "ig",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "Stalk Instagram",
  commandCategory: "info",
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
  if ((this.config.credits) != "Joshua Sy") { return api.sendMessage(`Ulol Change credits pa putangina mo bobo HAHAHAHA`, event.threadID, event.messageID)}
  var juswa = args.join(" ");
  if (!juswa) return api.sendMessage(`Input Text`, event.threadID, event.messageID);
  else
  {
    axios.get(`https://api.popcat.xyz/instagram?user=${encodeURIComponent(juswa)}`).then(res =>
    {
      let fname = res.data.full_name,
        followers = res.data.followers
        following = res.data.following
      var result = res.data.profile_pic;
      let callback = function ()
      {
        api.sendMessage(
        {
          body: `Name: ${fname}\nFollowing:${following}\nFollowers: ${followers}`,
          attachment: fs.createReadStream(__dirname + `/cache/covidtk.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/covidtk.png`), event.messageID);
      };
      request(encodeURI(result)).pipe(fs.createWriteStream(__dirname + `/cache/covidtk.png`)).on("close", callback);
    })
  }
}