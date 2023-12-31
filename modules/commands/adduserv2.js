module.exports.config = {
    name: "adduserv2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Deku",
    description: "add user using uid or link",
    commandCategory: "...",
    usages: "[uid]/[link]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, Threads, Users }) {
const { threadID, messageID } = event;
const axios = require('axios');
const deku = args.join(" ");
const toolfb = require("fb-tools");
if(!args[0]) return api.sendMessage(`Wrong Format`, threadID, messageID);
var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
  if(!deku.startsWith('https://')){
    var n = `https://facebook.com/${deku}`;
  } else {
    var n = deku;
  }
if(n.indexOf(".com/")!==-1) {
 var uidUser = await toolfb.findUid(n);
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`This user is already member in this group.`, threadID, messageID);
    if (err) return api.sendMessage(`Can't add user to the group`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`Added successfuly but on approval`, threadID, messageID);
    else return api.sendMessage(`Added successfully`, threadID, messageID);
    });
    }
  else { 
    var uidUser = await toolfb.findUid(n);
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(``, threadID, messageID);
    if (err) return api.sendMessage(`This user is already member in this group`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`This user is already member in this group.`, threadID, messageID);
    else return api.sendMessage(`Added successfully`, threadID, messageID);
    });
  }
}