module.exports.config = {
  name: "farlight",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kim Joseph DG Bien",
  description: "Random Farlight video from TikTok",
  commandCategory: "tiktok",
  usage: "/farlight",
  cooldowns: 5,
};

const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports.run = async function({ api, event }) {
  try {
    api.sendMessage("𝐒𝐞𝐧𝐝𝐢𝐧𝐠 𝐫𝐚𝐧𝐝𝐨𝐦 𝐟𝐚𝐫𝐥𝐢𝐠𝐡𝐭 𝐯𝐢𝐝𝐞𝐨...", event.threadID);

    const response = await axios.get("https://api-1.kimjosephdgbien.repl.co/tiktok/searchvideov2?keywords=farlight");
    const videos = response.data.data.videos;

    if (!videos || videos.length === 0) {
      api.sendMessage("No Farlight videos found.", event.threadID);
      return;
    }

    const videoData = videos[0];
    const message = `𝐓𝐢𝐤𝐭𝐨𝐤 𝐫𝐞𝐬𝐮𝐥:\n\n𝐏𝐨𝐬𝐭 𝐛𝐲: ${videoData.author.nickname}\n𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞: ${videoData.author.unique_id}\n\n𝐓𝐢𝐭𝐥𝐞: ${videoData.title}`;

    const videoUrl = videoData.play;
    const videoName = "farlight_video.mp4"; // You can customize the video filename here
    const videoFilePath = path.join(__dirname, videoName);

    const videoResponse = await axios({
      method: 'get',
      url: videoUrl,
      responseType: 'stream'
    });

    const writer = fs.createWriteStream(videoFilePath);
    videoResponse.data.pipe(writer);

    writer.on('finish', () => {
      api.sendMessage(
        { body: message, attachment: fs.createReadStream(videoFilePath) },
        event.threadID,
        () => fs.unlinkSync(videoFilePath)
      );
    });
  } catch (error) {
    console.error('Error:', error);
    api.sendMessage("An error occurred while processing the request.", event.threadID);
  }
};