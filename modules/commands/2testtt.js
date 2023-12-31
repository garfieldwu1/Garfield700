module.exports.config = {
  name: "testt",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "bugtong",
  commandCategory: "...",
  cooldowns: 2
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let query = args.join(" ");
const res = await axios.get(`https://api.popcat.xyz/weather=${query}`);
let saiki = Object.values(res.data) console.log(saiki)

var title = saiki[0];
var artist = saiki[2];
var lyrics = saiki[3];

api.sendMessage("Title: " + title + "\nArtist: " + artist + "\n\nLyrics: " + lyrics, event.threadID, event.messageID);