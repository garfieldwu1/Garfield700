const axios = require("axios");
module.exports.config = {
    name: "dictionary2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Prince Sanel",
    description: "Definition of a word",
    usePrefix: true,
    commandCategory: "Search",
    usages: "[Word]",
    cooldowns: 0,
}; // Credits for api: Sensui
module.exports.run = async function({ api, event, args }) {
  var { threadID, messageID } = event;
  try {
    const req = args[0];
    if (!args[0]) return api.sendMessage("[!] Require an word to fetch the meaning", threadID, messageID);
    const res = await axios(`https://sensui-useless-apis.codersensui.repl.co/api/tools/dictionary?word=${encodeURI(req)}`);
    api.sendMessage(`»» DICTIONARY API ««\n❯ Word: ${res.data.word}\n❯ Definition: ${res.data.definition}\n❯ Examples: ${res.data.examples}. [DONE]`, threadID, messageID);
  } catch (error) {
    api.sendMessage("An error occurred while fetching the api", threadID, messageID);
  }
}