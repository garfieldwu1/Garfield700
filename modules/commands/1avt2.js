module.exports.config = {
  name: 'avatar2',
  version: '1.0.0',
  hasPermssion: 0,
  cooldowns: 5,
  commandCategory: 'edited images/meme',
  description: 'Generate personalized avatar by giving information needed.',
  usages: '< avatar ID (1-800) > | < color name > | < name > | < subname > | < signature >\nsample: "avatar2 69 | pink | hadestia | hdstss | hdst"',
  dependencies: {
    'axios': '',
    'fs-extra': ''
  },
  credits: 'Hadestia, Joshua Sy for API'
}

module.exports.run = async function ({ api, args, event }) {

  const { threadID, senderID, messageID } = event;
  // split each data
  const division = (args.join(' ')).split(/\s\|\s|\| | \| |\|| \|/g);
  const send = (msg) => api.sendMessage(msg, threadID, messageID);

  var avatarID = parseInt(division[0] || null);
  var color = division[1] || null;
  var name = division[2] || null;
  var subname = division[3] || null;
  var signature = division[4] || null;

  // check avatar ID (should be equal to 1 - 800);
  if (!avatarID) {
    return send('Invalid Avatar ID, avatar id must be a number ranges 1 to 800');
  } else {
    if (avatarID < 1) {
      return send('Avatar ID out of range, avatar ID must be in between 1 to 800');
    } else if (avatarID > 800) {
      return send('Avatar ID out of range, avatar ID must be in between 1 to 800');
    }
  }

  if (!name) {
    return send('Couln\'t found name on your request');
  } else if (!subname) {
    return send('Couln\'t found subname on your request');
  } else if (!signature) {
    return send('Couln\'t found signature on your request');
  } else if (!color) {
    return send('Couln\'t found color on your request');
  }

  try {

    const fs = require('fs-extra');
    const axios = require('axios');
    // avatar id

    const path = `./cache/avatar2-req-${senderID}.png`;
    await axios.get(`https://api.reikomods.repl.co/canvas/avatar?id=${avatarID - 1}&name=${name}&signature=${signature}&subname=${subname}&color=${color}`, { responseType: 'arraybuffer' }).then((res) => {
      const data = res.data;

      fs.writeFileSync(path, Buffer.from(data, 'utf-8'));
      return api.sendMessage(
        {
          body: '',
          attachment: fs.createReadStream(path)
        },
        threadID,
        (err, info) => {
          if (err) {
            console.log(err)
            return send(err);
          }
          fs.unlinkSync(path);
        },
        messageID
      );
    }).catch((err) => {
      return send(err);
    });

  } catch (error) {
    console.log(error);
    api.sendMessage(error, threadID, messageID);
  }

}