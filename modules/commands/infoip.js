module.exports.config = {
  name: "ipinfo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description : "Check network ip address information" ,
  commandCategory: "Media",
  usages : "Check network ip address information" ,
  cooldowns: 5,
  dependencies: {
    "ip-info3": ""
  }
};

module.exports.run = async({api, event, args}) => {
const IPInfo = require("ip-info3")
const  getinfo  =  new  IPInfo . getIPInfo ( ) ;
   if ( args . length  ==  0 ) api . sendMessage ( "Please enter ip address." , event . threadID , event . messageID )
    getinfo.GetAll(args[0]).then(data => {
     var  a  =  data
      api.sendMessage({body:`=====DATA======
      \nRegion: ${ a . countryCode }
      \nCountry: ${ a . country }
      \nRegion: ${a.region}
      \nRegion Name: ${ a . regionName }
      \nCity: ${ a . city ​​}
      \nTime zone: ${ a . timezone }\nZip: ${a.zip}
      \nCarrier: ${ a . org } ` , location : {
        latitude: a.lat,
        longitude: a.lon,
        current: true
      }}, event.threadID, event.messageID)
if(a.message == 'private range') api.sendMessage("private range !!!",event.threadID,event.messageID)
if(a.message == 'invalid query')api.sendMessage("Invalid ip address.",event.threadID, event.messageID)
})
}