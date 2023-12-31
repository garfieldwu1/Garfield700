module.exports.config = {
  name: "reddit",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "Get tons of info on a subreddit",
  usages: "[text]",
  commandCategory: "...",
  cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://api.popcat.xyz/subreddit/${juswa}`);
var name = res.data.name;
var title = res.data.title;
var au = res.data.active_users;
var members = res.data.members;
var description = res.data.description;
var url = res.data.url;
return api.sendMessage(`Name: ${name}\nTitle: ${title}\nActive Users: ${au}\nMembers: ${members}\nDescription: ${description}\nUrl: ${url}`, event.threadID, event.messageID)
}