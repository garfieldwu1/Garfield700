module.exports.config = {
name: "chords",
version: "1.0.0",
hasPermssion: 0,
credits: "Deku",
description: "View song chords",
commandCategory: "media",
usages: "[name of the song]",
cooldowns: 2
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
    try {
        let axios = require('axios');
        let fs = require("fs-extra");
        let request = require("request");
        let {threadID, senderID, messageID} = event;
        let juswa = args.join(" ");
	const res = await axios.get(`https://api.reikomods.repl.co/sus/guitar?chords=${juswa}`);
      	console.log(res.data);
	var data = res.data;
      let callback = function() {
            return api.sendMessage({
                body:`Title: ${data.title}\nArtist: ${data.artist}\nKey: ${data.key}\nChords:\n\n${data.chords}`, messageID);
        };