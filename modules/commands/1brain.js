module.exports.config = {
    name: "brainv2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Hazeyy",
    description: "( 𝘾𝙝𝙖𝙩 𝙬𝙞𝙩𝙝 𝘽𝙧𝙖𝙞𝙣 𝘼𝙄 )",
    commandCategory: "fun",
    usages: "( Powered By BrainShop AI )",
    cooldowns: 2
};

const axios = require("axios");

module.exports.run = async ({ api, event, args }) => {
    const text = encodeURIComponent(args.join(" "));
    const chatId = encodeURIComponent(event.threadID);

    try {
        const response = await axios.get(`https://hazeyy-api.kyrinwu.repl.co/chatbot/brainshop?text=${text}&chatid=${chatId}`);
        console.log("API Response:", response.data); // Add this line to log the API response

        const jsonData = response.data;
        if (jsonData && jsonData.status && jsonData.result) {
            const resultData = jsonData.result;
          api.sendMessage('🔍𝘈𝘯𝘴𝘸𝘦𝘳𝘪𝘯𝘨... ', event.threadID);
            const { Id, question, answer } = resultData;
            const o = `${formatFont(answer)}`;
            const k = `${Id.replace('https://www.facebook.com/Hazeyy0', 'https://www.facebook.com/devs150')}`;
            const message = `ID: ${k}\nQuestion: ${question}\nAnswer: ${o}`;
            return api.sendMessage(message, event.threadID);
        } else {
            return api.sendMessage("😿𝖭𝗈 𝗏𝖺𝗅𝗂𝖽 𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾 𝖿𝗋𝗈𝗆 𝖡𝗋𝖺𝗂𝗇𝖲𝗁𝗈𝗉 𝖠𝖨, 𝖯𝗅𝖾𝖺𝗌𝖾 𝗍𝗋𝗒 𝖺𝗀𝖺𝗂𝗇 𝗅𝖺𝗍𝖾𝗋...", event.threadID);
        }
    } catch (error) {
        console.error("API Error:", error); // Add this line to log any API errors
        return api.sendMessage("An error occurred while fetching data from the Brainshop API.", event.threadID);
    }
}

function formatFont(text) {
  const fontMapping = {
    a: "𝖺",
    b: "𝖻",
    c: "𝖼",
    d: "𝖽",
    e: "𝖾",
    f: "𝖿",
    g: "𝗀",
    h: "𝗁",
    i: "𝗂",
    j: "𝗃",
    k: "𝗄",
    l: "𝗅",
    m: "𝗆",
    n: "𝗇",
    o: "𝗈",
    p: "𝗉",
    q: "𝗊",
    r: "𝗋",
    s: "𝗌",
    t: "𝗍",
    u: "𝗎",
    v: "𝗏",
    w: "𝗐",
    x: "𝗑",
    y: "𝗒",
    z: "𝗓",
    A: "𝖠",
    B: "𝖡",
    C: "𝖢",
    D: "𝖣",
    E: "𝖤",
    F: "𝖥",
    G: "𝖦",
    H: "𝖧",
    I: "𝖨",
    J: "𝖩",
    K: "𝖪",
    L: "𝖫",
    M: "𝖬",
    N: "𝖭",
    O: "𝖮",
    P: "𝖯",
    Q: "𝖰",
    R: "𝖱",
    S: "𝖲",
    T: "𝖳",
    U: "𝖴",
    V: "𝖵",
    W: "𝖶",
    X: "𝖷",
    Y: "𝖸",
    Z: "𝖹"
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