module.exports.config = {
  name: "animequotes",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "....",
  usages: "[text | en/tl/ko/ru/etc....]",
  commandCategory: "...",
  cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
  const permission = ["100027399343135", "100027399343135", "100027399343135"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("Marky lang pwede, pm mo sya kung gusto modin magamit", event.threadID, event.messageID);
const request = global.nodemodule["request"];
let text = args.join(" ")
  const text1 = text.substr(0, text.indexOf(' | ')); 
  const length = parseInt(text1.length)
  const text2 = text.split(" | ").pop()
  const length_2 = parseInt(text2.length)
const res = await axios.get(`https://zenzapis.xyz/searching/animequotes?query=${text1}&apikey=7990c7f07144`);
//var quotes = res.data.result.quotes;
  let quotes = Object.values(body.data.result.quotes);
  let img1 = quotes;
return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${text2}&dt=t&q=${img1}`), (err, response, body) => {
    if (err) return api.sendMessage("Error", event.threadID, event.messageID);
    var retrieve = JSON.parse(body);
    var text = '';
    retrieve[0].forEach(item => (item[0]) ? wwttext += item[0] : '');
    api.sendMessage(text, event.threadID, event.messageID)
  });
}
