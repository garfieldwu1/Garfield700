module.exports.config = {
  name: "checkmsg",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SenProject/Adjusted by Draffodils",
  description: "interactive check",
  commandCategory: "Utilities",
  usages: "checktt",
  cooldowns: 15,
  dependencies: {
    "fs-extra": ""
  }
}

const path = __dirname + '/count-by-thread/';

module.exports.onLoad = () => {
    const fs = require('fs');
    if (!fs.existsSync(path) || !fs.statSync(path).isDirectory()) {
        fs.mkdirSync(path, { recursive: true });
    }
}

module.exports.handleEvent = function ({ event }) {
    const { messageID, threadID, senderID } = event;
    if (!global.data.allThreadID.some(tid => tid == threadID)) return;
    const fs = global.nodemodule['fs'];
    const threadPath = path + threadID + '.json';
    if (!fs.existsSync(threadPath) || fs.statSync(threadPath).isDirectory()) {
        fs.writeFileSync(threadPath, JSON.stringify({}, null, 4));
    }
    const getThreadJSON = JSON.parse(fs.readFileSync(threadPath)) || {};
    if (!getThreadJSON.hasOwnProperty(senderID)) {
        getThreadJSON[senderID] = 0;
    }
    getThreadJSON[senderID]++;
    fs.writeFileSync(threadPath, JSON.stringify(getThreadJSON, null, 4));
}


 const getRankName = count => {
    return count > 10000000 ? '🥇???🥇'
    :count > 500000 ? '🥈Unbeatable🥈'
        : count > 300000 ? '🥉Impossible🥉'
            : count > 113000 ? '🏆Radiant III🏆'
                : count > 90000? '♟Radiant II♟'
                    : count > 75000 ? '♣Radiant I♣'
                        : count > 60000 ? '♥Legendary♥'
                            : count > 50000 ? '♠Advanced GrandMasterer  V♠'
                                : count > 40000 ? '🎲Advanced GrandMasterer  IV🎲'
                                    : count > 3000 ? '🥊Advanced GrandMasterer  III🥊'
                                        : count > 24000 ? '🎗Advanced GrandMasterer II🎗'
                                            : count > 19000 ? '✨Advanced GrandMasterer I✨'
                                                : count > 18000 ? '🎖Mythical Glory V🎖'
                                                    : count > 17700 ? '🎀Mythical Glory IV🎀'
                                                        : count > 17500 ? '🎈Mythical Glory III🎈'
                                                            : count > 17300 ? '🎊Mythical Glory II🎊'
                                                                : count > 17000 ? '🪅Mythical Glory I🪅'
                                                                    : count > 16700 ? '🪄Supreme Overlord - Ultimate Grandmaster🪄 '
                                                                        : count > 14900 ? '✴Prestige V - Godlike✴'
                                                                            : count > 11060 ? '🟢Platinum I - Prestige IV🟢'
                                                                                : count > 5930 ? '🟡Grandmaster II - Omega III🟡'
                                                                                    : count > 1540 ? '🟠Master IV - Grandmaster II🟠'
                                                                                        : count > 740 ? '🔴Master I - III🔴'
                                                                                            : count > 730 ? '🔵Elite V - Pro V🔵'
                                                                                                : count > 245 ? '⚫Rookie V - Elite IV⚫'
                                                                                                    : '🟤Rookie I - IV🟤'
}



module.exports.run = async function ({ api, event, args, Users }) {
    const fs = global.nodemodule['fs'];
    const { messageID, threadID, senderID, mentions } = event;
    const threadPath = path + threadID + '.json';
    if (!fs.existsSync(threadPath) || fs.statSync(threadPath).isDirectory()) {
        fs.writeFileSync(threadPath, JSON.stringify({}, null, 4));
    }
    const query = args[0] ? args[0].toLowerCase() : '';
    const getThreadJSON = JSON.parse(fs.readFileSync(threadPath)) || {};
    if (!getThreadJSON.hasOwnProperty(senderID)) {
        getThreadJSON[senderID] = 1;
    }
    var storage = [],
        msg = '';
    if (query == 'all') {
        const allThread = await api.getThreadInfo(threadID) || { participantIDs: [] };
        for (id of allThread.participantIDs) {
            if (!getThreadJSON.hasOwnProperty(id)) {
                getThreadJSON[id] = 0;
            }
        }
    }
    for (const id in getThreadJSON) {
        const name = await Users.getNameUser(id);
        storage.push({ id, name, count: getThreadJSON[id] });
    }
    storage.sort((a, b) => {
        if (a.count > b.count) return -1;
        else if (a.count < b.count) return 1;
        else return a.name.localeCompare(b.name);
    });
    if (query == 'all') {
        let count = 1;
        msg += '===CHECKTT===';
        for (const user of storage) {
            msg += `\n${count++}. ${user.name} - ${user.count}`;
        }
    } else if (query == 'rank') {
        msg += '0 msgs)\nGold 4 (2500 msgs)\nPlatinum 1 (2900 8000 msgs)\nMaster (9000 msgs)\nWar Generals (50000 msgs)'
    } else if (!query) {
        let userID = senderID;
        if (Object.keys(mentions).length > 0) {
            userID = mentions[0];
        }
        const rankUser = storage.findIndex(e => e.id == userID);
        msg += `${userID == senderID ? 'જ 💠Friend' : storage[rankUser].name} ranked ${rankUser + 1}\n  જ 💌Number of messages: ${storage[rankUser].count}\n જ 🔰𝚁𝚊𝚗𝚔  ${getRankName(storage[rankUser].count)}`;
    }
    api.sendMessage(msg, threadID);
    return;
}