module.exports.config = {
  name: "comment",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Prince Sanel",
  description: "Comment on a post",
  commandCategory: "Random",
  usages: "[postid]|[Text]",
  cooldowns: 1,
}; 
module.exports.run = async function ({ api, event, args }) {
  const req = args.join(" ").split("|");
  const postID = req[0]; // Replace with the actual post ID
    const message = req[1];
    if (!args[0]) api.sendMessage("[!] Need an PostID to comment with.", event.threadID, event.messageID);
    api.sendMessage(message, postID, (err, messageInfo) => {
    if (err) return console.error(err);
    api.sendMessage(`Successfully Commented on a post\nComment ID: ${messageInfo.messageID}`, event.threadID, event.messageID);
   });



}
