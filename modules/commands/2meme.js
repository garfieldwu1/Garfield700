module.exports.config = {
    name: "meme2",
    version: "1.0.0",
    hasPermision: 0,
    credit: "Deku",
    description: "memes",
    commandCategory: "random memes",
    cooldowns: 0,
};

module.exports.run = async function({api, event, args, utils, Users, Threads}) {
    try {
        let axios = require('axios');
        let fs = require("fs-extra");
        let request = require("request");
        let {threadID, senderID, messageID} = event;
  const res = await axios.get(`https://api.reikomods.repl.co/others/memes`);
  console.log(res.data);
  var data = res.data;
  let callback = function() {
            return api.sendMessage({
                body:`${data.title}\nUpvotes: ${data.ups}\nComments: ${data.comments}`,
                attachment: fs.createReadStream(__dirname + `/cache/image.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/image.png`), event.messageID);
        };
    return request(encodeURI(data.image)).pipe(fs.createWriteStream(__dirname + `/cache/image.png`)).on("close", callback);
    } catch (err) {
        console.log(err)
        return api.sendMessage(`Error`, event.threadID)
    }
}