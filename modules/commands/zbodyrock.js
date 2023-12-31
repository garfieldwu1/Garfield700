const fs = require("fs");
module.exports.config = {
	name: "bdrck",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "vm",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bodyrock")==0 || event.body.indexOf("Bodyrock")==0 || event.body.indexOf("Body Rock")==0 || event.body.indexOf("body rock")==0) {
		var msg = {
				body: "🥵",
				attachment: fs.createReadStream(process.cwd()+"/bodyrock_.mp3")
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }