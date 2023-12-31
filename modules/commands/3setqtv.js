module.exports.config = {
  name: "setqtv",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "loi",
  description: "specify qtv-bot to do qtv",
  commandCategory: "other",
  usages: "set",
  cooldowns: 5,
  info: [
    {
      key: "tag",
      prompt: "Leave blank or tag someone else",
      type: 'Tag',
      example: 'setptv-by loi'
    }
  ]
};

module.exports.run = function({ api, event, args }) {
if (args[0] == "add") {
  if (Object.keys(event.mentions) == 0) return api.changeAdminStatus(event.threadID, args.join(" "), true);
  else {
    for (var i = 0; i < Object.keys(event.mentions).length; i++) api.changeAdminStatus(event.threadID ,`${Object.keys(event.mentions)[i]}`, true)
  return; 
    }
}
else if (args[0] == "del") {
if (Object.keys(event.mentions) == 0) return api.changeAdminStatus(event.threadID, args.join(" "), true);
  else {
    for (var i = 0; i < Object.keys(event.mentions).length; i++) api.changeAdminStatus(event.threadID ,`${Object.keys(event.mentions)[i]}`, false)
  return; 
    }
}

  }