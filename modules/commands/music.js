const axios = require('axios');
const fs = require("fs-extra");
const os = require('os');
const yts = require('yt-search');
const ytdl = require("@distube/ytdl-core");
const musicStates = {};
module.exports.config = {
  'name': "music",
  'version': "1.0.0",
  'hasPermission': 0x0,
  'credits': "Kshitiz",
  'description': 'music',
  'commandCategory': "18+",
  'usages': "music on / music off",
  'cooldowns': 0x5,
  'dependencies': {
    'request': '',
    'fs-extra': '',
    'axios': ''
  }
};
module.exports.run = async ({
  api: _0x102bb5,
  event: _0x168c3d,
  args: _0x261127
}) => {
  try {
    const _0xbd2cd0 = _0x168c3d.threadID;
    const _0x246d38 = _0x261127[0x0];
    if (_0x246d38 === 'on') {
      if (!musicStates[_0xbd2cd0]) {
        musicStates[_0xbd2cd0] = {
          'isEnabled': true,
          'intervalId': null,
          'sentMusic': []
        };
        _0x102bb5.sendMessage("\uD835\uDDE5\uD835\uDDEE\uD835\uDDFB\uD835\uDDF1\uD835\uDDFC\uD835\uDDFA \uD835\uDDFA\uD835\uDE02\uD835\uDE00\uD835\uDDF6\uD835\uDDF0 \uD835\uDE01\uD835\uDDFF\uD835\uDDEE\uD835\uDDF0\uD835\uDDF8\uD835\uDE00 \uD835\uDDEE\uD835\uDDFF\uD835\uDDF2 \uD835\uDDFB\uD835\uDDFC\uD835\uDE04 \uD835\uDDF2\uD835\uDDFB\uD835\uDDEE\uD835\uDDEF\uD835\uDDF9\uD835\uDDF2\uD835\uDDF1.", _0xbd2cd0);
        sendRandomMusic(_0x102bb5, _0x168c3d);
        startSendingRandomMusic(_0x102bb5, _0x168c3d);
      } else if (musicStates[_0xbd2cd0].isEnabled) {
        _0x102bb5.sendMessage("\uD835\uDDE5\uD835\uDDEE\uD835\uDDFB\uD835\uDDF1\uD835\uDDFC\uD835\uDDFA \uD835\uDDFA\uD835\uDE02\uD835\uDE00\uD835\uDDF6\uD835\uDDF0 \uD835\uDE01\uD835\uDDFF\uD835\uDDEE\uD835\uDDF0\uD835\uDDF8\uD835\uDE00 \uD835\uDDEE\uD835\uDDFF\uD835\uDDF2 \uD835\uDDEE\uD835\uDDF9\uD835\uDDFF\uD835\uDDF2\uD835\uDDEE\uD835\uDDF1\uD835\uDE06 \uD835\uDDF2\uD835\uDDFB\uD835\uDDEE\uD835\uDDEF\uD835\uDDF9\uD835\uDDF2\uD835\uDDF1 \uD835\uDDF6\uD835\uDDFB \uD835\uDE01\uD835\uDDF5\uD835\uDDF6\uD835\uDE00 \uD835\uDE01\uD835\uDDF5\uD835\uDDFF\uD835\uDDF2\uD835\uDDEE\uD835\uDDF1.", _0xbd2cd0);
      }
    } else if (_0x246d38 === "off") {
      if (musicStates[_0xbd2cd0] && musicStates[_0xbd2cd0].isEnabled) {
        musicStates[_0xbd2cd0].isEnabled = false;
        clearInterval(musicStates[_0xbd2cd0].intervalId);
        _0x102bb5.sendMessage("\uD835\uDDE5\uD835\uDDEE\uD835\uDDFB\uD835\uDDF1\uD835\uDDFC\uD835\uDDFA \uD835\uDDFA\uD835\uDE02\uD835\uDE00\uD835\uDDF6\uD835\uDDF0 \uD835\uDE01\uD835\uDDFF\uD835\uDDEE\uD835\uDDF0\uD835\uDDF8\uD835\uDE00 \uD835\uDDEE\uD835\uDDFF\uD835\uDDF2 \uD835\uDDFB\uD835\uDDFC\uD835\uDE04 \uD835\uDDF1\uD835\uDDF6\uD835\uDE00\uD835\uDDEE\uD835\uDDEF\uD835\uDDF9\uD835\uDDF2\uD835\uDDF1 \uD835\uDDF6\uD835\uDDFB \uD835\uDE01\uD835\uDDF5\uD835\uDDF6\uD835\uDE00 \uD835\uDE01\uD835\uDDF5\uD835\uDDFF\uD835\uDDF2\uD835\uDDEE\uD835\uDDF1.", _0xbd2cd0);
      } else {
        _0x102bb5.sendMessage("\uD835\uDDE5\uD835\uDDEE\uD835\uDDFB\uD835\uDDF1\uD835\uDDFC\uD835\uDDFA \uD835\uDDFA\uD835\uDE02\uD835\uDE00\uD835\uDDF6\uD835\uDDF0 \uD835\uDE01\uD835\uDDFF\uD835\uDDEE\uD835\uDDF0\uD835\uDDF8\uD835\uDE00 \uD835\uDDEE\uD835\uDDFF\uD835\uDDF2 \uD835\uDDEE\uD835\uDDF9\uD835\uDDFF\uD835\uDDF2\uD835\uDDEE\uD835\uDDF1\uD835\uDE06 \uD835\uDDF1\uD835\uDDF6\uD835\uDE00\uD835\uDDEE\uD835\uDDEF\uD835\uDDF9\uD835\uDDF2\uD835\uDDF1 \uD835\uDDF6\uD835\uDDFB \uD835\uDE01\uD835\uDDF5\uD835\uDDF6\uD835\uDE00 \uD835\uDE01\uD835\uDDF5\uD835\uDDFF\uD835\uDDF2\uD835\uDDEE\uD835\uDDF1.", _0xbd2cd0);
      }
    } else {
      _0x102bb5.sendMessage("\uD835\uDDDC\uD835\uDDFB\uD835\uDE03\uD835\uDDEE\uD835\uDDF9\uD835\uDDF6\uD835\uDDF1 \uD835\uDDF0\uD835\uDDFC\uD835\uDDFA\uD835\uDDFA\uD835\uDDEE\uD835\uDDFB\uD835\uDDF1. \uD835\uDDE7\uD835\uDE06\uD835\uDDFD\uD835\uDDF2 '\uD835\uDDFA\uD835\uDE02\uD835\uDE00\uD835\uDDF6\uD835\uDDF0 \uD835\uDDFC\uD835\uDDFB' \uD835\uDE01\uD835\uDDFC \uD835\uDE00\uD835\uDE01\uD835\uDDEE\uD835\uDDFF\uD835\uDE01, \uD835\uDDEE\uD835\uDDFB\uD835\uDDF1 '\uD835\uDDFA\uD835\uDE02\uD835\uDE00\uD835\uDDF6\uD835\uDDF0 \uD835\uDDFC\uD835\uDDF3\uD835\uDDF3' \uD835\uDE01\uD835\uDDFC \uD835\uDE00\uD835\uDE01\uD835\uDDFC\uD835\uDDFD.", _0xbd2cd0);
    }
  } catch (_0x2df54b) {
    console.error("[ERROR]", _0x2df54b);
    _0x102bb5.sendMessage("\uD835\uDDD4\uD835\uDDFB \uD835\uDDF2\uD835\uDDFF\uD835\uDDFF\uD835\uDDFC\uD835\uDDFF \uD835\uDDFC\uD835\uDDF0\uD835\uDDF0\uD835\uDE02\uD835\uDDFF\uD835\uDDFF\uD835\uDDF2\uD835\uDDF1 \uD835\uDE04\uD835\uDDF5\uD835\uDDF6\uD835\uDDF9\uD835\uDDF2 \uD835\uDDFD\uD835\uDDFF\uD835\uDDFC\uD835\uDDF0\uD835\uDDF2\uD835\uDE00\uD835\uDE00\uD835\uDDF6\uD835\uDDFB\uD835\uDDF4 \uD835\uDE01\uD835\uDDF5\uD835\uDDF2 \uD835\uDDF0\uD835\uDDFC\uD835\uDDFA\uD835\uDDFA\uD835\uDDEE\uD835\uDDFB\uD835\uDDF1", _0x168c3d.threadID, _0x168c3d.messageID);
  }
};
function startSendingRandomMusic(_0x5b9332, _0x58c4e8) {
  const _0x37c5c1 = _0x58c4e8.threadID;
  musicStates[_0x37c5c1].intervalId = setInterval(() => {
    sendRandomMusic(_0x5b9332, _0x58c4e8);
  }, 240000);
}
async function sendRandomMusic(_0x56c3ac, _0x1eae3d) {
  try {
    const _0x37715f = _0x1eae3d.threadID;
    const _0x25b6d7 = _0x1eae3d.senderID;
    const _0x4cfd1f = await _0x56c3ac.sendMessage("\uD835\uDDF9\uD835\uDDFC\uD835\uDDEE\uD835\uDDF1\uD835\uDDF6\uD835\uDDFB\uD835\uDDF4 \uD835\uDDEE \uD835\uDDFF\uD835\uDDEE\uD835\uDDFB\uD835\uDDF1\uD835\uDDFC\uD835\uDDFA \uD835\uDDFA\uD835\uDE02\uD835\uDE00\uD835\uDDF6\uD835\uDDF0 \uD835\uDDFD\uD835\uDDF9\uD835\uDDF2\uD835\uDDEE\uD835\uDE00\uD835\uDDF2 \uD835\uDE04\uD835\uDDEE\uD835\uDDF6\uD835\uDE01....\uD83C\uDFB5", _0x37715f, null, _0x1eae3d.messageID);
    const _0x472ebd = ["PLMC9KNkIncKseYxDN2niH6glGRWKsLtde", "PLCiXFxWx8d2D0LdsRd4gqe2Oe46gnA6qV", "PLCiXFxWx8d2DfXUVW0xH3G_Fnc_lZN8O8"];
    const _0x4053b1 = _0x472ebd[Math.floor(Math.random() * _0x472ebd.length)];
    const _0x4227f2 = "https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyAO1tuGus4-S8RJID51f8WJAM7LXz1tVNc&playlistId=" + _0x4053b1 + "&part=contentDetails&maxResults=50";
    const _0x126f37 = await axios.get(_0x4227f2);
    const _0x192d8c = _0x126f37.data.items;
    const _0x3c9038 = _0x192d8c.map(_0x58abcf => _0x58abcf.contentDetails.videoId);
    if (musicStates[_0x37715f].isEnabled && musicStates[_0x37715f].intervalId) {
      if (!musicStates[_0x37715f].sentMusic) {
        musicStates[_0x37715f].sentMusic = [];
      }
      if (musicStates[_0x37715f].sentMusic.length === _0x3c9038.length) {
        musicStates[_0x37715f].sentMusic.length = 0x0;
      }
      const _0x4189d2 = _0x3c9038.filter(_0xe9dce0 => !musicStates[_0x37715f].sentMusic.includes(_0xe9dce0));
      if (_0x4189d2.length === 0x0) {
        _0x56c3ac.unsendMessage(_0x4cfd1f.messageID);
        return _0x56c3ac.sendMessage("No unwatched music tracks left.", _0x37715f, null, _0x1eae3d.messageID);
      }
      const _0x3bef28 = _0x4189d2[Math.floor(Math.random() * _0x4189d2.length)];
      musicStates[_0x37715f].sentMusic.push(_0x3bef28);
      const _0x2f7d52 = "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAO1tuGus4-S8RJID51f8WJAM7LXz1tVNc&id=" + _0x3bef28 + '&part=snippet';
      const _0x4e8bed = await axios.get(_0x2f7d52);
      const _0x487a0d = _0x4e8bed.data.items[0x0].snippet;
      const _0x278f3a = _0x487a0d.title;
      const _0x2cdfa1 = os.tmpdir() + "/randomMusicTitle.txt";
      fs.writeFileSync(_0x2cdfa1, _0x278f3a);
      const _0x584893 = await yts(_0x278f3a);
      if (!_0x584893.videos.length) {
        _0x56c3ac.unsendMessage(_0x4cfd1f.messageID);
        return _0x56c3ac.sendMessage("No music track found based on the search title.", _0x37715f, null, _0x1eae3d.messageID);
      }
      const _0x5c9d37 = _0x584893.videos[0x0];
      const _0x239a10 = _0x5c9d37.url;
      const _0x375452 = ytdl(_0x239a10, {
        'filter': "audioonly"
      });
      const _0x1aab72 = _0x25b6d7 + ".mp3";
      const _0xfd7c60 = __dirname + ("/cache/" + _0x1aab72);
      _0x375452.pipe(fs.createWriteStream(_0xfd7c60));
      _0x375452.on("response", () => {
        console.info('[DOWNLOADER]', "Starting download now!");
      });
      _0x375452.on("info", _0x3c2445 => {
        console.info('[DOWNLOADER]', "Downloading music: " + _0x3c2445.videoDetails.title);
      });
      _0x375452.on("end", () => {
        console.info("[DOWNLOADER] Downloaded");
        if (fs.statSync(_0xfd7c60).size > 0x1900000) {
          fs.unlinkSync(_0xfd7c60);
          _0x56c3ac.unsendMessage(_0x4cfd1f.messageID);
          return _0x56c3ac.sendMessage("\u274C | The file could not be sent because it is larger than 25MB.", _0x37715f, null, _0x1eae3d.messageID);
        }
        const _0x22eb03 = {
          'body': "\uD83C\uDFB5 | Here's the random music track:\n\n\uD83D\uDD2E | Title: " + _0x278f3a + "\n\u23F0| Duration: " + _0x5c9d37.duration.timestamp,
          'attachment': fs.createReadStream(_0xfd7c60)
        };
        _0x56c3ac.sendMessage(_0x22eb03, _0x37715f, null, _0x1eae3d.messageID, () => {
          fs.unlinkSync(_0xfd7c60);
        });
        setTimeout(() => {
          _0x56c3ac.unsendMessage(_0x4cfd1f.messageID);
        }, 0x2710);
      });
    }
  } catch (_0x36f524) {
    console.error('[ERROR]', _0x36f524);
    _0x56c3ac.sendMessage("An error occurred while processing the command.", _0x1eae3d.threadID, _0x1eae3d.messageID);
  }
}