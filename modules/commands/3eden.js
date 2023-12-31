const axios = require('axios');

module.exports.config = {
    name: "Eden",
    version: "1.0.0",
    credits: "August Quinn",
    description: "Get a response from Eden AI",
    commandCategory: "AI",
    usages: "eden [prompt]",
    cooldowns: 5,
};

module.exports.run = async ({ api, event, args }) => {
    const prompt = args.join(" ");

    if (!prompt) {
        return api.sendMessage("Hello there, how can I assist you today?", event.threadID, event.messageID);
    }

    try {
        const response = await axios.post('https://eden.august-api.repl.co/Eden', { prompt });
        const responseData = response.data;

        api.sendMessage(`${responseData.openai.generated_text}`, event.threadID, event.messageID);
    } catch (error) {
        console.error('ERROR', error.response?.data || error.message);
        api.sendMessage('An error occurred while processing the command.', event.threadID);
    }
};
