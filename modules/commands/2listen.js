module.exports.config = {
  name: "listen",	version: "1.0.0",
  hasPermssion: 2,
  credits: "NTKhang",
  description: "Bật tắt chế độ selfListen (acc bot đem chat lệnh vẫn chạy được lệnh đó)\nCredits: NTKhang",
  commandCategory: "Group",
  usages: "listen on/off",
  cooldowns: 5,
};

module.exports.run = async function({ global, api, event, args, client }) {
var config = require(client.dirConfig);
var fs = require("fs-extra");
     if(args[0] == "on") {var tf = true, onoff = "Turn on";}
else if(args[0] == "off") {var tf = false, onoff = "Turn off";}
else return api.sendMessage("Syntax error", event.threadID, event.messageID);
      config.selfListen = tf;
  fs.writeFileSync(client.dirConfig, JSON.stringify(config, "utf-8"));
  api.setOptions({selfListen: tf});

  api.sendMessage("Is already "+onoff+" selfListen mode ", event.threadID, event.messageID);

}