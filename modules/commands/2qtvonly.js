module.exports.config = {
    name: "qtvonly",
    version: "1.0",
    hasPermssion: 1,
    credits: "D-Jukie fix Kadeer",
    description: "Quản lý admin bot",
    commandCategory: "Admin",
    usages: "qtvonly",
    cooldowns: 1,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'cache', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}
module.exports.run = async function ({ api, event, args }) {
const { threadID, messageID, mentions } = event;

        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'cache', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;   
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("» Successfully disabled adminonly mode (everyone can use bots)", threadID, messageID);
        } else {
            adminbox[threadID] = true;
            api.sendMessage("» Successfully enabled qtvonly mode (only admin with qtv box can use bot)", threadID, messageID);
        }
}