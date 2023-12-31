const moneydown = 1000 // Số tiền cho mỗi ảnh!
module.exports.config = {
  name: "hololive",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Khoa",
  description: "Random ảnh nhân vật hololive :>",
  commandCategory: "Hình ảnh",
  usages: "<tên nhân vật>",
  cooldowns: 0
};

module.exports.run = async function({ api, event, args, Currencies }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  let { senderID, messageID, threadID } = event;
  const threadSetting = global.data.threadData.get(threadID) || {};
  var prefix = threadSetting.PREFIX || global.config.PREFIX;

  var data = await Currencies.getData(senderID);
  var money = data.money;
  if (money < moneydown) return api.sendMessage(`You don't have enough ${moneydown}To see photos`, threadID, messageID);
  if (args.length == 0) return api.sendMessage(`Please use correct syntax: "${prefix}hololive character"`, threadID, messageID);
  var character = args[0].toLowerCase();

  axios.get(`https://api-hololive.doanhkhoa.repl.co?character=${character}`).then(res => {
  let checkErr = res.data.error;
  if (checkErr == "1") {
    let msg1 = res.data.msgmot;
    let msg2 = res.data.msghai;
    return api.sendMessage(`${msg1}\n${msg2}`, threadID, messageID);
  };

  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let cc = res.data.name;
  let callback = function () {
    Currencies.decreaseMoney(senderID, moneydown);
    api.sendMessage({
      body: `${cc} this :>  -${moneydown}$\nNow available ${count} photos`,
      attachment: fs.createReadStream(__dirname + `/cache/hololive.${ext}`)
    }, threadID, () => fs.unlinkSync(__dirname + `/cache/hololive.${ext}`), messageID);
  };
  request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/hololive.${ext}`)).on("close", callback);
  })
}