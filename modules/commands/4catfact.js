module.exports.config = {
  name: "catfact",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Prince Sanel",
  description: "Random Cat Fact",
  commandCategory: "random",
  usages: "none",
  cooldowns: 2,
};
module.exports.run = async function({ api, event, args }) {
const axios = require("axios");
let { messageID, threadID, senderID, body } = event;
const response = args.join(" ");
try {
const res = await axios.get(`https://catfact.ninja/fact`);
var respond = res.data.fact;
api.sendMessage("Cat Fact:\n "+respond, threadID , messageID);
} catch (error) {
api.sendMessage("An error occurred while making the API request.", threadID , messageID);
}
};