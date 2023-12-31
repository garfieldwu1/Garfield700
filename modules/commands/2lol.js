module.exports.config = {
  name: "lol",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "get info lol character",
  usages: "[character name]",
  commandCategory: "...",
  cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://api-joshuasy.joshuamods.repl.co/lol?champion=${juswa}`);
var name = res.data.name;
var hp = res.data.hp;
var mana = res.data.mana;
var armor = res.data.armor;
var range = res.data.range;
return api.sendMessage(`✣Name: ${name}✣\n✣Hp: ${hp}✣\n✣Mana: ${mana}\n✣Armor: ${armor}✣\n✣Range: ${range}✣`, event.threadID, event.messageID)
}