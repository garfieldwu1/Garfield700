const path = require("path");
const { mkdirSync, writeFileSync, existsSync, createReadStream, readdirSync } = require("fs-extra")
const axios = require("axios")

module.exports.config = {
    name: "duaxe",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "...",
    description: "Racing for the top",
    commandCategory: "Game",
    usages: "[]",
    cooldowns: 0
};


module.exports.onLoad = async () => {
    const dir = __dirname + `/duaxe/datauser/`;
    const _dir = __dirname + `/duaxe/datauser/`;
    const __dir = __dirname + `/duaxe/cache/`;
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    if (!existsSync(_dir)) mkdirSync(_dir, { recursive: true });
    if (!existsSync(__dir)) mkdirSync(__dir, { recursive: true });
    return;
}

module.exports.checkPath = function (type, senderID) {
    const pathGame = path.join(__dirname, 'duaxe', 'datauser', `${senderID}.json`);
    const pathGame_1 = require("./duaxe/datauser/" + senderID + '.json');
    if (type == 1) return pathGame
    if (type == 2) return pathGame_1
}

module.exports.image = async function(link) {
    var images = [];
    let download = (await axios.get(link, { responseType: "arraybuffer" } )).data; 
        writeFileSync( __dirname + `/duaxe/cache/duaxe.png`, Buffer.from(download, "utf-8"));
        images.push(createReadStream(__dirname + `/duaxe/cache/duaxe.png`));
    return images
}

module.exports.run = async function ({ api, event, args, client,Threads,__GLOBAL, Users, Currencies,getText }) {
   const { senderID, messageID, threadID } = event;
     const axios = require('axios');
    const request = require('request');
    const fs = require('fs-extra');
    const pathData = path.join(__dirname, 'duaxe', 'datauser', `${senderID}.json`);
    switch (args[0]) {
        case 'register':
        case '-r': {
            const nDate = new Date().toLocaleString('vi-VN', {
                timeZone: 'Asia/Manila'
            });
            if (!existsSync(pathData)) {
                var obj = {};
                obj.name = (await Users.getData(senderID)).name;
                obj.ID = senderID;
                obj.shield = 3
                obj.coins = 20000
                obj.Island = {};
                obj.Island.level = 1
                obj.Island.coinsLV = 200
                obj.Island.data = {};
                obj.Island.data.tower = 0
                obj.Island.data.tree = 0
                obj.Island.data.pool = 0
                obj.Island.data.pet = 0
                obj.spin = 20
                obj.timeRegister = nDate
                writeFileSync(pathData, JSON.stringify(obj, null, 4));
                return api.sendMessage("🏎 Successful registration to enter the arena", threadID, messageID);
            } else return api.sendMessage("⚔🏎 You are already in the database", threadID, messageID);

        }
        case 'spin': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: `You have not registered the game yet!`, attachment: await this.image('https://i.imgur.com/XZITZoN.gif')}, threadID, messageID);
            }
            if(this.checkPath(2, senderID).spin == 0) return api.sendMessage('» You have run out of spins, please buy more or wait 5 minutes for the system to give you more spins', threadID, messageID);
            this.checkPath(2, senderID).spin = parseInt(this.checkPath(2, senderID).spin) - 1;
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(this.checkPath(2, senderID), null, 4));
            var items = [`${this.checkPath(2, senderID).Island.level * 1000} coins`, `${this.checkPath(2, senderID).Island.level * 3000} coins`, `${this.checkPath(2, senderID).Island.level * 5000} coins`, 'You hit the bike', 'Supercar', ' Engine upgrade', '1 spin', '2 turns', '7 turns', '5 turns'];
            var getItem = items[Math.floor(Math.random() * items.length)];
            var i = this.getSpin(items, getItem, senderID);
            api.sendMessage({body: `Congratulations on your winning shot : ${getItem}`, attachment: await this.image('https://i.imgur.com/XZITZoN.gif')}, threadID, messageID);
            await new Promise(resolve => setTimeout(resolve, 1000));
            const data = readdirSync(__dirname + `/duaxe/datauser`);
            if(i == 3) {
                if(data.length < 4) return api.sendMessage(`Requires at least 3 players on the server to steal vehicle materials`, threadID, messageID);
                const dem = [];
                for (let i of data) { 
                    if(i != `${senderID}.json`) {
                        dem.push(require(`./duaxe/datauser/${i}`));
                    }
                }
                dem.sort((a, b) => a.coins + b.coins);
                var msg = `The highest amount is: ${dem[0].coins / 2}\n`
                const randomIndex = dem.sort(function() { return .5 - Math.random() });
                for(var i = 0; i < 3; i ++) {
                    msg += `${i+1}. ${randomIndex[i].name} - Level engine ${randomIndex[i].Island.level}\n`
                }
                msg += 'Please reply with the option you want to steal vehicle materials'
                return api.sendMessage(`==========\n${msg}`, threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "steal",
                        dem,
                        randomIndex
                    })
                }, messageID);
            }
            else if(i == 5) {
                if(data.length < 4) return api.sendMessage(`Requires at least 3 players on the server to attack players`, threadID, messageID);
                var msgf = `[====ATTACK====]\n`, number = 1, p = [];
                for (let i of data) { 
                    if(i != `${senderID}.json`) {
                        var o = require(`./duaxe/datauser/${i}`);
                        p.push(o)
                        msgf += `${number++}. ${o.name} - Level Island ${o.Island.level}\n`
                    }
                }
                return api.sendMessage(msgf, threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "attack",
                        p
                    })
                }, messageID);
            }
            break;
        }
        case 'build': 
        case 'xaydung': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "You have not registered the game yet!", attachment: await this.image('https://i.imgur.com/clX87Qt.jpg')}, threadID, messageID);
            }
            var a = require(`./duaxe/datauser/${senderID}.json`);
            return api.sendMessage(`» What do you want to upgrade in Garaxe\n1. Engine - ${a.Island.coinsLV * (a.Island.data.tower + 1)} coins (${a.Island.data.tower}/50)\n2. Hood - ${a.Island.coinsLV * (a.Island.data.tree + 1)} coins(${a.Island.data.tree}/50)\n3.Materials for recycling - ${a.Island.coinsLV * (a.Island.data.pool + 1)} coins (${a.Island.data.pool}/50)\n4.Mini Boost - ${a.Island.coinsLV * (a.Island.data.pet + 1)} coins (${a.Island.data.pet}/50)\n==============`, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "build"
                })
            }, messageID);
        }
        case 'shop': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "You have not registered the game yet!", attachment: await this.image('https://i.imgur.com/z4Q5tWp.jpg')}, threadID, messageID);
            }
     return api.sendMessage({body: `── [ Shop ] ──  \n\n🐸List of racing cars you can buy\n[🏎1]. Twin Gods\n[🏎2].S-LIGHT\n[🏎3].ETARNA\n[🏎4].Hell Wolf\n[🏎5].Wind Traces\n[🏎6].Top Rays\n[🏎7].Lamborini\n[🏎8].Halo\n[🏎9].Hegemony\n[⭐️] Please reply to the bot message and include the number`, attachment: await this.image('https://i.imgur.com/z4Q5tWp.jpg')}, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "shop"
                })
            }, messageID);
        }
        case 'đua': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "You have not registered the game yet!", attachment: await this.image('https://i.imgur.com/lo8wFLT.jpg')}, threadID, messageID);
            }
     return api.sendMessage({body: `── [ CHOOSE COMPETITION MAPS ] ──  \n\n❤️ Choose a map to play on\n[🗺1]. Forest of Destruction\n[🗺2].New Year's feathers\n[🗺3].Linh Thien House\n`, attachment: await this.image('https://i.imgur.com/9YaNyZA.jpg')}, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "đua"
                })
            }, messageID);
        }
        case 'me':
        case 'info': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "You have not registered the game yet!", attachment: await this.image('https://i.imgur.com/R5eyoyZ.jpg')}, threadID, messageID);
            }
            var a = require(`./duaxe/datauser/${senderID}.json`);
            return api.sendMessage(`⭐️ UPGRADE STORE ⭐️\n- ... ${a.Island.level}\n- Remaining spins: ${a.spin}\n- Coins: ${a.coins}\n- ENGINE:\n• ... (${a.Island.data.tower}/50)\n• ... (${a.Island.data.tree}/50)\n• ... (${a.Island.data.pool}/50)\n• ... (${a.Island.data.pet}/50)`, threadID, messageID);
        }
        case 'top': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "You have not registered the game yet!", attachment: await this.image('https://i.imgur.com/R5eyoyZ.jpg')}, threadID, messageID);
            }
            const data = readdirSync(__dirname + `/duaxe/datauser`);
            if(data.length < 3) return api.sendMessage(`Need at least 3 players on the server to see the top`, threadID, messageID);
            var p = []
            for (let i of data) { 
                var o = require(`./duaxe/datauser/${i}`);
                p.push(o)
                msgf += `${number++}. ${o.name} - Level Island ${o.Island.level}\n`
            }
            p.sort((a, b) => b.Island.level - a.Island.level);
            var msg = '===TOP 3 HIGHEST LEVEL Cage===\n'
            for(var i = 0; i < 3; i++) {
                msg += `${i+1}. ${p[i].name} with level island ${p[i].Island.level}\n`
            }
            return api.sendMessage(msg, threadID, messageID);
        }
        default: {
            return api.sendMessage({body: `===[ RACING S1 ]===\n» R: Registration\n» SPIN: Game rotation\n» BUILD: Engine upgrade\n» SHOP: Shop to buy guns\n» INFO: View information about you\n» TOP: See the top level on the server\n» CHANGE: Convert bot currency to game currency and vice versa`, attachment: await this.image('https://i.imgur.com/28F3cY4.jpg')}, threadID, messageID);
        }
    }
}
module.exports.handleReply = async ({ event, api, Currencies, handleReply, Users, getText}) => {

  const { body, threadID, messageID, senderID } = event;
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
    switch (handleReply.type) {
        case 'build': {
            var a = require(`./duaxe/datauser/${senderID}.json`);
            var l = ['tower', 'tree', 'pool', 'pet']
            if(a.coins < a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1)) return api.sendMessage(`You don't have enough coins in the game to build!`, threadID, messageID);
            a.coins = a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1);
            await Currencies.decreaseMoney(senderID, a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1));
            api.unsendMessage(handleReply.messageID)
            if(body == 1) {
                if(a.Island.data.tower == 50) return api.sendMessage('This areas level is at its maximum, so it cant be built', threadID, messageID);
                a.Island.data.tower = a.Island.data.tower + 10;
                api.sendMessage(`Successful build: ${a.Island.data.tower}/50`, threadID, messageID);
            }
            if(body == 2) {
                if(a.Island.data.tree == 50) return api.sendMessage('This area's level is at its maximum, so it can't be built', threadID, messageID);
                a.Island.data.tree = a.Island.data.tree + 10;
                api.sendMessage(`Successful construction: ${a.Island.data.tree}/50`, threadID, messageID);
            }
            if(body == 3) {
                if(a.Island.data.pool == 50) return api.sendMessage('This areas level is at its maximum, so it cant be built', threadID, messageID);
                a.Island.data.pool = a.Island.data.pool + 10;
                api.sendMessage(`Successful construction: ${a.Island.data.pool}/50`, threadID, messageID);
            }
            if(body == 4) {
                if(a.Island.data.pet == 50) return api.sendMessage('This areas level is at its maximum, so it cant be built', threadID, messageID);
                a.Island.data.pet = a.Island.data.pet + 10;
                api.sendMessage(`Successful upgrade: ${a.Island.data.pet}/50`, threadID, messageID);
            }
            if(a.Island.data.tower == 50 && a.Island.data.tree == 50 && a.Island.data.pool == 50 && a.Island.data.pet == 50) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                api.sendMessage(`Your upgrade has reached its maximum level!\nYou will be upgraded to an engine ${(a.Island.level) + 1}`, threadID, messageID);
                a.Island.level = a.Island.level + 1;
                a.Island.coinsLV = a.Island.coinsLV + 100;
                a.Island.data.tower = 0;
                a.Island.data.tree = 0;
                a.Island.data.pool = 0;
                a.Island.data.pet = 0;
            }
            return writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
        }
        case 'shop': {
            if(body == 1) {
                return api.sendMessage({body: `⭐️ BUY SUCCESSFUL ️\n[🚘]Name : Twin Gods
[🍁]Information : darkness of time
Speed: 1.8km/h max
Power boost: 2.3Drift: 61%
Cardboard strength: 58%`, attachment: await this.image('https://i.imgur.com/UOgDVlh.jpg')}, threadID, messageID);
            }
            else if(body == 2) {
                return api.sendMessage({body: `⭐️ BUY SUCCESSFUL ️\n[🚘]Name : S-LIGHT
[🍁]Information: Hegemony of heaven and earth
Speed: 1.9/h max
Power boost: 2.9
Drift: ${huhong}%
Cardboard strength: ${huhong}%`, attachment: await this.image('https://i.imgur.com/t7wrAX1.jpg')}, threadID, messageID);
            }
            else if(body == 3) {

                return api.sendMessage({body: `⭐️ BUY SUCCESSFUL ️\n[🚘]Name : ETARNA
[🍁]Information : Lửa h��y diệt 
Speed: 2.1/h maxSpeed: 2.1/h max
Power boost: 3.1
Drift: 31%
Cardboard strength: 19%`, attachment: await this.image('https://i.imgur.com/jkkHbS3.jpg')}, threadID, messageID);
             }
            else if(body == 4) {
                return api.sendMessage({body: `⭐️ BUY SUCCESSFUL ️\n[🚘]Name: Hell WolfBUY SUCCESSFUL ️\n[🚘]Name: Hell Wolf
[🍁]Information : Ultimate Beast
Speed: 3.9/h max
Boost Strength: 7.2
Drift: 59%
Cardboard strength: 80`            }
            else if(body == 5) {
                return api.sendMessage({body: `⭐️ SUCCESSFUL BUY ️\n[🚘]Name: Wind TracesSUCCESSFUL BUY ️\n[🚘]Name: Wind Traces
[🍁]Information : Wind Disaster
Speed: 1.5/h max
Power boost: 3.2
Drift: 37%
Cardboard strength: 32%`, attachment: await this.image('https://i.imgur.com/5w8wvOM.jpgg')}, threadID, messageID);
            }
            else if(body == 6) {
                return api.sendMessage({body: `⭐️ SUCCESSFUL BUYING ️
[🚘] Name: Spiral
[🍁] Info: Ghost Palace
Speed: 3.4km/h max
Power boost: 1.3Power boost: 1.3
Drift: 44%
Cardboard strength: 69%`            }
            else if(body == 7) {
                return api.sendMessage({body: `⭐️ SUCCESSFUL BUYING ️
[🚘] Name: Lamborini
[🍁] Information: Invincible for thousands of pounds
Speed: 7.9km/h max
Power boost: 9.2Power boost: 9.2
Drift: 96%
Cardboard strength: 99%`            }
            else if(body == 8) {
                return api.sendMessage({body: `⭐️ SUCCESSFUL BUYING ️SUCCESSFUL BUYING ️
[🚘] Name: Aura
[🍁] Information: The Light of Pride
Speed: 8.9km/h max
boos power
Drift: 87%
Cardboard strength: 79%`, attachment: await this.image('https://i.imgur.com/Au9cojd.jpg')}, threadID, messageID);
            }
            else if(body == 9) {
                return api.sendMessage({body: `⭐️ SUCCESSFULLY PURCHASE ⭐️
[🚘] Name: OverlordName: Overlord
[🍁] Info: Destructive Power
Speed: 10.1km/h max
Power boost
Drift: 7%
Cardboard strength: 100%`, attachment: await this.image('https://i.imgur.com/HfK8lJD.jpg')}, threadID, messageID);
            }
            else {
                return api.sendMessage('Invalid selection!', threadID, messageID);
            }
        }

         case 'mua': {
            if(body == 1) {
                return api.sendMessage('Please reply to this message with the amount you want to exchange! 0% discount', threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "botcoins"
                    })
                }, messageID);
            }
            else if(body == 2) {
                return api.sendMessage('Please reply to this message with the amount you want to exchange! 0% discount', threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "coinsbot"
                    })
                }, messageID);
            }
            else if(body == 3) {
                return api.sendMessage('Please reply to this message with the number of spins you want to buy! (10 spins 2000$)', threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "spinn"
                    })
                }, messageID);
            }
            else {
                return api.sendMessage('Invalid selection!', threadID, messageID);
            }
        }
        case 'đua': {
            if(body == 1) {
  var coinduaxe = Math.floor(Math.random() * 80000) + 10000;
  var huhong = Math.floor(Math.random() * 90) + 20;
                return api.sendMessage({body: `⭐️ COMPETITION ⭐️\n[🗺] MAPS: Forest of Destruction.\n[🏆] Congratulations on your victory\n» Your prize is: ${coinduaxe}$\n» Broken Car: ${huhong}%`, attachment: await this.image('https://i.imgur.com/VyNAU4R.jpg')}, threadID, messageID);
        }
            else if(body == 2) {
               var coinduaxe = Math.floor(Math.random() * 80000) + 10000;
  var huhong = Math.floor(Math.random() * 90) + 20;
                return api.sendMessage({body: `⭐️ COMPETITION ️\n[🗺] MAPS: Long Mon Tam Xuan.\n[🏆] Congratulations on your victory\n» Your prize is: ${coinduaxe}$\n» Broken Car: ${huhong}%`, attachment: await this.image('https://i.imgur.com/NHbz90K.jpg')}, threadID, messageID);
        }
            else if(body == 3) {
   var coinduaxe = Math.floor(Math.random() * 80000) + 10000;
  var huhong = Math.floor(Math.random() * 90) + 20;
                return api.sendMessage({body: `⭐️ COMPETITION ⭐️\n[🗺] MAPS: Linh Thien House.\n[🏆] Congratulations on your victory\n» Your prize is: ${coinduaxe}$\n» Broken Car: ${huhong}%`, attachment: await this.image('https://i.imgur.com/93XPPtv.jpg')}, threadID, messageID);
            }
        }        
        case 'spinn': {
            await checkMoney(senderID, parseInt(body));
            api.unsendMessage(handleReply.messageID)
            await Currencies.decreaseMoney(senderID, parseInt(body));
            a.spin = a.spin + parseInt(body)
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
            return api.sendMessage(`successfully purchase ${body} turns (${parseInt(body) * 200}$`, threadID, messageID);
        }
        case 'botcoins': {
            var a = require(`./duaxe/datauser/${senderID}.json`);
            await checkMoney(senderID, parseInt(body));
            api.unsendMessage(handleReply.messageID)
            await Currencies.decreaseMoney(senderID, parseInt(body));
            a.coins = a.coins + parseInt(body)
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
            return api.sendMessage(`Loaded successfully ${body} coins into the game!`, threadID, messageID);
        }
        case 'coinsbot': {
            var a = require(`./duaxe/datauser/${senderID}.json`);
            if(a.coins < parseInt(body)) return api.sendMessage('You don not have enough money to make this transaction!', threadID, messageID);
            api.unsendMessage(handleReply.messageID)
            await Currencies.increaseMoney(senderID, parseInt(body));
            a.coins = a.coins - parseInt(body)
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
            return api.sendMessage(`Withdrawal successful ${body} coins to the bot account!`, threadID, messageID);
        }
    }
    async function checkMoney(senderID, maxMoney) {
        var i, w;
        i = (await Currencies.getData(senderID)) || {};
        w = i.money || 0
        if (w < parseInt(maxMoney)) return api.sendMessage('You don not have enough money to make this transaction!', threadID, messageID);
    }
}
module.exports.getSpin = function (items, getItem, senderID) {
    const path = this.checkPath(1, senderID)
    var pathData = this.checkPath(2, senderID)
    var i = items.findIndex(index => index == getItem);
    if(i == 0) pathData.coins = parseInt(pathData.coins) + pathData.Island.level * 1000
    if(i == 1) pathData.coins = parseInt(pathData.coins) + pathData.Island.level * 3000
    if(i == 2) pathData.coins = parseInt(pathData.coins) + pathData.Island.level * 5000
    if(i == 4) {
        if(pathData.shield != 3) {
            pathData.spin = parseInt(pathData.spin) + 1
            pathData.shield = parseInt(pathData.shield) + 1;
        }
    }
    if(i == 6) pathData.spin = parseInt(pathData.spin) + 1
    if(i == 7) pathData.spin = parseInt(pathData.spin) + 2
    if(i == 8) pathData.spin = parseInt(pathData.spin) + 5
    writeFileSync(path, JSON.stringify(pathData, null, 4));
    return i
}