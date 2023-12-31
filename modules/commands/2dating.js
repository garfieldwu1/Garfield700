module.exports.config = {
    name: "dating",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Henry",
    description: "Tìm một người và xem xem có nên hẹn hò với họ không?",
    commandCategory: "tình yêu",
    usages: "[info/breakup]",
    cooldowns: 5
};

function msgBreakup() {
    var msg = ['𝐂𝐚𝐧 𝐭 𝐲𝐨𝐮 𝐭𝐰𝐨 𝐫𝐞𝐚𝐥𝐥𝐲 𝐦𝐚𝐤𝐞 𝐮𝐩?, 𝐋𝐞𝐭 𝐠𝐨 𝐨𝐟 𝐞𝐚𝐜𝐡 𝐨𝐭𝐡𝐞𝐫 𝐬 𝐡𝐚𝐧𝐝𝐬 𝐣𝐮𝐬𝐭 𝐥𝐢𝐤𝐞 𝐭𝐡𝐚𝐭? , 𝐃𝐨𝐞𝐬𝐧𝐭 𝐢𝐭 𝐡𝐮𝐫𝐭? 𝐘𝐞𝐬? 𝐓𝐡𝐞𝐧 𝐰𝐡𝐲 𝐝𝐨 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐠𝐢𝐯𝐞 𝐮𝐩?, 𝐅𝐨𝐫 𝐬𝐨𝐦𝐞 𝐫𝐞𝐚𝐬𝐨𝐧... 𝐜𝐚𝐧 𝐲𝐨𝐮 𝐭𝐰𝐨 𝐭𝐫𝐲? ^^, 𝐋𝐨𝐯𝐞 𝐢𝐬 𝐰𝐡𝐞𝐧 𝐭𝐰𝐨 𝐩𝐞𝐨𝐩𝐥𝐞 𝐜𝐚𝐫𝐞 𝐚𝐧𝐝 𝐭𝐚𝐤𝐞 𝐜𝐚𝐫𝐞 𝐨𝐟 𝐞𝐚𝐜𝐡 𝐨𝐭𝐡𝐞𝐫. 𝐍𝐨𝐰 𝐭𝐡𝐚𝐭 𝐛𝐨𝐭𝐡 𝐨𝐟 𝐲𝐨𝐮 𝐮𝐧𝐝𝐞𝐫𝐬𝐭𝐚𝐧𝐝 𝐰𝐡𝐚𝐭 𝐡𝐚𝐩𝐩𝐞𝐧𝐞𝐝, 𝐜𝐚𝐧 𝐲𝐨𝐮 𝐭𝐰𝐨 𝐠𝐞𝐭 𝐛𝐚𝐜𝐤 𝐭𝐨𝐠𝐞𝐭𝐡𝐞𝐫, 𝐀𝐧𝐠𝐫𝐲 𝐭𝐨 𝐥𝐨𝐯𝐞 𝐞𝐚𝐜𝐡 𝐨𝐭𝐡𝐞𝐫 𝐦𝐨𝐫𝐞, 𝐥𝐞𝐭 𝐬 𝐛𝐨𝐭𝐡 𝐦𝐚𝐤𝐞 𝐮𝐩 𝐛𝐞𝐜𝐚𝐮𝐬𝐞 𝐰𝐡𝐞𝐧 𝐰𝐞 𝐫𝐞 𝐚𝐧𝐠𝐫𝐲, 𝐰𝐞 𝐥𝐥 𝐤𝐧𝐨𝐰 𝐞𝐚𝐜𝐡 𝐨𝐭𝐡𝐞𝐫 𝐢𝐟 𝐰𝐞 𝐝𝐨𝐧 𝐭 𝐤𝐧𝐨𝐰 𝐞𝐚𝐜𝐡 𝐨𝐭𝐡𝐞𝐫. 𝐜𝐚𝐧 𝐥𝐢𝐯𝐞 𝐰𝐢𝐭𝐡𝐨𝐮𝐭 𝐞𝐚𝐜𝐡 𝐨𝐭𝐡𝐞𝐫 ']
    return msg[Math.floor(Math.random() * msg.length)];
}

function getMsg() {

    return `𝐋𝐞𝐭 𝐬 𝐚𝐥𝐥 𝐜𝐨𝐦𝐞 𝐭𝐨𝐠𝐞𝐭𝐡𝐞𝐫 𝐭𝐨 𝐜𝐨𝐧𝐠𝐫𝐚𝐭𝐮𝐥𝐚𝐭𝐞 𝐭𝐡𝐞𝐬𝐞 𝐭𝐰𝐨 𝐨𝐧 𝐡𝐚𝐩𝐩𝐢𝐧𝐞𝐬𝐬 🥰\n𝐍𝐨𝐭𝐞 :\n- 𝐘𝐨𝐮 𝐛𝐨𝐭𝐡 𝐰𝐨𝐧 𝐭 𝐛𝐞 𝐚𝐛𝐥𝐞 𝐭𝐨 𝐛𝐫𝐞𝐚𝐤 𝐮𝐩 𝐰𝐢𝐭𝐡𝐢𝐧 𝟕 𝐝𝐚𝐲𝐬 𝐨𝐟 𝐟𝐚𝐥𝐥𝐢𝐧𝐠 𝐢𝐧 𝐥𝐨𝐯𝐞\n - 𝐅𝐢𝐧𝐚𝐥𝐥𝐲, 𝐰𝐢𝐬𝐡 𝐲𝐨𝐮 𝐛𝐨𝐭𝐡 𝐚 𝐥𝐨𝐭 𝐡𝐚𝐩𝐩𝐢𝐧𝐞𝐬𝐬 𝐭𝐨𝐠𝐞𝐭𝐡𝐞𝐫`
}

module.exports.handleReaction = async function({ api, event, Threads, Users, Currencies, handleReaction }) {
    var { threadID, userID, reaction,messageID } = event;
    var { turn } = handleReaction;
    switch (turn) {
        case "match":
            api.unsendMessage(handleReaction.messageID);
            var { senderID, coin, senderInfo, type } = handleReaction;
            if (senderID != userID) return;
            await Currencies.setData(senderID, { money: coin - 20000 });
            var data = await Threads.getInfo(threadID);
            var { userInfo } = data;
            var doituong = [];
            for (var i of userInfo) {
                var uif = await Users.getInfo(i.id);
                var gender = '';
                if (uif.gender == 1) gender = "Female";
                if (uif.gender == 2) gender = "Male"; 
                if (uif.dating && uif.dating.status == true) continue;
                if (gender == type) doituong.push({ ID: i.id, name: uif.name });
            }
            if (doituong.length == 0) return api.sendMessage(`𝐒𝐨𝐫𝐫𝐲, 𝐭𝐡𝐞 𝐩𝐞𝐫𝐬𝐨𝐧 𝐲𝐨𝐮 𝐚𝐫𝐞 𝐥𝐨𝐨𝐤𝐢𝐧𝐠 𝐟𝐨𝐫 𝐢𝐬 𝐧𝐨𝐭 𝐚𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞 𝐨𝐫 𝐢𝐬 𝐚𝐥𝐫𝐞𝐚𝐝𝐲 𝐝𝐚𝐭𝐢𝐧𝐠 𝐬𝐨𝐦𝐞𝐨𝐧𝐞 𝐞𝐥𝐬𝐞 ^^`, threadID);
            var random = doituong[Math.floor(Math.random() * doituong.length)];
            var msg = {
                body: `[💏] ${senderInfo.name} - 𝐓𝐡𝐞 𝐩𝐞𝐫𝐬𝐨𝐧 𝐭𝐡𝐞 𝐬𝐲𝐬𝐭𝐞𝐦 𝐜𝐡𝐨𝐨𝐬𝐞𝐬 𝐟𝐨𝐫 𝐲𝐨𝐮 𝐢𝐬 : ${random.name}\n[💌] 𝐅𝐢𝐭: ${Math.floor(Math.random() * (80 - 30) + 30)}%\n\n𝐈𝐟 𝐛𝐨𝐭𝐡 𝐨𝐟 𝐲𝐨𝐮 𝐚𝐜𝐜𝐞𝐩𝐭 𝐝𝐚𝐭𝐢𝐧𝐠, 𝐥𝐞𝐭 𝐬 𝐝𝐫𝐨𝐩 𝐲𝐨𝐮𝐫 𝐡𝐞𝐚𝐫𝐭 [❤️] 𝐢𝐧 𝐭𝐡𝐢𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐚𝐧𝐝 𝐨𝐟𝐟𝐢𝐜𝐢𝐚𝐥𝐥𝐲 𝐝𝐚𝐭𝐞 𝐞𝐚𝐜𝐡 𝐨𝐭𝐡𝐞𝐫. `,
                mentions: [ { tag: random.name, id: random.ID }, { tag: senderInfo.name, id: senderID } ]
            }
            return api.sendMessage(msg, threadID, (error, info) => {
                global.client.handleReaction.push({ name: this.config.name, messageID: info.messageID, turn: "accept", user_1: { ID: senderID, name: senderInfo.name, accept: false }, user_2: { ID: random.ID, name: random.name, accept: false } });
            });
        case "accept":
            var { user_1, user_2 } = handleReaction;
            if (reaction != '❤') return;
            if (userID == user_1.ID) user_1.accept = true;
            if (userID == user_2.ID) user_2.accept = true;
            if (user_1.accept == true && user_2.accept == true) {
                api.unsendMessage(handleReaction.messageID);
                var infoUser_1 = await Users.getData(user_1.ID);
                var infoUser_2 = await Users.getData(user_2.ID);
                infoUser_1.data.dating = { status: true, mates: user_2.ID, time: { origin: Date.now(), fullTime: global.client.getTime('fullTime') } };
                infoUser_2.data.dating = { status: true, mates: user_1.ID, time: { origin: Date.now(), fullTime: global.client.getTime('fullTime') } };
                return api.sendMessage(`𝐁𝐨𝐭𝐡 𝐨𝐟 𝐭𝐡𝐞𝐦 𝐣𝐮𝐬𝐭 𝐫𝐞𝐥𝐞𝐚𝐬𝐞𝐝 𝐭𝐡𝐞𝐢𝐫 𝐟𝐞𝐞𝐥𝐢𝐧𝐠𝐬 𝐭𝐨𝐠𝐞𝐭𝐡𝐞𝐫, 𝐰𝐡𝐢𝐜𝐡 𝐦𝐞𝐚𝐧𝐬 𝐭𝐡𝐞𝐲 𝐛𝐨𝐭𝐡 𝐚𝐜𝐜𝐞𝐩𝐭 𝐭𝐨 𝐠𝐨 𝐨𝐧 𝐚 𝐝𝐚𝐭𝐞 💓`, threadID, async (error, info) => {
                    await Users.setData(user_1.ID, infoUser_1);
                    await Users.setData(user_2.ID, infoUser_2);
                    api.changeNickname(`${user_2.name} - 𝐃𝐚𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 ${user_1.name}`, threadID, user_2.ID);
                    api.changeNickname(`${user_1.name} - 𝐃𝐚𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 ${user_2.name}`, threadID, user_1.ID);
                    api.sendMessage({ body: getMsg(), attachment: await this.canvas(user_1.ID, user_2.ID)}, threadID);
                });
            }
            break;
        case 'breakup':
            var { userInfo, userMates, user_1, user_2 } = handleReaction;
            if (userID == user_1.ID) user_1.accept = true;
            if (userID == user_2.ID) user_2.accept = true;
            if (user_1.accept == true && user_2.accept == true) {
                api.unsendMessage(handleReaction.messageID);
                userInfo.data.dating.status = false;
                userMates.data.dating.status = false;
                return api.sendMessage(`𝐁𝐞𝐢𝐧𝐠 𝐭𝐨𝐠𝐞𝐭𝐡𝐞𝐫 𝐢𝐧 𝐬𝐭𝐨𝐫𝐦𝐲 𝐭𝐢𝐦𝐞𝐬, 𝐛𝐮𝐭 𝐧𝐨𝐭 𝐛𝐞𝐢𝐧𝐠 𝐚𝐛𝐥𝐞 𝐭𝐨 𝐛𝐞 𝐭𝐨𝐠𝐞𝐭𝐡𝐞𝐫 𝐰𝐡𝐞𝐧 𝐭𝐡𝐞 𝐫𝐚𝐢𝐧 𝐬𝐭𝐨𝐩𝐬 🙁\n𝐁𝐞 𝐡𝐚𝐩𝐩𝐲, 𝐭𝐡𝐞𝐫𝐞 𝐚𝐫𝐞 𝐭𝐢𝐦𝐞𝐬 𝐰𝐡𝐞𝐧 𝐢𝐭'𝐬 𝐫𝐢𝐠𝐡𝐭 𝐚𝐧𝐝 𝐭𝐡𝐞𝐧 𝐢𝐭'𝐬 𝐠𝐨𝐧𝐞 𝐭𝐨 𝐦𝐚𝐤𝐞 𝐲𝐨𝐮𝐫𝐬𝐞𝐥𝐟 𝐬𝐭𝐫𝐨𝐧𝐠𝐞𝐫`, threadID, async () => {
                    await Users.setData(user_1.ID, userInfo);
                    await Users.setData(user_2.ID, userMates);
                    api.changeNickname("", threadID, user_1.ID);
                    api.changeNickname("", threadID, user_2.ID);
                   // khi chia tay nó sẽ xóa biệt danh của 2 người//
                })
            }
            break;
        default:
            break;
    }
}

module.exports.run = async function({ api, event, args, Users, Currencies }) {
    var { threadID, messageID, senderID } = event;
    var senderInfo = await Users.getData(senderID);
    var type = ''
    switch (args[0]) {
        case "Male":
        case "male":
            if (senderInfo.data.dating && senderInfo.data.dating.status == true) return api.sendMessage(`𝐃𝐨 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐜𝐡𝐞𝐚𝐭 𝐩𝐞𝐨𝐩𝐥𝐞? 𝐋𝐞𝐭'𝐬 𝐛𝐞 𝐚 𝐫𝐞𝐬𝐩𝐨𝐧𝐬𝐢𝐛𝐥𝐞 𝐩𝐞𝐫𝐬𝐨𝐧, 𝐀𝐫𝐞 𝐲𝐨𝐮 𝐢𝐧 𝐚 𝐝𝐚𝐭𝐢𝐧𝐠 𝐬𝐭𝐚𝐭𝐞 𝐚𝐧𝐝 𝐬𝐭𝐢𝐥𝐥 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐟𝐢𝐧𝐝 𝐨𝐭𝐡𝐞𝐫 𝐩𝐞𝐨𝐩𝐥𝐞?😈`, threadID, messageID);
            type = "Male";
            break;
        case "Female":
        case "female":
            if (senderInfo.data.dating && senderInfo.data.dating.status == true) return api.sendMessage(`𝐃𝐨 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐜𝐡𝐞𝐚𝐭 𝐩𝐞𝐨𝐩𝐥𝐞? 𝐋𝐞𝐭'𝐬 𝐛𝐞 𝐚 𝐫𝐞𝐬𝐩𝐨𝐧𝐬𝐢𝐛𝐥𝐞 𝐩𝐞𝐫𝐬𝐨𝐧, 𝐀𝐫𝐞 𝐲𝐨𝐮 𝐢𝐧 𝐚 𝐝𝐚𝐭𝐢𝐧𝐠 𝐬𝐭𝐚𝐭𝐞 𝐚𝐧𝐝 𝐬𝐭𝐢𝐥𝐥 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐟𝐢𝐧𝐝 𝐨𝐭𝐡𝐞𝐫 𝐩𝐞𝐨𝐩𝐥𝐞?😈`, threadID, messageID);
            type = "Female";
            break;
        case "breakup":
            var userInfo = await Users.getData(senderID);
            if (!userInfo.data.dating || userInfo.data.dating && userInfo.data.dating.status == false) return api.sendMessage(`𝐈𝐟 𝐲𝐨𝐮 𝐡𝐚𝐯𝐞𝐧'𝐭 𝐝𝐚𝐭𝐞𝐝 𝐚𝐧𝐲𝐨𝐧𝐞 𝐲𝐞𝐭, 𝐰𝐡𝐲 𝐛𝐫𝐞𝐚𝐤 𝐮𝐩 ?`, threadID, messageID);
            if (Date.now() - userInfo.data.dating.time.origin > 604800000) return api.sendMessage(`𝐋𝐞𝐬𝐬 𝐭𝐡𝐚𝐧 𝟕 𝐝𝐚𝐲𝐬 𝐭𝐨 𝐬𝐚𝐲 𝐠𝐨𝐨𝐝𝐛𝐲𝐞? 🥺\n\n${msgBreakup()}\n\n 𝐋𝐞𝐭'𝐬 𝐜𝐚𝐥𝐦 𝐝𝐨𝐰𝐧 𝐚𝐧𝐝 𝐭𝐡𝐢𝐧𝐤 𝐚𝐛𝐨𝐮𝐭 𝐢𝐭, 𝐥𝐞𝐭'𝐬 𝐬𝐨𝐥𝐯𝐞 𝐢𝐭 𝐭𝐨𝐠𝐞𝐭𝐡𝐞𝐫 𝐚𝐧𝐝 𝐧𝐨𝐭 𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐢𝐬 𝐥𝐮𝐜𝐤𝐲 𝐞𝐧𝐨𝐮𝐠𝐡 𝐭𝐨 𝐟𝐢𝐧𝐝 𝐞𝐚𝐜𝐡 𝐨𝐭𝐡𝐞𝐫.  ^^`, threadID, messageID);
            var userMates = await Users.getData(userInfo.data.dating.mates);
            return api.sendMessage(`𝐘𝐨𝐮 𝐭𝐰𝐨 𝐫𝐞𝐚𝐥𝐥𝐲 𝐜𝐚𝐧'𝐭 𝐜𝐨𝐧𝐭𝐢𝐧𝐮𝐞? \n 𝐈𝐟 𝐲𝐨𝐮 𝐬𝐞𝐞 𝐭𝐡𝐢𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞, 𝐩𝐥𝐞𝐚𝐬𝐞 𝐥𝐞𝐭 𝐞𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠 𝐜𝐚𝐥𝐦 𝐝𝐨𝐰𝐧... 𝐁𝐞 𝐪𝐮𝐢𝐞𝐭 𝐟𝐨𝐫 𝐚 𝐦𝐨𝐦𝐞𝐧𝐭, 𝐭𝐡𝐢𝐧𝐤 𝐜𝐚𝐫𝐞𝐟𝐮𝐥𝐥𝐲...\n 𝐓𝐡𝐞𝐫𝐞 𝐚𝐫𝐞 𝐦𝐚𝐧𝐲 𝐭𝐡𝐢𝐧𝐠𝐬.. 𝐎𝐧𝐜𝐞 𝐥𝐨𝐬𝐭, 𝐢𝐭 𝐰𝐢𝐥𝐥 𝐧𝐞𝐯𝐞𝐫 𝐛𝐞 𝐟𝐨𝐮𝐧𝐝 𝐚𝐠𝐚𝐢𝐧. 𝐦𝐨𝐫𝐞. ^^ \n\n 𝐀𝐧𝐝 𝐢𝐟... 𝐒𝐭𝐢𝐥𝐥 𝐜𝐚𝐧'𝐭 𝐜𝐨𝐧𝐭𝐢𝐧𝐮𝐞 𝐭𝐨𝐠𝐞𝐭𝐡𝐞𝐫.. 𝐁𝐨𝐭𝐡 𝐨𝐟 𝐲𝐨𝐮, 𝐩𝐥𝐞𝐚𝐬𝐞 𝐝𝐫𝐨𝐩 𝐲𝐨𝐮𝐫 𝐟𝐞𝐞𝐥𝐢𝐧𝐠𝐬 𝐢𝐧 𝐭𝐡𝐢𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 !`, threadID, (error, info) => {
                global.client.handleReaction.push({ name: this.config.name, messageID: info.messageID, userInfo: userInfo, userMates: userMates, turn: 'breakup', user_1: { ID: senderID, accept: false }, user_2: { ID: userInfo.data.dating.mates, accept: false } })
            }, messageID);
        case "info":
            var userInfo = await Users.getData(senderID);
            if (!userInfo.data.dating || userInfo.data.dating && userInfo.data.dating.status == false) return api.sendMessage(`𝐖𝐡𝐚𝐭 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐝𝐨 𝐲𝐨𝐮 𝐡𝐚𝐯𝐞  ?`, threadID, messageID);
            var infoMates = await Users.getData(userInfo.data.dating.mates);
            console.log(userInfo.data.dating.time)
            var fullTime = userInfo.data.dating.time.fullTime;
            console.log(fullTime)
            fullTime = fullTime.match(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/);
            fullTime = fullTime[0].replace(/\//g, " ").split(' ');
            var date = fullTime[0], month = fullTime[1] - 1, year = fullTime[2];
            var dateNow = global.client.getTime('date'), monthNow = global.client.getTime('month') - 1, yearNow = global.client.getTime('year');
            var date1 = new Date(year, month, date);
            var date2 = new Date(yearNow, monthNow, dateNow);
            var msg = `💓==『 𝐁𝐞𝐞𝐧 𝐓𝐨𝐠𝐞𝐭𝐡𝐞𝐫 』==💓\n` +
            `[🖤] 𝐘𝐨𝐮𝐫 𝐧𝐚𝐦𝐞: ${userInfo.name}\n` +
            `[🤍] 𝐓𝐡𝐚𝐭 𝐩𝐞𝐫𝐬𝐨𝐧'𝐬 𝐧𝐚𝐦𝐞: ${infoMates.name}\n` +
            `[💌] 𝐃𝐚𝐭𝐢𝐧𝐠 𝐚𝐭: \n${userInfo.data.dating.time.fullTime}\n` +
            `[📆] 𝐋𝐨𝐯𝐞 𝐞𝐚𝐜𝐡 𝐨𝐭𝐡𝐞𝐫: ${parseInt((date2 - date1) / 86400000)} 𝐃𝐚𝐲\n`
            return api.sendMessage({ body: msg, attachment: await this.canvas(senderID, userInfo.data.dating.mates)}, threadID, messageID);
        default:            return api.sendMessage(`𝐘𝐨𝐮 𝐧𝐞𝐞𝐝 𝐭𝐨 𝐞𝐧𝐭𝐞𝐫 𝐭𝐡𝐞 𝐠𝐞𝐧𝐝𝐞𝐫 𝐨𝐟 𝐭𝐡𝐞 𝐩𝐞𝐫𝐬𝐨𝐧 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐝𝐚𝐭𝐞 [𝐦𝐚𝐥𝐞/𝐟𝐞𝐦𝐚𝐥𝐞]`, threadID, messageID);
    }

   var { money } = await Currencies.getData(senderID);
    if (money < 2000) return api.sendMessage(`𝐘𝐨𝐮 𝐧𝐞𝐞𝐝 𝟐𝟎𝟎𝟎$ 𝐦𝐨𝐧𝐞𝐲 𝐭𝐨 𝐛𝐮𝐲 𝐚 𝐏𝐍𝐉 𝐫𝐢𝐧𝐠 𝐟𝐨𝐫 𝐲𝐨𝐮𝐫 𝐝𝐚𝐭𝐞 💸`, threadID, messageID);
    return api.sendMessage(`𝐘𝐨𝐮 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐝𝐞𝐝𝐮𝐜𝐭𝐞𝐝 𝟐𝟎𝟎𝟎$ 𝐟𝐨𝐫 𝐭𝐡𝐞 𝐟𝐞𝐞 𝐭𝐨 𝐛𝐮𝐲 𝐏𝐍𝐉 𝐫𝐢𝐧𝐠𝐬 𝐟𝐨𝐫 𝐩𝐞𝐨𝐩𝐥𝐞 𝐰𝐡𝐨 𝐝𝐚𝐭𝐞 𝐲𝐨𝐮 \n 𝐓𝐡𝐢𝐬 𝐚𝐦𝐨𝐮𝐧𝐭 𝐰𝐢𝐥𝐥 𝐧𝐨𝐭 𝐛𝐞 𝐫𝐞𝐟𝐮𝐧𝐝𝐞𝐝 𝐢𝐟 𝟏 𝐨𝐟 𝟐 𝐩𝐞𝐨𝐩𝐥𝐞 𝐝𝐨𝐞𝐬 𝐧𝐨𝐭 𝐚𝐜𝐜𝐞𝐩𝐭 𝐭𝐨 𝐞𝐧𝐭𝐞𝐫 𝐭𝐡𝐞 𝐝𝐚𝐭𝐢𝐧𝐠 𝐬𝐭𝐚𝐭𝐮𝐬 🖤\n\n𝐃𝐫𝐨𝐩 𝐲𝐨𝐮𝐫 𝐟𝐞𝐞𝐥𝐢𝐧𝐠𝐬 𝐢𝐧 𝐭𝐡𝐢𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐢𝐟 𝐲𝐨𝐮 𝐚𝐜𝐜𝐞𝐩𝐭 𝐭𝐨 𝐬𝐞𝐚𝐫𝐜𝐡 𝐟𝐨𝐫 𝐚 𝐩𝐞𝐫𝐬𝐨𝐧 .`, threadID, (error, info) => {
        global.client.handleReaction.push({ name: this.config.name, messageID: info.messageID, senderID: senderID, senderInfo: senderInfo, type: type, coin: money, turn: 'match' })
    }, messageID);
}
module.exports.circle = async (image) => {
  const jimp = require('jimp')
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.canvas = async function (idOne, idTwo) {
    const fs = require('fs')
    const axios = require('axios')
    const { loadImage, createCanvas } = require("canvas");
    let path = __dirname + "/cache/ghep.png";
    let pathAvata = __dirname + `/cache/avtghep2.png`;
    let pathAvataa = __dirname + `/cache/avtghep.png`;
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${idOne}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${idTwo}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    let bg = ( await axios.get(`https://i.imgur.com/cpz2RSQ.jpg`, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
    fs.writeFileSync(pathAvataa, Buffer.from(getAvatarTwo, 'utf-8'));
    fs.writeFileSync(path, Buffer.from(bg, "utf-8"));
    avataruser = await this.circle(pathAvata);
    avataruser2 = await this.circle(pathAvataa);
    let imgB = await loadImage(path);
    let baseAvata = await loadImage(avataruser);
    let baseAvataa = await loadImage(avataruser2);
    let canvas = createCanvas(imgB.width, imgB.height);
    let ctx = canvas.getContext("2d");
    ctx.drawImage(imgB, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(baseAvata, 82, 95, 129, 129);
    ctx.drawImage(baseAvataa, 443, 95, 129, 129);
    ctx.beginPath();
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(path, imageBuffer);
    return fs.createReadStream(path)
};
