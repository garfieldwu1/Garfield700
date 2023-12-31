module.exports.config = {
    name: "hentaiz",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Đọc truyện hentaiz",
    commandCategory: "Tiện ích",
    usages: "",
    cooldowns: 5
};
module.exports.getHentaiz = async function(type, first, second) {
    const axios = require('axios');
    switch(type) {
        case '1': {
            var list = (await axios.get(`https://api.phamvandien.xyz/hentaiz/list`)).data;
            return list
        }
        case '2': {
            var read = (await axios.get(`https://api.phamvandien.xyz/hentaiz/read?id=${first}&chapter=${second}`)).data;
            return read
        }
        case '3': {
            var contribute = (await axios.get(`https://api.phamvandien.xyz/hentaiz/contribute?link=${first}&name=${second}`)).data;
            return contribute
        }
        default: return
    }
}
module.exports.run = async function ({ api, event, Users, args }) {
      const { threadID, messageID } = event;
      switch(args[0]) {
        case 'list':
        case 'all': {
            const axios = require('axios')
            var res = await this.getHentaiz('1')
            var list = [];
            var lengthID = [];
            for (let i of res) { 
                list.push({
                    ID: i.ID,
                    name: i.name,
                    author: i.author,
                    description: i.description,
                    total_chapters: i.total_chapters
                });
                lengthID.push(i.ID);
            };
            var page = 1;
                page = parseInt(args[1]) || 1;
                page < -1 ? page = 1 : "";
            var limit = 5;
            var msg = "📔 𝐋𝐈𝐒𝐓 𝐓𝐑𝐔𝐘𝐄̣̂𝐍 𝐇𝐄𝐍𝐓𝐀𝐈𝐙 📔\n\n";
            var numPage = Math.ceil(list.length / limit);
            for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
                if (i >= list.length) break;
                    let info = list[i];                  
                    msg += `${i+1} => ✅ 𝐈𝐃 𝐭𝐫𝐮𝐲𝐞̣̂𝐧: ${info.ID}\n🔰 𝐓𝐞̂𝐧: ${info.name}\n👀 𝐓𝐚́𝐜 𝐠𝐢𝐚̉: ${info.author}\n💬 𝐌𝐨̂ 𝐭𝐚̉: ${info.description}\n☘ 𝐓𝐨̂̉𝐧𝐠 𝐬𝐨̂́ 𝐜𝐡𝐮̛𝐨̛𝐧𝐠: ${info.total_chapters}\n\n`;             
                }
            msg += `» 𝐑𝐞𝐩𝐥𝐲 𝐯𝐚̀ 𝐜𝐡𝐨̣𝐧 𝐭𝐫𝐮𝐲𝐞̣̂𝐧 𝐦𝐮𝐨̂́𝐧 𝐱𝐞𝐦\n`
            msg += `» 𝐓𝐫𝐚𝐧𝐠 ${page}/${numPage}\n`
            msg += `» 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐜𝐨́ ${(lengthID.length)} 𝐭𝐫𝐮𝐲𝐞̣̂𝐧 𝐭𝐫𝐞̂𝐧 𝐬𝐞𝐫𝐯𝐞𝐫\n`
            return api.sendMessage(msg, threadID, (error, info) => {
                global.client.handleReply.push({
                    type: 'choose',
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    list: list
                });
            }, messageID);
        }
        case 'contribute':
        case 'donggop': {
            return api.sendMessage('🔰 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝐥𝐢𝐧𝐤 𝐭𝐫𝐮𝐲𝐞̣̂𝐧 𝐜𝐚̂̀𝐧 𝐭𝐡𝐞̂𝐦 𝐯𝐚̀𝐨 !', threadID, (error, info) => {
                global.client.handleReply.push({
                    type: 'link',
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    list: list
                });
            }, messageID);
        }
        default: {
            return api.sendMessage('📌 𝐇𝐞𝐧𝐭𝐚𝐢𝐳 𝐇𝐞𝐥𝐩:\n- 𝗟𝗜𝗦𝗧: 𝘅𝗲𝗺 𝗹𝗶𝘀𝘁 𝘁𝗿𝘂𝘆𝗲̣̂𝗻 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́ 𝘃𝗮̀ 𝗹𝘂̛̣𝗮 𝗰𝗵𝗼̣𝗻 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘁𝗿𝘂𝘆𝗲̣̂𝗻.\n- 𝗖𝗢𝗡𝗧𝗥𝗜𝗕𝗨𝗧𝗘: 𝗴𝗼́𝗽 𝘆́ 𝗹𝗶𝗻𝗸 𝘁𝗿𝘂𝘆𝗲̣̂𝗻 𝘃𝗲̂̀ 𝗮𝗱𝗺𝗶𝗻 \n🎀 𝐀𝐔𝐓𝐇𝐎𝐑: 𝐓𝐮𝐚̂́𝐧 𝐃𝐞𝐞𝐩𝐓𝐫𝐲', threadID, messageID);
        }
    }
}
module.exports.handleReply = async function ({ args, event, api, handleReply, Users }) {
    const { list, author, type } = handleReply;
    const { threadID, messageID, body, senderID } = event;
    const fs = require("fs-extra");
    const axios = require('axios');
    switch(type) {
        case 'choose': {
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`⌛️ ${list[parseInt(body) -1].name} 𝗰𝗼́ ${list[parseInt(body) -1].total_chapters} 𝗰𝗵𝘂̛𝗼̛𝗻𝗴.\n👀 𝗕𝗮̣𝗻 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗿𝗲𝗽𝗹𝘆 𝗰𝗵𝘂̛𝗼̛𝗻𝗴 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺`, threadID, (error, info) => {
                global.client.handleReply.push({
                    type: 'chapters',
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    number: parseInt(body -1)
                });
            }, messageID);
        }
        case 'chapters': {
            if(body == '->') {
                chap = handleReply.chap + 1;
            }
            else if(body == '<-') {
                chap = handleReply.chap - 1;
            }
            else {
                chap = body
            }
            try {
                const res = await this.getHentaiz('2', handleReply.number, chap)
                if(res.error != 0) return api.sendMessage('⌛️ 𝗞𝗵𝗼̂𝗻𝗴 𝘁𝗶̀𝗺 𝘁𝗵𝗮̂́𝘆 𝗰𝗵𝘂̛𝗼̛𝗻𝗴 𝗯𝗮̣𝗻 𝘆𝗲̂𝘂 𝗰𝗮̂̀𝘂', threadID, messageID);
                api.sendMessage('⌛️ 𝗧𝗵𝗲 𝗽𝗮𝗴𝗲 𝗶𝘀 𝗹𝗼𝗮𝗱𝗶𝗻𝗴, 𝗽𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁 𝗮 𝗺𝗼𝗺𝗲𝗻𝘁', threadID, messageID);
                var imgData = [], num = 0;
                for(let i of res.image) {
                    let path = __dirname + `/cache/${num++}.png`;
                    let getDown = (await axios.get(`${i}`, { responseType: 'arraybuffer' })).data;
                    fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
                    imgData.push(fs.createReadStream(path));
                }
                api.unsendMessage(handleReply.messageID);
                return api.sendMessage({ body: `🔰 𝗧𝗲̂𝗻: ${res.name}\n🥏 𝗖𝗵𝘂̛𝗼̛𝗻𝗴 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶: ${res.chapters}\n☘ 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝗰𝗵𝘂̛𝗼̛𝗻𝗴: ${res.total_chapters}\n👀 𝗥𝗲𝗽𝗹𝘆 -> 𝗵𝗼𝗮̣̆𝗰 <- 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝘁𝗿𝗮𝗻𝗴\n📌 𝗥𝗲𝗮𝗰𝘁 𝘃𝗮̀𝗼 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗴𝗼̛̃ 𝘁𝗿𝗮𝗻𝗴`,  attachment: imgData}, 
                    threadID, (error, info) => {
                        global.client.handleReply.push({
                            type: 'chapters',
                            name: this.config.name,
                            messageID: info.messageID,
                            author: event.senderID,
                            number: handleReply.number,
                            chap: parseInt(chap)
                        });
                        global.client.handleReaction.push({
                            type: 'unsend',
                            name: this.config.name,
                            messageID: info.messageID,
                            author: event.senderID
                        });
                    }, messageID);
            }
            catch(e) {
                console.log(e)
                return api.sendMessage('⌛️ API đang lỗi, vui lòng báo cáo với admin!', threadID, messageID);
            }
        }
        case 'link': {
            const res = await this.getHentaiz('3', encodeURI(body), encodeURI((await Users.getData(senderID)).name))
            if(res.error != 0) return api.sendMessage('⌛️ Vui lòng reply với nội dung là link cần đóng góp', threadID, messageID);
            return api.sendMessage('✅ Đóng góp truyện thành công, truyện có thể sẽ sớm có mặt trên messenger!', threadID, messageID);
        }
    }
}
module.exports.handleReaction = ({ api, event, handleReaction }) => {
    if(handleReaction.type == 'unsend') {
        api.unsendMessage(handleReaction.messageID)
    }
    else return
}