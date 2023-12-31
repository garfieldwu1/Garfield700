module.exports.config = {
  name: 'circletext',
  version: '1.0.0',
  hasPermssion: 0,
  credits: 'Spiritエーアイ//modified by Jonell Magallanes',
  description: 'Converts text into Bold Font',
  commandCategory: 'TOOL',
  usePrefix: true,
  usages: '<input>',
  cooldowns: 5,
};

module.exports.run = async ({ event, api, args }) => {
  const inputText = args.join(' ').toLowerCase();

  const fontMap = {
    ' ': ' ', 'a': 'Ⓐ', 'b': 'Ⓑ', 'c': 'Ⓒ', 'd': 'Ⓓ', 'e': 'Ⓔ', 'f': 'Ⓕ', 'g': 'Ⓖ', 'h': 'Ⓗ',
    'i': 'Ⓘ', 'j': 'Ⓙ', 'k': 'Ⓚ', 'l': 'Ⓛ', 'm': 'Ⓜ', 'n': 'Ⓝ', 'o': 'Ⓞ', 'p': 'Ⓟ', 'q': 'Ⓠ',
    'r': 'Ⓡ', 's': 'Ⓢ', 't': 'Ⓣ', 'u': 'Ⓤ', 'v': 'Ⓥ', 'w': 'Ⓦ', 'x': 'Ⓧ', 'y': 'Ⓨ', 'z': 'Ⓩ',
  };

  const outputText = inputText
    .split('')
    .map(char => fontMap[char] || char) // Replace characters with stylized versions
    .join('');

  return api.sendMessage(outputText, event.threadID, event.messageID);
};