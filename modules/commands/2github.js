module.exports.config = {
  name: "github2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "find github info",
  usages: "[github name]",
  commandCategory: "...",
  cooldowns: 1
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://api.popcat.xyz/github/${juswa}`);
var name = res.data.name;
var location = res.data.location;
var email = res.data.email;
var twitter = res.data.twitter;
var followers = res.data.followers;
var following = res.data.following;
var created = res.data.created_at;
var bio = res.data.bio;
var url = res.data.url;
return api.sendMessage(`Name: ${name}\nUrl: ${url}\nBio: ${bio}\nLocation: ${location}\nEmail: ${email}\nTwitter: ${twitter}\nFollowers: ${followers}\nFollowing: ${following}`, event.threadID, event.messageID)
}