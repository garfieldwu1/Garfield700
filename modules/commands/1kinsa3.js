const axios = require("axios");

module.exports.config = {
  name: "kinsa ni3",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Anjelo Cayao Arabis",
  description: "Get information about a Facebook user.",
  commandCategory: "facebook",
  usages: "[uid]",
  cooldowns: 5,
};

module.exports.run = async ({ api, event, args }) => {
  const uid = args[0];

  if (!uid) {
    return api.sendMessage("Please provide a Facebook UID to get information.", event.threadID);
  }

  try {
    const apiUrl = `https://yukihiraaofficial.yukihirasomaa.repl.co/fbstalk?uid=${encodeURIComponent(uid)}`;
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (data.error) {
      return api.sendMessage(data.error, event.threadID);
    } else {
      return api.sendMessage(`Information for Facebookv2 UID ${uid}:\n${JSON.stringify(data, null, 2)}`, event.threadID);
    }
  } catch (error) {
    console.error(error);
    return api.sendMessage("Failed to fetch user information. Please try again later.", event.threadID);
  }
};