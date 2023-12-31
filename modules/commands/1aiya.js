const axios = require("axios"); 
const moment = require("moment-timezone"); 

module.exports.config = {
  name: "aiyan",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "Yan Maglinte",
  description: "Can assist you in completing your homework, speech, and even essays.",
  commandCategory: "AI",
  usePrefix: false,
  usages: "ask anything",
  cooldowns: 7,
  dependencies: {}
};

async function getUserName(api, senderID) {
  try {
    const userInfo = await api.getUserInfo(senderID);
    return userInfo[senderID].name;
  } catch (error) {
    console.log(error);
    return "User";
  }
}

module.exports.run = async function({ api, event, args, Users, Threads }) {
  api.setMessageReaction("⏳", event.messageID, (err) => {}, true);
  api.sendTypingIndicator(event.threadID, true);

  const apiKey = "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";
  const url = "https://api.openai.com/v1/chat/completions";
  const senderID = event.senderID;

  // Get the user's name
  const userName = await getUserName(api, senderID);
  const currentTime = moment().tz("Asia/Manila").format("MMM D, YYYY - hh:mm A"); 

  const promptMessage = `System: Act as a Messenger Chatbot. As a Chatbot you will be responsible`; 
  const blank = args.join(" ");
  const data = `User: ${args.join(" ")}\nYou: `;

  if (blank.length < 2) {
    api.sendMessage("Hello! how may assist you today?", event.threadID, event.messageID);
    api.setMessageReaction("✅", event.messageID, (err) => {}, true);
  } else {
      api.sendMessage("Searching for: "+args.join(" "), event.threadID, event.messageID)
    try {
      const response = await axios.post(
        url,
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: promptMessage },
            { role: "user", content: data },
          ],
          temperature: 0.7,
          top_p: 0.9,
          frequency_penalty: 0,
          presence_penalty: 0,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
          },
        }
      );

      const message = response.data.choices[0].message.content;
      api.setMessageReaction("✅", event.messageID, (err) => {}, true);
      api.sendMessage(message, event.threadID, event.messageID);
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
        api.sendMessage(error.message, event.threadID);
      }
    }
  }
};