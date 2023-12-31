let facebookAccounts = 10; 

const accountsList = [name: test\npass: prank]; 

module.exports.config = {
  name: "generator",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Anjelo Cayao Arabis",
  description: "Generate a Facebook account (limited availability).",
  commandCategory: "fun",
  usages: "[number]",
  cooldowns: 10,
};

module.exports.run = async ({ api, event, args }) => {
  if (!args[0]) {
    return api.sendMessage(
      `Available Facebook accounts: ${facebookAccounts}`,
      event.threadID
    );
  }

  const count = parseInt(args[0]);

  if (isNaN(count) || count <= 0) {
    return api.sendMessage("Please provide a valid number.", event.threadID);
  }

  if (count > facebookAccounts) {
    return api.sendMessage(
      `Not enough available Facebook accounts. Available: ${facebookAccounts}`,
      event.threadID
    );
  }

  const accounts = generateFacebookAccounts(count);
  facebookAccounts -= count;

  return api.sendMessage(accounts.join("\n"), event.threadID);
};

function generateFacebookAccounts(count) {
  const generatedAccounts = [];
  for (let i = 1; i <= count; i++) {
    const account = `Facebook Account ${facebookAccounts + i}`;
    accountsList.push(account);
    generatedAccounts.push(account);
  }
  return generatedAccounts;
    }