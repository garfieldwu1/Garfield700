module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "MrTomXxX",//Mod by H.Thanh
	description: "Notify the Bot or the person leaving the group with a random gif/photo/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "leaveGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "leaveGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("Asia/Kolkata").format("HH");
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "leave" : "managed";
	const path = join(__dirname, "cache", "leaveGif");
	const pathGif = join(path, `${threadID}.mp4`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

(typeof data.customLeave == "undefined") ? msg = "[👋] {name} 𝐃𝐞𝐩𝐚𝐫𝐭𝐞𝐝 𝐅𝐫𝐨𝐦 𝐮𝐬. [👋]\n●▬▬▬▬๑۩۩๑▬▬▬▬●\n 𝐓𝐡𝐚𝐧𝐤𝐬 𝐭𝐨 𝐦𝐲 𝐁𝐚𝐛𝐲 {name} 𝐘𝐨𝐮 𝐉𝐮𝐬𝐭 𝐓𝐚𝐤𝐞 𝐖𝐢𝐥𝐝𝐞𝐫𝐧𝐞𝐬𝐬 𝐁𝐨𝐭 𝐀𝐧𝐝 𝐁𝐨𝐱 𝐈𝐧 𝐓𝐡𝐞 𝐏𝐚𝐬𝐭 𝐖𝐢𝐭𝐡 𝐑𝐞𝐠𝐫𝐞𝐭𝐬 𝐁𝐮𝐭 𝐆𝐨𝐨𝐝𝐛𝐲𝐞 𝐀𝐧𝐝 𝐒𝐞𝐞 𝐘𝐨𝐮 𝐍𝐞𝐱𝐭 𝐭𝐢𝐦𝐞\n[👋] 𝐆𝐨𝐨𝐝 {session} || {time}" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type).replace(/\{session}/g, hours <= 10 ? "𝐌𝐨𝐫𝐧𝐢𝐧𝐠" : 
    hours > 10 && hours <= 12 ? "𝐀𝐟𝐭𝐞𝐫𝐧𝐨𝐨 " :
    hours > 12 && hours <= 18 ? "𝐄𝐯𝐞𝐧𝐢𝐧𝐠" : "𝐍𝐢𝐠𝐡𝐭").replace(/\{time}/g, time);  

	const randomPath = readdirSync(join(__dirname, "cache", "leaveGif", "randomgif"));

	if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif) }
	else if (randomPath.length != 0) {
		const pathRandom = join(__dirname, "cache", "leaveGif", "randomgif",`${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
		formPush = { body: msg, attachment: createReadStream(pathRandom) }
	}
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}