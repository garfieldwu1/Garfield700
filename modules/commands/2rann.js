module.exports.config = {
    name: "animvid",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Joshua Sy",
    description: "",
    commandCategory: "video",
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
 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/biden.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/biden.mp4"),event.messageID);
   return request(encodeURI(`https://fatiharridho.herokuapp.com/api/anime/storyanime`)).pipe(fs.createWriteStream(__dirname+'/cache/biden.mp4')).on('close',() => callback());     
}}
