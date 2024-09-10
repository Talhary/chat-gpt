const { gpt } = require("gpti");

const getData = (history, message) => {
  return new Promise((resolve, reject) => {
    gpt.v1(
      {
        messages: history,
        prompt: message,
        model: "GPT-4",
        markdown: false,
      },
      (err, data) => {
        if (err != null) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
};
module.exports = {getData}