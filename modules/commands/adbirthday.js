module.exports.config = {
  name: "birthday",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "See admin's birthday",
  commandCategory: "bday",
  cooldowns: 5
}

module.exports.run =  ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
    const t = Date.parse("June 10, 2023 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );
  return api.sendMessage(`Time left until Admin Joshua Sy birthday\n»${days} days ${hours} hours ${minutes} minutes ${seconds} seconds.«` event.threadID);
}