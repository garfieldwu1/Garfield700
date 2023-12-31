module.exports.config = {
  name: "movie",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "View movie info",
  commandCategory: "info",
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
    axios.get(`https://api.popcat.xyz/imdb?q=${encodeURIComponent(juswa)}`).then(res =>
    {
      let title = res.data.title,
        date = res.data.year,
        time = res.data.runtime,
        genres = res.data.genres,
        director = res.data.director,
        actors = res.data.actors,
        plot = res.data.plot
      var poster = res.data.poster;
      let callback = function ()
      {
        api.sendMessage(
        {
          body: `Title: ${title}\n\nActors: ${actors}\n\nRelease Date: ${date}\n\nGenres: ${genres}\n\nDirector: ${director}\n\nPlot: ${plot}`,
          attachment: fs.createReadStream(__dirname + `/cache/juswa.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/juswa.png`), event.messageID);
      };
      request(encodeURI(poster)).pipe(fs.createWriteStream(__dirname + `/cache/juswa.png`)).on("close", callback);
    })
  }
}