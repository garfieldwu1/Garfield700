module.exports.config = {
  name: "covid",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thieu Trung Kien",
  description: "View information about covid 19",
  commandCategory: "Utilities",
  usages: "[Country name]",
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
    axios.get(`https://disease.sh/v3/covid-19/countries/${encodeURIComponent(tip)}`).then(res =>
    {
      let nhiem = res.data.cases,
        chet = res.data.deaths,
        dieutri = res.data.recovered,
        danso = res.data.population,
        chauluc = res.data.continent,
        quocgia = res.data.country
      var flag = res.data.countryInfo.flag;
      let callback = function ()
      {
        api.sendMessage(
        {
          body: `🌎COUNTRY : ${quocgia}\n\nCASES: ${nhiem}\n☠️DEATHS: ${chet} \n❤️RECOVERED : ${dieutri}\n📝 POPULATION : ${danso}\n🔎CONTINENT: ${chauluc}`,
          attachment: fs.createReadStream(__dirname + `/cache/covidtk.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/covidtk.png`), event.messageID);
      };
      request(encodeURI(flag)).pipe(fs.createWriteStream(__dirname + `/cache/covidtk.png`)).on("close", callback);
    })
  }
}