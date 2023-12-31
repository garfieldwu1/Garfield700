module.exports.config = {
  name: "tiktokinfo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "find tiktok info",
  usages: "[tiktok name]",
  commandCategory: "...",
  cooldowns: 1
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://manhict.tech/api/tikInfo?query=${juswa}&apikey=Ff7Xm5h9`);
var id = res.data.result.id;
var uniqueId = res.data.result.uniqueId;
var nickname = res.data.result.nickname;
var privateAccount = res.data.result.privateAccount;
var followerCount = res.data.result.followerCount;
var heart = res.data.result.heart;
var signature = res.data.result.signature;
var avatar = res.data.result.avatar;
return api.sendMessage(`id: ${id}\nUniqueId: ${uniqueId}\nNickname: ${nickname}\nPrivateAccount: ${privateAccount}\nFollowerCount: ${followerCount}\nHeart: ${heart}\nSignature: ${signature}\nAvatar: ${avatar}`, event.threadID, event.messageID)
}