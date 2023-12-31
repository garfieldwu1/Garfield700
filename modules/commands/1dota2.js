const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports.config = {
  name: 'dota2',
  version: '1.0',
  hasPermission: 0,
  credits: 'HVCKER',
  usePrefix: true,
  description: 'Random dota2 Video',
  commandCategory: 'General',
  cooldowns: 2,
};

module.exports.run = async ({ api, event }) => {
  try {
    api.sendMessage('Just a sec, I\'m sending your video at the speed of light!', event.threadID);

    const response = await axios.get('https://dota-api.yodi-iyods.repl.co/api/?apikey=dota');
    const videoInfo = response.data;

    const videoUrl = videoInfo.url;


    const videoStreamResponse = await axios.get(videoUrl, { responseType: 'stream' });
    const videoData = videoStreamResponse.data;


    const tempFilePath = 'temp_video.mp4';
    const writeStream = fs.createWriteStream(tempFilePath);
    videoData.pipe(writeStream);

    writeStream.on('finish', () => {

      const message = {
        body: 'Here is your random Dota 2 video:',
        attachment: fs.createReadStream(tempFilePath),
      };

      api.sendMessage(message, event.threadID, () => {

        fs.unlink(tempFilePath, (err) => {
          if (err) {
            console.error('Error deleting temporary file:', err);
          }
        });
      });
    });
  } catch (error) {
    console.error('Error fetching or sending the video:', error);
    api.sendMessage('Error sending the video.', event.threadID, event.messageID);
  }
};