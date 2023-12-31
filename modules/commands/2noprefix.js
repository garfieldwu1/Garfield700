
module.exports.config = {
    name: "noprefix",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "HTHB",
    description: "",
    commandCategory: "no command marks needed",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "anlon.gif")) request("https://i.redd.it/fhfb6iv99l561.gif").pipe(fs.createWriteStream(dirMaterial + "anlon.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = "100027399343135" {
                body: `Bye ${name} ccongrats for cursing bot and eating cunt because this message will be sent to BOT owner !`,
                attachment: fs.createReadStream(__dirname + `/noprefix/anlon.gif`)
            }
    if (event.body.toLowerCase() == "Whole chicken"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "Totally stupid"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "spam bots"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "bot cunt"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "tangina mo bot"){
        return  api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "bulok bot"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "bagal ng bot"){
        return
api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "panget ng bot"){
        return
api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "stupid bots"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Use the wrong way and then lie",event.threadID)
          }