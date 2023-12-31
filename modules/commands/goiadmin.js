module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "John Arida",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100027399343135") {
    var aid = ["100027399343135"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Wag mo i ment admin ko please kung gusto mo pang masikatan ng araw😏, Busy si Mark pakyu🖕🏻", "Sorry offline sya wag mo hanapin pag wala masasaktan ka lang😿", "Ano kailangan mo sa kanya? pag walang kailangan shutup na🤬","Tawag ka ng tawag sa admin ko ah my gusto kaba sa kanya ha? tigil tigilan mo kaka ment sa admin ko hayop ka😈","Want mo masapak? tumigil kana papansin ka masyado bobo😝"];
      api.setMessageReaction("😍", event.messageID, (err) => {}, true);
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}