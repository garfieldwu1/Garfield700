module.exports.config = {
 name: "myinfo", 
version: "1.0.0", 
hasPermssion: 0,
 credits: "Joshua Sy", 
description: ".hee", 
commandCategory: "game", 
usages: "", 
cooldowns: 5 
}; 

 module.exports.run =async function({ api, event,args,client }) {
   const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios']; 
 const data = await api.getUserInfoV2(event.senderID);
var name = data.name 
var username = data.username
var follow = data.follow
var uid = data.uid
   var about = data.about
   var gender = data.gender
   var birthday = data.birthday
   var love = data.relationship_status 
   var rela = data.love.name  
   var id = data.love.id
   var location = data.location.name
   var place = data.location.id 
   var hometown = data.hometown.name
   var home = data.hometown.id
   var url_profile = data.link
   var web = data.website
   var quotes = data.quotes
   var link = data.imgavt

var callback = () => api.sendMessage({body:`Name: ${name}\nUserName: ${username}\nUID: ${uid}\nFollow: ${follow}\nSex: ${gender}\nBirthday: ${birthday}\nRelationship: ${love}\nLove name: ${rela}\nUID love: ${id}\nLive at: ${location}\nID Place: ${home}\nFrom: ${hometown}\nID Hometown: ${home}\nWebsite: ${web}\nPersonal URL: ${url_profile}\nQuote: ${quotes}`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID ); 
    return request(encodeURI(res.avatar)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());

 }