module.exports.config = {
	name: "anhnude",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "BLACK",
	description: "Random nude photo extreme burns eyes 18+",
	commandCategory: "nsfw",
	usages: "anhnude",
	cooldowns: 2
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apituandz1407.herokuapp.com/api/nude.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/nobra.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nobra.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/nobra.${ext}`)).on("close", callback);
			})
}