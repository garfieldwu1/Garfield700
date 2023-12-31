const fs = require("fs");
module.exports.config = {
	name: "pogi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Justine Clyde", 
	description: "media",
	commandCategory: "no prefix",
	usages: "pogisigena",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("pogi sige na")==0 || event.body.indexOf("150")==0 || event.body.indexOf("sige na")==0 || event.body.indexOf("bakla")==0) {
		var msg = {
				body: "150💵",
				attachment: fs.createReadStream(process.cwd()+"/pogisigena.mp3")
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💵", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }