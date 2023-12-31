const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "manhIT",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["hi, I'm Mark's bot", "What do you call me??", "i love you baby", "Love you >3", "Hi, hello baby wife:3", "What's wrong with the wife calling??", "Use callad to communicate with admin!", "You are the cutest bot on the planet", "What are you saying pig", "It's me~~~~", "Love you BLACK the most", "he's ADMIN's be", "Love admin the most", "He is admin's backend", "What's up princess?", "Don't make me sad ~~~", "Play word reading with me ah ah ah", "Recruiting pilots", "Being a superhero? very happy", "Are you lonely??", "Set rela is not too rushed!!!", "It's okay :)))", "I do like my master", "Don't praise me for being too shy" ,"Will you be my wife? ?", "Don't spam me :<<, I'm so tired", "bla bla", "Don't push him hard!!!", "Just hit tutu, it hurts :'(", "Loving you is like a torture\click up and down let's play together", "Spam cc fuck", "Do you love me?", "Your wife is here", "Admin likes Gura, how about you?", "I like you too <3", "how are you?", "have you already take a breakfast?", "It's nice to see you", "don't be sad, I'm still here", "ughh, noo not there. plss", "never gonna give you up", "pls pm me", "The admin are busy"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
 let userH = event.senderID 
    /*api.getUserInfo(parseInt(userH), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", ""); */
    
  const firstname = global.data.userName.get(userH) || await Users.getNameUser(userH);
	if (event.senderID == api.getCurrentUserID()) return;

    var msg = {
      body: firstname + ", " + rand, 
      mentions: [{
          tag: firstname,
          id: userH
        }]
    }
    return api.sendMessage(msg, threadID, messageID);
    //  })
  };
  let input2 = event.body.toLowerCase();
if(input2.includes("") || input2.includes("") || input2.includes("") || input2.includes("") || input2.includes("") || input2.includes("") || input2.includes("") || input2.includes("") || input2.includes("") || input2.includes("")){
					        	return api.setMessageReaction("", event.messageID, (err) => {}, true)
} 
    if(input2.includes("") || input2.includes("") || input2.includes("") || input2.includes("") ||input2.includes("") || input2.includes("") || input2.includes("")){
					        	return api.setMessageReaction("", event.messageID, (err) => {}, true)
    }


}

module.exports.run = function({ api, event, client, __GLOBAL }) { }