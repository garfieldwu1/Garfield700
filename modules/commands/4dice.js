module.exports.config = {
  name: "dice",
  version: "1.0.2",
  hasPermission: 0,
  credits: "Â»Prince Sanel Osorio",
  description: "Dice rolling",
  commandCategory: "game-sp",
  usages: `Missing input\n\nHow to use?\n${global.config.PREFIX}dice <bet>\n\nExample:\n${global.config.PREFIX}dice 100\n`,
  cooldowns: 5,
};

module.exports.languages = {
  "en": {
    "missingInput": `How to use?\n${global.config.PREFIX}dice <bet>\n\nExample:\n${global.config.PREFIX}dice 50`,
    "moneyBetNotEnough": `You don't have enough money to check your balance. Please use ${global.config.PREFIX}money`,
    "limitBet": `Your bet is too low. The minimum is 50 💵. Example:\n${global.config.PREFIX}dice 50`,
    "returnWin": "ðŸŽ² You won %2 💵 result of %1",
    "returnLose": "ðŸŽ² You lose %2 💵 result of %1"
  }
}

module.exports.run = async function({ api, event, args, Currencies, getText }) {
  const { threadID, messageID, senderID } = event;
  const { getData, increaseMoney, decreaseMoney } = Currencies;
  const diceFaces = ["1", "2", "3", "4", "5", "6"];
  const moneyUser = (await getData(senderID)).money;

  const betAmount = parseInt(args[0]);
  if (isNaN(betAmount) || betAmount <= 0) {
    return api.sendMessage(getText("missingInput"), threadID, messageID);
  }

  if (betAmount > moneyUser) {
    return api.sendMessage(getText("moneyBetNotEnough"), threadID, messageID);
  }

  if (betAmount < 50) {
    return api.sendMessage(getText("limitBet"), threadID, messageID);
  }
  if (betAmount > 8001) {
    return api.sendMessage("Only minimum bet is 8000 💵.", threadID, messageID);
  }

  api.sendMessage('Rolling the dice...', threadID, messageID);

  const diceResult = Math.floor(Math.random() * 6);
  const win = diceResult === 5;

  if (win) {
    const winnings = betAmount * 1/2;
    api.sendMessage(getText("returnWin", diceFaces[diceResult], winnings), threadID, messageID);
    await increaseMoney(senderID, winnings);
  } else {
    api.sendMessage(getText("returnLose", diceFaces[diceResult], betAmount), threadID, messageID);
    await decreaseMoney(senderID, betAmount);
  }
}