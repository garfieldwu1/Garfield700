var cred = "\u0044\u0065\u006b\u0075";
module.exports.config = {
  name: "private",
  version: "1.0.0",
  hasPermssion: 2,
  credits: `${cred}`,
  description: "\u0054\u0061\u006c\u006b\u0020\u0074\u006f\u0020\u0041\u0049",
  usages: "\u005b\u0074\u0065\u0078\u0074\u005d",
  commandCategory: "\u0049\u006e\u0066\u006f",
  cooldowns: 5
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
  const axios = require('axios');
  if ((this.config.credits) != `${cred}`) { return api.sendMessage(`ulol change credits pa `, event.threadID, event.messageID)}
  let text = args.join(" ");
  if (!text) return api.sendMessage("Hi I'm Clyde! ask me anything i can help you to all your subjects making essay for you and more..", event.threadID, event.messageID);
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
const completion = await openai.createCompletion({
  model: "text-davinci-003",
    prompt: `${text}`,
    temperature: 1,
    max_tokens: 1240,
  });
 console.log(completion.data.choices[0].text);
  
api.sendMessage(`${completion.data.choices[0].text}`, event.threadID, event.messageID);
}