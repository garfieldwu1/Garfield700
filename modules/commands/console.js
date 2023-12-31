module.exports.config = {
  name: "console",
  version: "1.0.0",
  hasPermssion: 3,
  credits: "???",//Mod by H.Thanh
  description: "",
  commandCategory: "Hệ thống",
  usages: "",
  cooldowns: 0
};
module.exports.handleEvent = async function ({ api, args, Users, event, Threads, utils, client }) {
  let { messageID, threadID, senderID, mentions } = event;
  const chalk = require('chalk');
   const moment = require("moment-timezone");
var time= moment.tz("Asia/Dhaka").format("LLLL");   
const thread = global.data.threadData.get(event.threadID) || {};
if (typeof thread["console"] !== "undefined" && thread["console"] == true) return;
if (event.senderID == global.data.botID) return;
var nameBox = global.data.threadInfo.get(event.threadID).threadName || "Name does not exist";
var nameUser = await Users.getNameUser(event.senderID)
  var msg = event.body||"Photos, videos or special characters";
  var job = ["#253fa8", "#ebac88", "242e87", "#f0dade", "#2ce8c6", "#e089e0", "#1ac6d9", "#eb8a8a", "#d687ab", "#12ffcc", "#e37876"];
  var random = 
job[Math.floor(Math.random() * job.length)]      
  var random1 = job[Math.floor(Math.random() * job.length)]
 var random2 = job[Math.floor(Math.random() * job.length)]
var random3 = job[Math.floor(Math.random() * job.length)]
  console.log(chalk.hex("#" + random)(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n➪Group name: ${nameBox}\n\n➪Username: ${nameUser}\n\n➪Content: ${msg}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)); 
}
module.exports.run = async function ({ api, args, Users, event, Threads, utils, client }) {

}