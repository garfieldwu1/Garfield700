const tabs = require("ultimate-guitar");

module.exports.config = {
  name: "chords",
  version: "1.0.0",
  hasPermssion: 0,
  credits: ".",
  description: "Search Chords",
  usePrefix: true,
  commandCategory: "...",
  cooldowns: 0
};

module.exports.run = async function({ api, event, args }) {
const { threadID, messageID } = event;
  const chords = args.join(' ');

  if (!chords) {
    return api.sendMessage('Please enter a chords.', threadID, messageID);
  } else {

    const res = await tabs.firstData(chords);

    var title = res.title;
        var chords = res.chords;
        var type = res.type;
        var key = res.key;
        var artist = res.artist;

    api.sendMessage(
          `Artist: ${artist}\nTitle: ${title}\nType: ${type}\nKey: ${key}\n——Here’s the chords——\n\n${chords}\n\n——End——`, threadID, messageID);
    } catch (err) {

      console.error("[ERR] " + err);

      api.sendMessage("[ERR] An error occurred while fetching chords.", event.threadID, event.messageID);
    }
  }
};
