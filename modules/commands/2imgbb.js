module.exports.config = {
    name: "imgbb",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Joshua Sy",
    description: "imgbb uploader(limited)",
    commandCategory: "tools",
    usages: "[reply to image]",
    cooldowns: 5,
    dependencies: {
  "axios": "",}
};

module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];  
var linkanh = event.messageReply.attachments[0].url || args.join(" ");
    if(!linkanh) return api.sendMessage('Please reply to image.', event.threadID, event.messageID)
const res = await axios.get(`https://api.imgbb.com/1/upload?key=7bae9217f9881771bccde9dd89d2e6dc&image=${encodeURIComponent(linkanh)}&apikey=N3MqSq2j`);    
var juswa = res.data.data.url;
    return api.sendMessage(`Here is your img link:\n\n${juswa}`, event.threadID, event.messageID);

}