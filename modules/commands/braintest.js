const axios = require('axios');

module.exports.config = {
  name: "braintest",
  version: "1.0",
  hasPermission: 0,
  credits: "RICKCIEL",
  usePrefix: true,
  description: "Answer using =answer a, b, c, or d.",
  commandCategory: "Fun",
  cooldowns: 5,
};

const triviaData = {};

module.exports.run = async ({ api, event }) => {
  const { threadID } = event;

 
  if (triviaData[threadID] && !triviaData[threadID].answered) {
    const designMessage = " There is an active trivia question. Please answer the previous question before starting a new one.";
    api.sendMessage(designMessage, threadID);
    return;
  }

  try {
    const response = await axios.get('https://opentdb.com/api.php?amount=1&type=multiple');
    const question = response.data.results[0];

    const options = [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5);
    const optionsString = options.map((option, index) => `${String.fromCharCode(97 + index)}) ${option}`).join('\n');

    const questionMessage = `🎯Trivia Question🎯:\n\n${question.question}\n\n${optionsString}`;
    api.sendMessage(questionMessage, threadID);

    triviaData[threadID] = {
      correctIndex: options.indexOf(question.correct_answer),
      answered: false,
    };

    api.listenMqtt((_, message) => {
      if (message.body && /^=answer [a-d]$/.test(message.body.toLowerCase()) && !triviaData[threadID].answered) {
        const userAnswer = message.body.toLowerCase().split(' ')[1];
        const { correctIndex } = triviaData[threadID];

        if (userAnswer === String.fromCharCode(97 + correctIndex)) {
          api.sendMessage(`Correct! The answer is: ${options[correctIndex]}🎉`, threadID);
        } else {
          api.sendMessage(`Sorry, the correct answer is: ${options[correctIndex]}😞`, threadID);
        }

        triviaData[threadID].answered = true;
      }
    });
  } catch (error) {
    console.error("Error fetching trivia question:", error);
    api.sendMessage("An error occurred while fetching the trivia question.", threadID);
  }
};