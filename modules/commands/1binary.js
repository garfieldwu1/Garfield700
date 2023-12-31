module.exports.config = {
    name: "binary",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Prince Sanel",
    description: "Binary encode or decode",
    usePrefix: true,
    commandCategory: "Admin",
    usages: "[type] [text]",
    cooldowns: 0,
}; // credits api : Joshua Sy

module.exports.run = async function ({ api, event, args }) {
    const axios = require('axios');
    var { threadID, messageID } = event;
    let type = args[0].toLowerCase();
    let name = args.slice(1).join(" ");
    if (!type) return api.sendMessage("Need an type to proceed.\nEx. "+global.config.PREFIX+this.config.name+"encode/decode hi hello", threadID, messageID);
    if (!name) return api.sendMessage("Need an text to proceed.", threadID, messageID);
    const res = await axios.get(`https://free-api.ainz-sama101.repl.co/others/binary?type=${type}&text=${name}`);
    api.sendMessage(`${type}d:\n${res.data.result}`, threadID, messageID);
}