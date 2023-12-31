module.exports.config = {
  name: "covidw",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "View Covid cases of World",
  usages: "[text]",
  commandCategory: "...",
  cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const res = await axios.get(`https://betabotz-api.herokuapp.com/api/info/covidworld?apikey=BetaBotz`);
var cases = res.data.result.totalCases;
var recovered = res.data.result.recovered;
var deaths = res.data.result.deaths;
var active = res.data.result.activeCases;
var updated = res.data.result.lastUpdate;
return api.sendMessage(`Total Cases: ${cases}\nTotal of recovered: ${recovered}\nTotal of deaths: ${deaths}\nTotal of Active Cases: ${active}\nLast Update: ${updated}`, event.threadID, event.messageID)
}