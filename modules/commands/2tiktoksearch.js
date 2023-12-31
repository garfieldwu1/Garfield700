module.exports.config = {
  name: "tiktoksearch",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "Search Tiktok",
  commandCategory: "Utilities",
  usages: "[username]",
  cooldowns: 5
};
module.exports.run = async (
{
  api,
  event,
  args
}) =>
{
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  let juswa = args.join(" ");
  const res = await axios.get(`https://manhict.tech/api/tikSearch?query=${juswa}&apikey=lgG765KO`);	
    var juswa = 1
    juswa = parseInt(args[1]) || 1;
    juswa < -1 ? juswa = 1 : "";
    var limit = 6;
    var juswa1 = res.data.result.length;
    var juswa2 = Math.ceil(juswa1 / limit);
      var msg = [];
    for (var i = limit * (juswa - 1); i < limit * (juswa - 1) + limit; i++) {
      if (i >= juswa1) break;
      var nv = res.data.result[i].desc;
      var nv1 = res.data.result[i].time;
      msg += `${i + 0}. ${nv}/${nv1}\n`
    }

    msg += `Have everything ${juswa1} result.\nPage of ${juswa}/${juswa2}\nUse ${global.config.PREFIX}${this.config.name} search (number of pages) to be able to see the next page.`;
    return api.sendMessage(` ─RESULT─ \n` + msg + `\n ──End── `, threadID, messageID);
    }