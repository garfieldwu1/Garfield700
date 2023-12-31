module.exports.config = {
    name: "hentaigifv2",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Joshua Sy",
    description: "hentai gifs",
    commandCategory: "image",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) => {  {

    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
   const { threadID, messageID, senderID, body } = event;
   var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/biden.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/biden.gif"),event.messageID);
   return request(encodeURI(`https://betabotz-api.herokuapp.com/api/nsfw/gifs?apikey=BetaBotz`)).pipe(fs.createWriteStream(__dirname+'/cache/biden.gif')).on('close',() => callback());     
}}
