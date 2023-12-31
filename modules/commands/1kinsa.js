module.exports.config = {
  name: "kinsa ni",
  version: "0.0.1",
  hasPermision: 0,
  usages: "reply or mention",
  credit: "Chards Bot",
  description: "get info",
  commandCategory: "tools",
  cooldowns: 30,
};

module.exports.run = async function({ api, event, args, utils, Users, Threads }) {
  try {
      const moment = require("moment");
      let axios = require('axios');
      let fs = require("fs-extra");
      let request = require("request");
      let { threadID, senderID, messageID } = event;
      var uid = args.join(" ");
      if (!args[0]) { var uid = senderID }
      if (event.type == "message_reply") { uid = event.messageReply.senderID }
      if (args.join().indexOf('@') !== -1) { var uid = Object.keys(event.mentions)[0] }

      const res = await axios.get(`https://chards-bot-api.richardretada.repl.co/api/tools/fbinfo?uid=${uid}`);
      const pic = (await axios.get(res.data.result.avatar, {
              responseType: "stream"
          })).data;
    let callback = function () {
 return api.sendMessage({
              body: `== STALK ==
Fullname: ${res.data.result.fullname}
Uid: ${res.data.result.uid}
Verified: ${res.data.result.verified}
Followers: ${res.data.result.follow}
Profile link: ${res.data.result.link_prof}
Gender: ${res.data.result.gender}
Birthday: ${res.data.result.birthday}
Relationship: ${res.data.result.love}
Location: ${res.data.result.location}
Hometown: ${res.data.result.hometown}
Joined Time: ${res.data.result.timejoin}
Joined Date: ${res.data.result.datejoin}
`,attachment: fs.createReadStream(__dirname + `/cache/image.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/image.png`), event.messageID);
      };
      return request(encodeURI(res.data.result.avatar)).pipe(fs.createWriteStream(__dirname + `/cache/image.png`)).on("close", callback);
  } catch (err) {
      console.log(err);
      return api.sendMessage(`Error`, event.threadID);
  }
}