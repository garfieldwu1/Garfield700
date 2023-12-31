module.exports.config = {
	name: "triggerr",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Joshua Sy",
	description: "...",
	commandCategory: "edit-img",
	usages: "mention",
  cooldowns: 5,
	dependencies: {"fs-extra": "","discord.js": "","discord-image-generation" :"","node-superfetch": ""}
};

module.exports.run = async ({ event, api, args, Users }) => {
const DIG = global.nodemodule["discord-image-generation"];
  const Discord = global.nodemodule['discord.js'];
  const request = global.nodemodule["node-superfetch"];
  const fs = global.nodemodule["fs-extra"];
  if (this.config.credits != 'Joshua Sy') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » Change credits to your mothers dick, bitch:))'+ global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"');
        return api.sendMessage('[ WARN ] Detect bot operator ' , event.threadID, event.messageID);
      }
   let { senderID, threadID, messageID } = event;
  var id = Object.keys(event.mentions)[0] || event.senderID;
  var currency = args.toString().replace(/,/g,  '  ')
  var avatar = (await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=66262`)).body;
  
  let img = await new DIG.Triggered().getImage(avatar)
  let attach = new Discord.MessageAttachment(img);
  var path_wanted = __dirname + "/cache/wetd.png";
  fs.writeFileSync(path_wanted, attach.attachment);
  api.sendMessage({attachment: fs.createReadStream(path_wanted)}, event.threadID, () => fs.unlinkSync(path_wanted), event.messageID);
  }