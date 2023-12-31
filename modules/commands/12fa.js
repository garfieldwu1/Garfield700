module.exports.config = {
  name: "2fa",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ZiaRein",
  description: "get code 2fa",
  commandCategory: "For users",
  usages: "image",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
  const authenticator = require('authenticator');
  var formattedToken = authenticator.generateToken(args.join(""));

  var { threadID, messageID } = event;
   return api.sendMessage('⏳ Getting the 2fa code for you...', event.threadID, (err, info) => {
    setTimeout(() => {
  return api.sendMessage(formattedToken,threadID,messageID);
   }, 200);
  }, event.messageID);
};