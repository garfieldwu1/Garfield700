module.exports.config = {
  'name': 'lovecompatibility',
  'version': "1.0.1",
  'hasPermission': 0x0,
  'credits': "Jaylorence U Opiar",
  'description': "Calculate love compatibility between two names.",
  'usePrefix': true,
  'commandCategory': "Utility",
  'usages': `${global.config.PREFIX}lovecompatibility [name1] [name2]`,
  'cooldowns': 0x5
};
module.exports.run = function ({
  api: _0x22af79,
  event: _0x19fbdd,
  args: _0x104a28
}) {
  try {
    if (_0x104a28.length !== 0x2) {
      _0x22af79.sendMessage(`Please provide two names. Usage: ${global.config.PREFIX}lovecompatibility [name1] [name2]`, _0x19fbdd.threadID, _0x19fbdd.messageID);
      return;
    }
    const _0x521cb4 = _0x104a28[0x0];
    const _0x541ce0 = _0x104a28[0x1];
    const _0x238e81 = Math.floor(Math.random() * 0x65);
    const _0x309df8 = "\n\n      \uD83D\uDC96 Love Compatibility \uD83D\uDC96\n\n      Compatibility between " + _0x521cb4 + " and " + _0x541ce0 + ": " + _0x238e81 + "%\n\n      " + getCompatibilityMessage(_0x238e81) + "\n\n      *Credits: " + global.config.BOTOWNER + "*\n\n    ";
    _0x22af79.sendMessage({
      'body': _0x309df8
    }, _0x19fbdd.threadID, _0x19fbdd.messageID);
  } catch (_0x3e0039) {
    console.log("Error in lovecompatibility command:", _0x3e0039);
    _0x22af79.sendMessage("An error occurred while calculating love compatibility.", _0x19fbdd.threadID, _0x19fbdd.messageID);
  }
};
function getCompatibilityMessage(_0x4488a8) {
  if (_0x4488a8 >= 0x50) {
    return "Wow, that's a strong connection! You're a perfect match!";
  } else {
    if (_0x4488a8 >= 0x3c) {
      return "You two have a good chance of making it work. Keep the love alive!";
    } else {
      return _0x4488a8 >= 0x28 ? "There's potential, but it might take some effort to find common ground." : "Love is a mystery! Explore and see where your hearts take you.";
    }
  }
}