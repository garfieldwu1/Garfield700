const axios = require("axios");

module.exports.config = {
  name: "garfieldv2",
  version: "1.2.0",
  hasPermission: 0,
  credits: "Hazeyy",
  description: "( 𝙋𝙝𝙮𝙩𝙤𝙣 𝘼𝙄 )",
  commandCategory: "research",
  usages: "( Get answers from Phyton AI )",
  cooldowns: 3,
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID } = event;

  if (!args[0]) {
    api.sendMessage(" 𝖯𝗅𝖾𝖺𝗌𝖾 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝗆𝖾 𝖺 (𝖰𝗎𝖾𝗋𝗒) 𝗍𝗈 𝗌𝖾𝖺𝗋𝖼𝗁 𝗈𝗇 𝖯𝗁𝗒𝗍𝗈𝗇 𝖠𝖨...", threadID, messageID);
    return;
  }

  const query = args.join(" ");

  api.sendMessage("🔎𝙂𝙖𝙧𝙛𝙞𝙚𝙡𝙙𝙨𝙚𝙖𝙧𝙘𝙝𝙞𝙣𝙜...", threadID, messageID);

  try {
    const response = await axios.get(`https://hazeyy-api-blackbox.kyrinwu.repl.co/ask?q=${encodeURIComponent(query)}`);

    if (response.status === 200 && response.data && response.data.message) {
      const answer = response.data.message;
      const formattedAnswer = formatFont(answer); // Apply font formatting
      api.sendMessage(`𝗚𝗔𝗥𝗙𝗜𝗘𝗟𝗗:\n\n${formattedAnswer}\n\ncredits: https://www.facebook.com/markqtypie`, threadID, messageID);
    } else {
      api.sendMessage("😿 𝖲𝗈𝗋𝗋𝗒, 𝖭𝗈 𝗋𝖾𝗅𝖾𝗏𝖺𝗇𝗍 𝖺𝗇𝗌𝗐𝖾𝗋𝗌 𝖿𝗈𝗎𝗇𝖽..", threadID, messageID);
    }
  } catch (error) {
    console.error(error);
    api.sendMessage("😿 𝖴𝗇𝖾𝗑𝗉𝖾𝖼𝗍𝖾𝖽 𝖤𝗋𝗋𝗈𝗋, 𝖶𝗁𝗂𝗅𝖾 𝗌𝖾𝖺𝗋𝖼𝗁𝗂𝗇𝗀 𝖺𝗇𝗌𝗐𝖾𝗋 𝗈𝗇 𝖯𝗁𝗒𝗍𝗈𝗇 𝖠𝖨...", threadID, messageID);
    return;
  }
};

function formatFont(text) {
    const fontMapping = {
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    e: "e",
    f: "f",
    g: "g",
    h: "h",
    i: "i",
    j: "j",
    k: "k",
    l: "l",
    m: "m",
    n: "n",
    o: "o",
    p: "p",
    q: "q",
    r: "r",
    s: "s",
    t: "t",
    u: "u",
    v: "v",
    w: "w",
    x: "x",
    y: "y",
    z: "z",
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    E: "E",
    F: "F",
    G: "G",
    H: "H",
    I: "I",
    J: "J",
    K: "K",
    L: "L",
    M: "M",
    N: "N",
    O: "O",
    P: "P",
    Q: "Q",
    R: "R",
    S: "S",
    T: "T",
    U: "U",
    V: "V",
    W: "W",
    X: "X",
    Y: "Y",
    Z: "Z"
  };

  let formattedText = "";
  for (const char of text) {
    if (char in fontMapping) {
      formattedText += fontMapping[char];
    } else {
      formattedText += char;
    }
  }
  return formattedText;
}
