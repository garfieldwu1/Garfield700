module.exports.config = {
  name: "recipe",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "get some recipe",
  commandCategory: "cook",
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
  var tip = args.join(" ");
  if (!tip) return api.sendMessage(`COUNTRY NOT FOUND!🌎`, event.threadID, event.messageID);
  else
  {
    axios.get(`http://zekais-api.herokuapp.com/resep?menu=${encodeURIComponent(tip)}&apikey=N3MqSq2j`).then(res =>
    {
      let pub = res.data.published
      var ing = res.data.ingredient;
      var step = res.data.step;
      var flag = res.data.thumb;
      request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${step}`), (err, response, body) => {
    if (err) return api.sendMessage("Error", event.threadID, event.messageID);
    var retrieve = JSON.parse(body);
    var text = '';
    retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
      let callback = function ()
      {
        api.sendMessage(
        {
          body:`Published: ${pub}` + text,
          attachment: fs.createReadStream(__dirname + `/cache/covidtk.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/covidtk.png`), event.messageID);
      };
      request(encodeURI(flag)).pipe(fs.createWriteStream(__dirname + `/cache/covidtk.png`)).on("close", callback);
    })
  }
}
//http://zekais-api.herokuapp.com/resep?menu=rice&apikey=N3MqSq2j