module.exports.config = {
  name: "dare",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Peds aka Scott",
  description: "is a game of drawing questions",
  commandCategory: "Game",
  cooldowns: 1
};

module.exports.run = async ({ api, event, args, Users,__GLOBAL,Currencies }) => {

  const axios = require("axios");

  const fs = require("fs-extra");

  const request = require("request");
   const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
  var emoji = ["Break two eggs on your head.","Send the funniest picture of you on your phone.","Seductively eat a banana.","Go outside and eat a leaf.","chat mo yung una sa Contact list mo sabihin mo ^Hi love, miss na kita^","How many people have you kissed?","Have you ever sent someone a nude?","Have you ever received nudes pics/vids?","What color and kind of underwear are you wearing right now?","How many people have you slept with?","Kiss one in the group with the command #kiss [ tag ]","Tell me what makes you sad the most","What do you want most right now?","Talk bad about a friend","Tell me one thing you did that surprised me :c","What makes you happiest?","Tell me about one of your stupid games 😏","Who do you think is the prettiest in this group? ","What subject are you best at?","Let's create a poem to confess to the whole group 💁‍♂️","Use the nature of your best subject to confess your love", "What is your biggest pet peeve?", "What is your favorite board game?", "ilang inches yang tite mo? ", "What is your biggest regret?", "Why did you break up with your last boyfriend or girlfriend?", "When was the last time you lied?", "When was the last time you cried?", "What is a secret that you’ve never told anyone?", "What is the biggest mistake you’ve ever made?", "Who is your secret crush?", "What is your crush’s personality like?", "Do you believe in karma?", "Do you pee in the shower?", "Have you ever pooped yourself? If so, when?", "What is the most embarrassing thing that your parents have caught you doing?", "Who was your first kiss?", "Who is the last person you had sex with?", "How old were you when you first masturbated?", "What do you search for when you watch porn?", "Have you ever been in a “friends with benefits” situation?", "Wear your underwear on your head for five minutes.", "Twerk for a minute.", "Send a sexy text to the 20th person in your contact list."]

  var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
api.sendMessage(`Dare for :` 
 + " ( {name} ) "
  .replace(/\{name}/g, nameUser) 
 + `: ${random_emoji}\n\n\n[ ! ] => Please Follow Before Clicking Again !\n[ ! ] Contribute challenges through \'#report\' Please!`, event.threadID, event.messageID);
} 