const axios = require('axios');

module.exports.config = {
  name: "quotes",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "ryuko",
  description: "randomly receive quotes",
  usePrefix: false,
  commandCategory: "no prefix",
  usages: "quotes",
  cooldowns: 10,
};

module.exports.run = async function ({ api, event, args, message }) {
 try { 
 const response = await axios.get(`https://milanbhandari.imageapi.repl.co/quote`, {
 params: {
 apikey: 'milanbh',
 }
 });
 const message = `From: ${response.data.anime}\n\nQuote: ${response.data.quote}\n\nBy: ${response.data.character}`;
 return api.sendMessage(message, event.threadID);
 } catch (error) {
 console.error(error);
 }
    }
