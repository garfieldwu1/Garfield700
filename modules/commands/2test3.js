module.exports.config = {
  name: "weatherrr",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "weather",
  usages: "[country]",
  commandCategory: "...",
  cooldowns: 2
};

module.exports.run = async ({ api, event,args, Users }) => {
const axios = global.nodemodule["axios"]
let query = args.join(" ");
if (!query)
    return api.sendMessage(`Wrong format\nPlease use: ${global.config.PREFIX}${this.config.name} [country]`, event.threadID, event.messageID);
  const res = await axios.get(`https://api.popcat.xyz/weather?q=${query}`);
let juswa = Object.values(res.data);

var loc = juswa[0].location.name;
var lat = juswa[0].location.lat;
var tz = juswa[0].location.timezone;
var long = juswa[0].location.long;
var skyt = juswa[0].current.skytext;
var temp = juswa[0].current.temperature;
var wind = juswa[0].current.winddisplay;
//var img = juswa[0].current.imageUrl;
return api.sendMessage(`Location: ${loc}\nLatitude: ${lat}\nLongtitude: ${long}\nTime Zone: ${tz}\nTemperature: ${temp}\nWind speed and direction: ${wind}`, event.threadID, event.messageID);
}