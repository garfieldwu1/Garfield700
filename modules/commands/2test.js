module['exports']['config'] = {
    name: "test",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Sam",
    description: "info",
    commandCategory: "game",
    usages: "",
    cooldowns: 5
}

module['exports']['run'] = async function ({ api, event }) {
  let data = await api['getUserInfoV2'](event['senderID'])
  return api['sendMessage'](JSON['stringify'](data, null, "\t"), event['threadID'], event['messageID'])
}