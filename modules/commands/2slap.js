module.exports.config = {
	name: "slap2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Joshua Sy",
	description: "slap a friend you tag",
	commandCategory: "edit-img",
	usages: "kiss",
	cooldowns: 5,
	dependencies: {"fs-extra": "","discord.js": "","discord-image-generation" :"","node-superfetch": ""}
};

module.exports.run = async ({ event, api, args, Users }) => {
  const DIG = global.nodemodule["discord-image-generation"];
  const Discord = global.nodemodule['discord.js'];
  const request = global.nodemodule["node-superfetch"];
  const fs = global.nodemodule["fs-extra"];
  if (this.config.credits != 'Joshua Sy') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » Palit credits ampt lakas ng loob '+ global.config.BOTNAME + ', Bobo mo Pakyu"' + this.config.name + '"');
        return api.sendMessage('[ WARN ] Detect bot operator ' , event.threadID, event.messageID);
      }
  if (!args[0]){
   return api.sendMessage("Please Tag Someone!", event.threadID, event.messageID);
  }
    
   let { senderID, threadID, messageID } = event;
  var one = event.senderID;
  var two = Object.keys(event.mentions);
  
  
  var avatar = (await request.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  var avatar2 = (await request.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  
  let img = await new DIG.Batslap().getImage(avatar, avatar2);
  let attach = new Discord.MessageAttachment(img);
  var path_bed = __dirname + "/cache/bed.png";
  fs.writeFileSync(path_bed, attach.attachment);
  api.sendMessage({attachment: fs.createReadStream(path_bed)}, event.threadID, () => fs.unlinkSync(path_bed), event.messageID);
}