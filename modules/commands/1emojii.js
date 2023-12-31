module.exports.config = {
  name: "emojitrollv2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "John Arida",
  description: "encrypt messages to emoji and vice versa",
  commandCategory: "game",
  usages: "emojitroll en <text>\nOr\nemojitroll de <text>",
  cooldowns: 5
};

module.exports.run = async ({ event, api, args }) => {
  var text = args.slice(1).join(" ");
  var type = args[0];
      if (type == 'encode' || type == "en") {
          text = text.toLowerCase();
          text = text.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|a|A/g, "😀");
          text = text.replace(/b|B/g, "😃");
          text = text.replace(/c|C/g, "😁");
          text = text.replace(/đ|D|d/g, "😅");
          text = text.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|e|E/g, "🥰");
          text = text.replace(/f|F/g, "🤣");
          text = text.replace(/g|G/g, "🥲");
          text = text.replace(/h|H/g, "☺️");
          text = text.replace(/ì|í|ị|ỉ|ĩ|i|I/g, "😊");
          text = text.replace(/j|J/g, "🤗");
          text = text.replace(/k|K/g, "😇");
          text = text.replace(/l|L/g, "😉");
          text = text.replace(/m|M/g, "😒");
          text = text.replace(/n|N/g, "😞");
          text = text.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|o|O/g, "😙");
          text = text.replace(/p|P/g, "😟");
          text = text.replace(/q|Q/g, "😕");
          text = text.replace(/r|R/g, "🙂");
          text = text.replace(/s|S/g, "🙃");
          text = text.replace(/t|T/g, "☹️");
          text = text.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|u|U/g, "😡");
          text = text.replace(/v|V/g, "😍");
          text = text.replace(/x|X/g, "😩");
          text = text.replace(/ỳ|ý|ỵ|ỷ|ỹ|y|Y/g, "😭");
          text = text.replace(/w|W/g, "😳");
          text = text.replace(/z|Z/g, "😠");
          text = text.replace(/ /g, "."); // Replace space with dot

          // Some system encode Vietnamese combining accent as individual utf-8 characters
          text = text.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
          text = text.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
          return api.sendMessage(text, event.threadID, event.messageID);
      }
      else if (type == 'decode' || type == "de") {
          text = text.toLowerCase();
          text = text.replace(/😀/g, "A");
          text = text.replace(/😃/g, "B");
          text = text.replace(/😁/g, "C");
          text = text.replace(/😅/g, "D");
          text = text.replace(/🥰/g, "E");
          text = text.replace(/🤣/g, "F");
          text = text.replace(/🥲/g, "G");
          text = text.replace(/☺️/g, "H");
          text = text.replace(/😊/g, "I");
          text = text.replace(/🤗/g, "J");
          text = text.replace(/😇/g, "K");
          text = text.replace(/😉/g, "L");
          text = text.replace(/😒/g, "M");
          text = text.replace(/😞/g, "N");
          text = text.replace(/😙/g, "O");
          text = text.replace(/😟/g, "P");
          text = text.replace(/😕/g, "Q");
          text = text.replace(/🙂/g, "R");
          text = text.replace(/🙃/g, "S");
          text = text.replace(/☹️/g, "T");
          text = text.replace(/😡/g, "U");
          text = text.replace(/😍/g, "V");
          text = text.replace(/😩/g, "X");
          text = text.replace(/😭/g, "Y");
          text = text.replace(/😳/g, "W");
          text = text.replace(/😠/g, "Z");
          text = text.replace(/\./g, ' '); // Replace dot with space
          return api.sendMessage(text, event.threadID, event.messageID);
      }
      else {return api.sendMessage("Syntax error!\nFormat:\nemojitroll encode <text>\nOr\n emojitroll decode <text>", event.threadID, event.messageID)}

}