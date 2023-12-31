const fs = require("fs");
module.exports.config = {
	name: "pogi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Justine Clyde", 
	description: "media",
	commandCategory: "no prefix",
	usages: "moon",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("moon")==0 || event.body.indexOf("loving from afar")==0 || event.body.indexOf("Moon")==0 || event.body.indexOf("car outside")==0) {
		var msg = {
				body: "I finally understand why people only watch moon from afar.",
				attachment: fs.createReadStream(process.cwd()+"/moon.mp4")
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌕", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }