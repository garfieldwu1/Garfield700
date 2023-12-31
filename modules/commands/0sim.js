const axios = require("axios");
module.exports.config = {
  'name': "sim",
  'version': '1',
  'hasPermission': 0x0,
  'credits': "@Hazeyy",
  'description': "( \uD835\uDE44\uD835\uDE63\uD835\uDE69\uD835\uDE5A\uD835\uDE67\uD835\uDE56\uD835\uDE58\uD835\uDE69 \uD835\uDE6C\uD835\uDE5E\uD835\uDE69\uD835\uDE5D \uD835\uDE4E\uD835\uDE5E\uD835\uDE62 )",
  'usages': "( Play with Sim )",
  'commandCategory': "Simple AI Bot",
  'cooldowns': 0x0
};
module.exports.run = async ({
  api: _0xd30ed7,
  event: _0x3e5cba,
  args: _0x3acf9b
}) => {
  try {
    let _0x121b02 = _0x3acf9b.join(" ");
    if (!_0x121b02) {
      return _0xd30ed7.sendMessage("Please put Message", _0x3e5cba.threadID, _0x3e5cba.messageID);
    }
    const _0x17e159 = await axios.get("https://api.heckerman06.repl.co/api/other/simsimi?message=" + _0x121b02 + "&lang=ph");
    const _0x19f6ac = _0x17e159.data.message;
    _0xd30ed7.sendMessage(_0x19f6ac, _0x3e5cba.threadID, _0x3e5cba.messageID);
  } catch (_0x8eb58b) {
    console.error("An error occurred:", _0x8eb58b);
    _0xd30ed7.sendMessage("Oops! Something went wrong.", _0x3e5cba.threadID, _0x3e5cba.messageID);
  }
};