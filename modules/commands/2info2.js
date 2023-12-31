module.exports.config = {
  name: "info2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "get information of ",
  commandCategory: "system",
  usages: "[owner]/[creator]",
  cooldowns: 0
};

module.exports.run = async function({ api, event, args, Users }) {
const request = require("request");
const fs = require("fs")
const axios = require("axios")
const prefix = global.config.PREFIX
  const res = await api.getUserInfoV2(global.config.OWNER); 
  const res1 = await api.getUserInfoV2(global.config.CREATOR);
   var gender = res.gender == 'male' ? "Male" : res.gender == 'female' ? "Female" : "Not found";
    var birthday = res.birthday == 'Không Có Dữ Liệu' ? "Not found" : `${res.birthday}`;
    var love = res.relationship_status == 'Không Có Dữ Liệu' ? "Not found" : "Not Found";
    var location = res.location.name == 'Không Có Dữ Liệu' ? "Not Found" : `${res.location.name}` ;
    var hometown = res.hometown.name == 'Không Có Dữ Liệu' ? "Not found" : res1.hometown.name;
  var follow = res.follow == 'Không Có Dữ Liệu' ? "Not Found" : `${res.follow}`;
  var usern = res.username;
     var gender1 = res1.gender == 'male' ? "Male" : res1.gender == 'female' ? "Female" : "Not found";
    var birthday1 = res1.birthday == 'Không Có Dữ Liệu' ? "Not found" : `${res1.birthday}`;
    var love1 = res1.relationship_status == 'Không Có Dữ Liệu' ? "Not found" : "Not Found";
    var location1 = res1.location.name == 'Không Có Dữ Liệu' ? "Not Found" : `${res1.location.name}` ;
    var hometown1 = res1.hometown.name == 'Không Có Dữ Liệu' ? "Not found" : `${res1.hometown.name}`;
  var follow1 = res1.follow == 'Không Có Dữ Liệu' ? "Not Found" : `${res1.follow}`;
  var usern1 = res1.username;
if (!args[0]){ return api.sendMessage(`Wrong format\nUse: ${prefix}${this.config.name} owner (to get the information of Owner of this facebook bot account)\nUse: ${prefix}${this.config.name} creator (to get the information of Creator of this facebook bot account)`,event.threadID,event.messageID)}
else if (args[0] == "owner") {
api.sendMessage(`•——[OWNER]——•\n\nName: ${res.name}\nFacebook URL: ${res.link}\nBirthday: ${birthday}\nFollowers: ${follow}\nGender: ${gender}\nUID: 100074721738967\nLocation: ${location}\nHometown: ${hometown}\n\n•——[INFORMATION]——•`,event.threadID,event.messageID);
  }
  else if (args[0] == "creator") {
api.sendMessage(`•——[CREATOR]——•\n\nName: ${res1.name}\nFacebook URL: ${res1.link}\nBirthday: ${birthday1}\nFollowers: ${follow1}\nGender: ${gender1}\nUID: 100074721738967\nLocation: ${location1}\nHometown: ${hometown1}\n\n•——[INFORMATION]——•`,event.threadID,event.messageID)
  };
}