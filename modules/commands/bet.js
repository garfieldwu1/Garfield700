module.exports.config = {
	name: "bet",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
	description: "coin trowing",
	commandCategory: "game-sp",
	usages: `Missing input\n\nHow to use?\n${global.config.PREFIX}bet <money>\n\nExample:\n${global.config.PREFIX}bet 50\n`,
	cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Currencies }) {
            let { threadID, messageID, senderID } = event;
            const slotItems = ["🐙","🦀","🐠"];
			let money = (await Currencies.getData(event.senderID)).money;
			var coin = args.join(" ");
			if (!coin) return api.sendMessage(`Missing input\n\nHow to use?\n${global.config.PREFIX}bet <money>\n\nExample:\n${global.config.PREFIX}bet 50\n\nCreated by: 𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓`, threadID, messageID);
			let win = false;
			if (isNaN(coin)|| coin.indexOf("-") !== -1) return api.sendMessage(`Your bet amount is not a number\n\nHow to use?\n${global.config.PREFIX}bet <money>\n\nExample:\n${global.config.PREFIX}bet 50\n\nCreated by: 𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓`, threadID, messageID);
			if (!coin) return api.sendMessage(`Missing input\n\nHow to use?\n${global.config.PREFIX}bet <money>\n\nExample:\n${global.config.PREFIX}bet 50\n\nCreated by: 𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓`, threadID, messageID);
			if (coin > money) return api.sendMessage(`You don't have enough money to check your balance please use ${global.config.PREFIX}money`, threadID, messageID);
			if (coin < 50) return api.sendMessage(`Your bet is too low, the minimum is 50$\n\nExample:\n${global.config.PREFIX}slot 50`, threadID, messageID);
			let number = [];
			for (i = 0; i < 3; i++) number[i] = Math.floor(Math.random() * slotItems.length);
			if (number[0] == number[1] && number[1] == number[2]) {
				money *= 9;
				win = true;
			}
				else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
					money *= 2;
					win = true;
				}
				(win) ? api.sendMessage(`🎰${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}🎰\nYou won with ${coin} dollar.`, threadID, () => Currencies.increaseMoney(senderID, parseInt(coin)), messageID) : api.sendMessage(`🎰${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}🎰\nYou lost\nthe amount you bet belongs to the house`, threadID, () => Currencies.decreaseMoney(senderID, parseInt(coin)), messageID);
}
