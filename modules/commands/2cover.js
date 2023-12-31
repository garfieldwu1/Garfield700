module.exports.config = {
    name: "coverv5",
    version: "1.0.0",
    hasPermision: 0,
    credits: "Joshua Sy",
    description: "battlefield",
    commandCategory: "random-img",
    cooldowns: 0,
};

module.exports.run = async function({api, event, args, utils, Users, Threads}) {
    try {
        let axios = require('axios');
        let fs = require("fs-extra");
        let request = require("request");
        let {threadID, senderID, messageID} = event;
       let text = args.join(" ");
  const res = await axios.get(`https://cakrayp.herokuapp.com/api/textmaker/photooxy/create?text=${text}&url=https://photooxy.com/banner-cover/graffiti-text-cover-222.html&apikey=cakrayp24Q6&responsetype=json`);
  console.log(res.data);
  var data = res.data;
  let callback = function() {
            return api.sendMessage({
                body:``,
                attachment: fs.createReadStream(__dirname + `/cache/image.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/image.png`), event.messageID);
        };
    return request(encodeURI(data.result.image_url)).pipe(fs.createWriteStream(__dirname + `/cache/image.png`)).on("close", callback);
    } catch (err) {
        console.log(err)
        return api.sendMessage(`Error`, event.threadID)
    }
}