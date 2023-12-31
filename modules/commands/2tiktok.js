module.exports.config = {
    name: "tiktokkk",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Horizon",
    description: "get tiktok no logo video",
    commandCategory: "media",
    usages: "[url]",
    cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
    const { createReadStream, unlinkSync, writeFileSync } = require("fs-extra");
    const axios = require("axios");
    const { threadID, messageID } = event;
    const request = require('request'); 
    if (event.type == "message_reply")  {
       try {
     let results = {};
    let key = await axios.get(`https://api.snaptik.site/video-key?video_url=${event.messageReply.args[0]}`)
    key = JSON.parse(JSON.stringify(key.data, null, 2))
    if (key.status !== 'success') return api.sendMessage("Link Does Not Exist Or Wrong Link, Please Report Admin",event.threadID);
    let data = await axios.get(`https://api.snaptik.site/video-details-by-key?key=${key.data.key}`)
        data = JSON.parse(JSON.stringify(data.data, null, 2))
      if (data.status !== 'success') return api.sendMessage("Link Does Not Exist Or Wrong Link, Please Report Admin",event.threadID);
     results = {
      author: data.data.author.nickname,
      idtiktok: data.data.author.unique_id,
      description: data.data.description,
      video: {
        with_watermark: `https://api.snaptik.site/download?key=${data.data.video.with_watermark}&type=video`,
        no_watermark: `https://api.snaptik.site/download?key=${data.data.video.no_watermark}&type=video`,
        no_watermark_raw: data.data.video.no_watermark_raw
      },
      music: `https://api.snaptik.site/download?key=${data.data.music}&type=music`
    }
      var path = __dirname + `/cache/tiktok.mp4`;
           const { data: stream } = await axios.get(results.video.no_watermark, { responseType: 'arraybuffer' });
              writeFileSync(path, Buffer.from(stream, 'utf-8'));
               return api.sendMessage({ body: `Name : ${results.author} || ID TikTok : @${results.idtiktok} || Content : ${results.description || "No Content"}`,attachment: createReadStream(path) }, threadID, () => unlinkSync(path), messageID);       
    }
    catch (e) {return api.sendMessage("Link Does Not Exist Or Wrong Link, Or Video In Private Mode, Please Report Admin",event.threadID);}
    }
    if (args.length == 0) return api.sendMessage("please enter the link , type : '/tiktok https://www.tiktok.com/@choul2002/video/6996459846480465179' or get music through : '/tiktok music https://www.tiktok.com/@choul2002/video/6996459846480465179'",event.threadID,event.messageID);
    switch (args[0]) {
        case "music": {
             try {
    let results = {}
    if (args.length == 0) return api.sendMessage("please enter the link, type : '/tiktok https://www.tiktok.com/@choul2002/video/6996459846480465179'",event.threadID,event.messageID);
    let key = await axios.get(`https://api.snaptik.site/video-key?video_url=${args[1]}`)
    key = JSON.parse(JSON.stringify(key.data, null, 2))
    if (key.status !== 'success') return api.sendMessage("Link Does Not Exist Or Wrong Link, Please Report Admin",event.threadID);
    let data = await axios.get(`https://api.snaptik.site/video-details-by-key?key=${key.data.key}`)
        data = JSON.parse(JSON.stringify(data.data, null, 2))
      if (data.status !== 'success') return api.sendMessage("Link Does Not Exist Or Wrong Link, Please Report Admin",event.threadID);
     results = {
      author: data.data.author.nickname,
      idtiktok: data.data.author.unique_id,
      description: data.data.description,
      video: {
        with_watermark: `https://api.snaptik.site/download?key=${data.data.video.with_watermark}&type=video`,
        no_watermark: `https://api.snaptik.site/download?key=${data.data.video.no_watermark}&type=video`,
        no_watermark_raw: data.data.video.no_watermark_raw
      },
      music: `https://api.snaptik.site/download?key=${data.data.music}&type=music`
    }
      var path = __dirname + `/cache/tiktok.m4a`;
           const { data: stream } = await axios.get(results.music, { responseType: 'arraybuffer' });
              writeFileSync(path, Buffer.from(stream, 'utf-8'));
               return api.sendMessage({ body: `Name : ${results.author} | ID TikTok : @${results.idtiktok} | Content : ${results.description || "No Content"}`,attachment: createReadStream(path) }, threadID, () => unlinkSync(path), messageID);       
    }
    catch (e) {console.log(e); return api.sendMessage("Link Does Not Exist Or Wrong Link, Or Video In Private Mode, Please Report Admin",event.threadID);}
        }
    default: 
    try {
     let results = {}
    let key = await axios.get(`https://api.snaptik.site/video-key?video_url=${args[0]}`)
    key = JSON.parse(JSON.stringify(key.data, null, 2))
    if (key.status !== 'success') return api.sendMessage("Link Does Not Exist Or Wrong Link, Please Report Admin",event.threadID);
    let data = await axios.get(`https://api.snaptik.site/video-details-by-key?key=${key.data.key}`)
        data = JSON.parse(JSON.stringify(data.data, null, 2))
      if (data.status !== 'success') return api.sendMessage("Link Does Not Exist Or Wrong Link, Please Report Admin",event.threadID);
     results = {
      author: data.data.author.nickname,
      idtiktok: data.data.author.unique_id,
      description: data.data.description,
      video: {
        with_watermark: `https://api.snaptik.site/download?key=${data.data.video.with_watermark}&type=video`,
        no_watermark: `https://api.snaptik.site/download?key=${data.data.video.no_watermark}&type=video`,
        no_watermark_raw: data.data.video.no_watermark_raw
      },
      music: `https://api.snaptik.site/download?key=${data.data.music}&type=music`
    }
      var path = __dirname + `/cache/tiktok.mp4`;
           const { data: stream } = await axios.get(results.video.no_watermark, { responseType: 'arraybuffer' });
              writeFileSync(path, Buffer.from(stream, 'utf-8'));
               return api.sendMessage({ body: `Name : ${results.author} | TikTok ID : @${results.idtiktok} | Content : ${results.description || "No Content"}`,attachment: createReadStream(path) }, threadID, () => unlinkSync(path), messageID);       
    }
    catch (e) {return api.sendMessage("Link Does Not Exist Or Wrong Link, Or Video In Private Mode, Please Report Admin",event.threadID);}
    }
};