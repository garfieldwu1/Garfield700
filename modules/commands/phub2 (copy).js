module.exports.config = {
    name: "pornhubv2",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Joshua Sy",
    description: "",
    commandCategory: "image",
    usages: "[text | text]",
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
  let name = (await api.getUserInfo(senderID))[senderID].name
	let text = args.join(" ");
  const text1 = text.substr(0, text.indexOf(' | ')); 
  const length = parseInt(text1.length)
  const text2 = text.split(" | ").pop()
  const length_2 = parseInt(text2.length)
	 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/biden.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/biden.png"),event.messageID);
	 return request(encodeURI(`https://betabotz-api.herokuapp.com/api/textpro/pornhub?text=${text1}&text2=${text2}&apikey=BetaBotz`)).pipe(fs.createWriteStream(__dirname+'/cache/biden.png')).on('close',() => callback());     
}}
