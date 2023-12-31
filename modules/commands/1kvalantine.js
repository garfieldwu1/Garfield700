module.exports.config = {
    name: "valentine",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Rip05",
    description: "edit txt",
    commandCategory: "tạo ảnh",
    usages: "[Text1]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async function ({ api, event, args}) {
    const { threadID, messageID, senderID, body } = event;
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    const moduleName = this.config.name;
    let text = args.join(" ")
    let params = {text};
    params = qs.stringify(params);
    api.sendMessage("Image initialization, please wait...", event.threadID, event.messageID);
    const pathsave = __dirname + `/cache/avtlolv2952.png`;
    let imageBuffer;
await axios.get(`https://betabotz-api.herokuapp.com/api/textpro/valentine?text=${text}&apikey=BetaBotz`, {
            responseType: "arraybuffer"
        })
        .then(data => {
            const imageBuffer = data.data;
            fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
            api.sendMessage({body: `[R05] - Module: ${moduleName} || Name: ....  || - Text: ${text}`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);})
        .catch(error => {
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`Error! An error occurred. Please try again later ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};