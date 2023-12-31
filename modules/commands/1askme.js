module.exports.config = {
  name: "askme",
  version: "1.1.2",
  hasPermssion: 0,
  credits: "HelyT",
  description: "Help giống Spermbot :3",
  commandCategory: "group",
  usages: "[lệnh]",
  cooldowns: 1,
};
module.exports.handleEvent = function ({ api, event }) {
  const { commands } = global.client;

  if (!event.body) return;

  const { threadID, messageID, body } = event;

  if (body.indexOf("askme") != 0) return;

  const splitBody = body.slice(body.indexOf("askme")).trim().split(/\s+/);


  if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;

  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const command = commands.get(splitBody[1].toLowerCase());

  const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

  return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Using: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Belonging to the group: ${command.config.commandCategory}\n❯ Waiting time: ${command.config.cooldowns} second(s)\n❯ Power: ${((command.config.hasPermssion == 0) ? "User" : (command.config.hasPermssion == 1) ? "Administrators" : "Operators bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
const { commands } = global.client;
const { threadID, messageID } = event;
const command = commands.get((args[0] || "").toLowerCase());
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
if (!command) {
const command = commands.values();
var list = ["pogi ng admin ko","Marky is handsome in the world"];
var tle = tl[Math.floor(Math.random() * tl.length)];
var lon = `[Do you know?]: ${tle}.`;
return api.sendMessage(lon, event.threadID, event.messageID);
}
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Using: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Belonging to the group: ${command.config.commandCategory}\n❯ Waiting time: ${command.config.cooldowns} second(s)\n❯ Power: ${((command.config.hasPermssion == 0) ? "User" : (command.config.hasPermssion == 1) ? "Administrators" : "bot operator" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};