const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

module.exports.config = {
  name: "nword",
  version: "1.0.0",
  hasPermission: 0,
  credits: "CIEEEEELLLLLLRICK",
  usePrefix: true,
  description: "GET FREE NWORD PASS NOTE: USE IT ONLY ONE TIME!!",
  commandCategory: "Fun",
  cooldowns: 5,
};


const FIXED_IMAGE_URL = "https://i.imgflip.com/351b7j.png";

module.exports.run = async ({ api, event, args }) => {
  try {

    let senderName = args.join(' ');

    senderName = senderName.toUpperCase();

    const imageResponse = await axios.get(FIXED_IMAGE_URL, { responseType: 'arraybuffer' });
    const imageData = imageResponse.data;


    const cacheFolderPath = path.join(__dirname, 'cache');
    if (!fs.existsSync(cacheFolderPath)) {
      fs.mkdirSync(cacheFolderPath);
    }
    const imageFileName = `image-${senderName}.jpg`;
    const imageFilePath = path.join(cacheFolderPath, imageFileName);
    fs.writeFileSync(imageFilePath, imageData);


    const image = await loadImage(imageFilePath);

    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');


    ctx.drawImage(image, 0, 0, image.width, image.height);

    const fontSize = 30;
    const textColor = 'red';

    
    const textWidth = ctx.measureText(senderName).width;
    const positionX = (canvas.width - textWidth) / 3;
    const positionY = 260;
    //NOTE CHANGE THE CODE TO THIS IF YOU WANT TO MOVE IT HORIZONTALY
    //const positionX = 250; // Change the horizontal position of the text
    //const positionY = 260;  // Change the vertical position of the text

    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = textColor;
    ctx.fillText(` ${senderName}`, positionX, positionY);


    const modifiedImageFilePath = path.join(cacheFolderPath, `modified-${senderName}.jpg`);
    const out = fs.createWriteStream(modifiedImageFilePath);
    const stream = canvas.createJPEGStream();
    stream.pipe(out);
    out.on('finish', () => {

      api.sendMessage({ attachment: fs.createReadStream(modifiedImageFilePath) }, event.threadID, () => {

        fs.unlinkSync(modifiedImageFilePath);
      });
    });
  } catch (error) {
    console.error(error);
    api.sendMessage("Failed to generate the image. Please try again later.", event.threadID);
  }
};
