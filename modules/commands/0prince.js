const axios = require("axios");

module.exports.config = {
  name: "prince", 
  version: "1.0.1",
  hasPermission: 0,
  credits: "JOHN RÉ PORAS/Modified by Prince Sanel Osorio",
  description: "Chat with PRINCE BOT.",
  commandCategory: "AI",
  usages: "/prince [query]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  let { threadID, messageID, senderID } = event;

  // Function to get the user's name
  const getUserInfo = async (api, userID) => {
    try {
      const userInfo = await api.getUserInfo(userID);
      return userInfo[userID].name;
    } catch (error) {
      console.error(`Error fetching user info: ${error}`);
      return "";
    }
  };

  // Ito yung function to determine the bot's emotion based on the response content
  const getBotEmotion = () => {
    const positiveEmojis = ["😄", "😊", "🙂", "🤩", "👋"];
    const neutralEmojis = ["😐", "😶", "🤔","🙃","🤸"];
    const negativeEmojis = ["😔", "🙁", "😞", "😢", "😡"];

    const allEmojis = [...positiveEmojis, ...neutralEmojis, ...negativeEmojis];
    return allEmojis[Math.floor(Math.random() * allEmojis.length)];
  };

    // ito naman is to handle lower responses
  const handleLowerResponse = (userQuery, userInfo) => {
    const lowerResponses = [
      { queries: ["do you know me?", "who am i", "what is my name"], response: `Yes, I know you, ${userInfo}. How can I assist you today?` },
      { queries: ["who are you?", "what's your name", "who are you"], response: `I am Prince Bot, a ChatGPT AI. How may I help you, ${userInfo}?` },
      { queries: ["who made you?", "sino gumawa sayo?","who creates you?"], response: `${global.config.OWNER}, created me and I'm a ChatGPT Ai.` },
      { queries: ["sino ako?", "kilala mo ba ako?", "kilala moko?"], response: `Oo kilala kita ikaw si {userInfo}, anong problema mo?!?` },
      { queries: ["sino ka?", "anong pangalan mo?", "what's your name?"], response: `I am Prince Bot, a ChatGPT AI and created by ${global.config.OWNER}. How may I help you, ${userInfo}?` },
      { queries: ["how are you?", "kamusta ka?"], response: `${userInfo}, Thank you for asking me like that, btw I'm fine..` },
      { queries: ["anong ginagawa mo?", "what are you doing?"], response: `${userInfo}, Thank you for asking me like that, I'm just helping people.` },
      { queries: ["sino owner mo?", "who is your owner?"], response: `My creator and owner is ${global.config.OWNER} as an Ai, my responsibility is to help you.` },
    ];

    for (const lowerResponse of lowerResponses) {
      for (const query of lowerResponse.queries) {
        if (userQuery.toLowerCase().includes(query)) {
          return lowerResponse.response;
        }
      }
    }

    return null;
  };

  // Ito naman yung function to check if the query contains personal questions or queries para malimit. You can also add more keywords.
  const isPersonalQuestion = (query) => {
    const personalKeywords = [
      "friend",
      "mother's name",
      "address",
      "phone number",
      "emotions",
      "live",
      "came from",
      "age",
    ];

    for (const keyword of personalKeywords) {
      if (query.toLowerCase().includes(keyword)) {
        return true;
      }
    }

    return false;
  };

  // Natural language variations for responses. Of course this is just an example, you can edit all of this shit or add ka pa ng marami, gan'yan ka eh diba?Djok lang hahhaha //
  const responsesVariations = [
    "Hmmm 🤔,",
    "Hmm, let me think 🧐,",
    "You know,",
    "Ah, I see 👀,",
    "Ganito yan,",
    "Ah,",
    "Oh,",
    "ito sagot ko,"
  ];

  try {
    if (args.length === 0) {
      const greetings = ["Hello", "Hi", "Hey", "Greetings", "Kamusta??", "Blessed day"];
      const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

      const userInfo = await getUserInfo(api, senderID);

      api.sendMessage({ body: `${randomGreeting} ${userInfo}, I am Prince Bot, How may I help you?`, mentions: [{ tag: userInfo, id: senderID }] }, threadID, messageID);
      return;
    }

    const response = args.join(" ");

    const userInfo = await getUserInfo(api, senderID);
    const lowerResponse = handleLowerResponse(response, userInfo);
    if (lowerResponse) {
      api.sendMessage({ body: lowerResponse, mentions: [{ tag: userInfo, id: senderID }] }, threadID, messageID);
      return;
    }

    if (isPersonalQuestion(response)) {
      const personalResponses = [
        `I apologize, ${userInfo}. I am not programmed to provide personal information or answer personal questions.`,
        `Sorry, ${userInfo}. I am an AI assistant and I don't have access to personal information or the ability to answer personal questions.`,
        `I'm afraid I can't assist with personal questions, ${userInfo}. My purpose is to provide general knowledge and assistance.`,
        `Personal questions are beyond my capabilities, ${userInfo}. I am here to provide information and help with general inquiries.`,
        `I'm sorry, ${userInfo}, but personal questions are not within my scope. I'm here to assist with general knowledge and queries.`,
      ];

      const randomPersonalResponse = personalResponses[Math.floor(Math.random() * personalResponses.length)];

      api.sendMessage({ body: randomPersonalResponse, mentions: [{ tag: userInfo, id: senderID }] }, threadID, messageID);
      return;
    }

    // Note you need to provide your own API/Endpoint here sa baba. P'wedeng ChatGPT, or Bard or whatever. //

    const resAI = await axios.get(`https://sim.ainz-project.repl.co/others/gpt?prompt=${response}`);
    const respondAI = resAI.data.result;

    const botEmotion = getBotEmotion();

    const randomVariation = responsesVariations[Math.floor(Math.random() * responsesVariations.length)];
    const finalResponse = `${randomVariation} ${respondAI} ${botEmotion}`;

    api.sendMessage(
      {
        body: `${userInfo}, ${finalResponse}`,
        mentions: [
          {
            tag: userInfo,
            id: senderID,
          },
        ],
      },
      threadID,
      messageID
    );
  } catch (error) {
    console.log("Error in AI conversation:", error);
    api.sendMessage("🚫 An error occurred during the conversation with AI.", threadID, messageID);
  }
};
