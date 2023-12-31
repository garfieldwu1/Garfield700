module.exports.config = {
  name: "quotes",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "random quotes",
  commandCategory: "everyone",
    cooldowns: 0,
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
    try {
        let axios = require('axios');
        let fs = require("fs-extra");
        let request = require("request");
        let {threadID, senderID, messageID} = event;
    const res = await axios.get(`https://api.popcat.xyz/quote`);
    console.log(res.data);
  var data = res.data;
      let callback = function() {
            return api.sendMessage(
                attachment: fs.createReadStream(__dirname + `/cache/image.png`)
            }, threadID, () => fs.unlinkSync(__dirname + `/cache/image.png`), messageID);
        };
    return request(encodeURI(`https://api.xteam.xyz/quotemaker?text=${data.quote}&wm=Upvotes ${data.upvotes}&APIKEY=bb87827d6c4b905e`)).pipe(fs.createWriteStream(__dirname + `/cache/image.png`)).on("close", callback);
    } catch (err) {
        return console.log(`[ERR]: ${err}`)
    }
}