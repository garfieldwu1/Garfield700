module.exports.config = {
    name: "tst",
    version: "1.0.5",
    hasPermssion: 2,
    credits: "juswa",
    description: "hakdog",
    commandCategory: "system",
    usages: "add [words]",
    cooldowns: 1,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
}
module.exports.onLoad = function () {
    const fs = global.nodemodule["fs-extra"]
    const path = global.nodemodule["path"]
    !fs.existsSync(path.join(__dirname, "./cache/badwords.json")) ? fs.writeFileSync(path.join(__dirname, `./cache/badwords.json`), JSON.stringify({}, null, 4), {mode: 0o666}) : "";
}

module.exports.handleEvent = async ({api, event}) => {
    const request = global.nodemodule["request"]
    const fs = global.nodemodule["fs-extra"]
    const path = global.nodemodule["path"]
    var data = JSON.parse(fs.readFileSync(path.join(__dirname, "./cache/juswa.json"), {encoding: "utf8"}))
    //Get group name (threadName) and message person name (name)
    let user = await api.getUserInfo(event.senderID)
    let thread = await api.getThreadInfo(event.threadID)
    let name = user[event.senderID].name


    var admin = "" //uid ng admin
    if(event.senderID == api.getCurrentUserID()) return;
    if (data[event.body]) {
      return api.sendMessage({
        body: `${name} violation of the word ${event.body}, bot will automatically left this fucking group`,
        mentions:[{
                tag:name, 
                id:event.senderID
            }]
      },event.threadID,() => {
            var idad = global.config.ADMINBOT
            api.removeUserFromGroup(api.getCurrentUserID(),event.threadID)
            for(let ad of idad){
                setTimeout(()=>{
                    var callback = () => api.sendMessage({
                        body:`[SYSTEM] The bot just went out ${thread.name} - ${event.threadID}\n Reason: \n${name} - ${event.senderID} : ${event.body}`,
                        attachment: fs.createReadStream(__dirname + "/cache/avatar_thread_badword.jpg")
                    }, ad, () => fs.unlinkSync(__dirname + "/cache/avatar_thread_badword.jpg"))
                    request(encodeURI(`${thread.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/avatar_thread_badword.jpg')).on('close',() => callback())
                },5000)
            }
        })
    }
}
module.exports.run = async function({api, args, event}) {
    const fs = global.nodemodule["fs-extra"]
    const path = global.nodemodule["path"]
    var content = args.splice(1, args.length)
    if (!content) return api.sendMessage(`Master please add text`,event.threadID, event.messageID)
    var data = JSON.parse(fs.readFileSync(path.join(__dirname, "./cache/juswa.json"), {encoding: "utf8"}))
    if (!args[0])return api.sendMessage(`Use ${global.config.PREFIX}${this.config.name} add [text]`,event.threadID,event.messageID)
    if (args[0] == `add`){
      if (!content) return api.sendMessage(`Missing words`,event.threadID, event.messageID)
      if (data[content]) return api.sendMessage(`Already available from ${content}`,event.threadID, event.messageID)
      data[content] = {}
      try{
         fs.writeFileSync(path.join(__dirname, `./cache/juswa.json`), JSON.stringify(data, null, 4), {mode: 0o666})
        return api.sendMessage("Adding words success!", event.threadID, event.messageID)
      }catch(err){
        return api.sendMessage("Error: "+err, event.threadID, event.messageID)
      }
    }else if(args[0] == `del`){
      if (!data[content]) return api.sendMessage(`There is no word for this`,event.threadID, event.messageID)
      delete data[content]
      try{
         fs.writeFileSync(path.join(__dirname, `./cache/juswa.json`), JSON.stringify(data, null, 4), {mode: 0o666})
      return api.sendMessage("Delete word successfully!", event.threadID, event.messageID)
      }catch(err){
        return api.sendMessage("Error: "+err, event.threadID, event.messageID)
      }
    }else if(args[0] == `list`){
        var list = Object.keys(data) , number = 0 ;
        var msg = "List of forbidden words:\n";
        for(let text of list){
            number++
            msg += `${number}. ${text}\n`
        }
        return api.sendMessage(msg, event.threadID, event.messageID)
    }
}
