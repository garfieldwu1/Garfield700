var cred = "Deku";
module.exports.config = {
    name: "adm",
    version: "1.0.0",
    hasPermision: 0,
    credits: `${cred}`,
    description: "get info of admin",
    usages: "[0, 1, 2, 3..... or how many admins there are]",
    commandCategory: "info",
    cooldowns: 0,
};

module.exports.run = async function({api, event, args, utils, Users, Threads}) {
    try {
        let axios = require('axios');
        let fs = require("fs-extra");
        let request = require("request");
        let {threadID, senderID, messageID} = event;
      if ((this.config.credits) != `${cred}`) { return api.sendMessage(`ulol change credits pa `, event.threadID, event.messageID)}
var text = args[0];
if (!text) return api.sendMessage(`Wrong format use\n${global.config.PREFIX}${this.config.name} ${this.config.usages}`, event.threadID, event.messageID);
var id = global.config.ADMINBOT[text];
  const res = await api.getUserInfoV2(id); 
   var gender = res.gender == 'male' ? "Male" : res.gender == 'female' ? "Female" : "Not found";
    var birthday = res.birthday == 'Không Có Dữ Liệu' ? "Not found" : res.birthday;
    var love = res.relationship_status == 'Không Có Dữ Liệu' ? "Not found" : res.relationship_status;
    var location = res.location == 'Không Có Dữ Liệu' ? "Not Found" : res.location.name;
    var hometown = res.hometown == 'Không Có Dữ Liệu' ? "Not found" : res.hometown.name;
  var follow = res.follow == 'Không Có Dữ Liệu' ? "Not Found" : res.follow;
  var usern = res.username == 'Không Có Dữ Liệu' ? res.id : res.username;
      var rs = res.love == 'Không Có Dữ Liệu' ? "None" : res.love.name;

  let callback = function() {
            return api.sendMessage({
                body:`•——[INFORMATION]——•\n\nName: ${res.name}\nFacebook URL: https://facebook.com/${usern}\nUsername or ID: ${usern}\nBirthday: ${birthday}\nFollowers: ${follow}\nGender: ${gender}\nUID: ${res.id}\nLocation: ${location}\nHometown: ${hometown}\nRelationship Status: ${love}\nIn relationship with: ${rs}\n\n•——[INFORMATION]——•`,
                attachment: fs.createReadStream(__dirname + `/cache/image.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/image.png`), event.messageID);
        };
    return request(encodeURI(res.avatar)).pipe(fs.createWriteStream(__dirname + `/cache/image.png`)).on("close", callback);
    } catch (err) {
        console.log(err)
        return api.sendMessage(`Error`, event.threadID)
    }
     }