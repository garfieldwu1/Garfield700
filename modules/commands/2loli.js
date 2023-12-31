module.exports.config = {
    name: "loli",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Joshua Sy",
    description: "random loli image",
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
   var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/biden.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/biden.png"),event.messageID);
   return request(encodeURI(`https://leyscoders-api.herokuapp.com/api/loli?apikey=MIMINGANZ`)).pipe(fs.createWriteStream(__dirname+'/cache/biden.png')).on('close',() => callback());     
}}
