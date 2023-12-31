const axios = require('axios');
const config = require('../config.json');

module.exports = {
  name: 'robloxuser',
  description: 'Get Roblox user Info.',
  execute(api, threadID, messageID, args) {
    const [username] = args;

    if (!username) {
      api.sendMessage(`Please provide a username.\nExample: ${config.prefix}robloxuser builderman`, threadID, messageID);
      return;
    }
    axios.post('https://users.roblox.com/v1/usernames/users', {
      usernames: [username],
      excludeBannedUsers: true
    })
      .then(response => {
        const userData = response.data.data[0];
        if (!userData) {
          api.sendMessage(`User '${username}' not found.`, threadID, messageID);
          return;
        }
        const { name, id, displayName, hasVerifiedBadge } = userData;
        let message = `Username: ${name}\n`;
        message += `Display Name: ${displayName}\n`;
        message += `User ID: ${id}\n`;
        message += `Badges: `;
        axios.get(`https://accountinformation.roblox.com/v1/users/${id}/roblox-badges`)
          .then(response => {
            const badges = response.data;
            badges.forEach(badge => {
              message += `${badge.name}, `;
            });
            message = message.slice(0, -2);
            axios.get(`https://users.roblox.com/v1/users/${id}`)
              .then(response => {
                const { description, created, isBanned } = response.data;
                message += `\n\nBio: ${description}\n\n`;
                message += `Verified Badge: ${hasVerifiedBadge ? 'Yes' : 'No'}\n`;
                message += `Created: ${created}\n`;
                message += `Banned: ${isBanned ? 'Yes' : 'No'}\n`;
                message += `Profile: https://roblox.com/users/${id}\n`;
                axios.get(`https://games.roblox.com/v2/users/${id}/games?`)
                  .then(response => {
                    const games = response.data.data;
                    if (games.length > 0) {
                      message += `Games:\n\n`;
                      games.forEach(game => {
                        message += `┌\n    Name: ${game.name}\n`;
                        message += `    Description: ${game.description || 'N/A'}\n`;
                        message += `    Place Visits: ${game.placeVisits}\n`;
                        message += `    Created: ${game.created}\n`;
                        message += `    Updated: ${game.updated}\n└\n`;
                      });
                    } else {
                      message += 'No games found.\n';
                    }
                    api.sendMessage(message, threadID, messageID);
                  })
                  .catch(error => {
                    console.error('Something went wrong:', error);
                    api.sendMessage('An error occurred. Please try again later.', threadID, messageID);
                  });
              })
              .catch(error => {
                console.error('Something went wrong:', error);
                api.sendMessage('An error occured. Please try again later.', threadID, messageID);
              });
          })
          .catch(error => {
            console.error('Something went wrong:', error);
            api.sendMessage('An error occurred. Please try again later.', threadID, messageID);
          });
      })
      .catch(error => {
        console.error('Something went wrong:', error);
        api.sendMessage('An error occurred. Please try again later.', threadID, messageID);
      });
  },
};