const { Client } = require("discord.js"),
  fs = require("fs"),
  readline = require("readline");

class Checker {
  constructor(tokensFilePath) {
    this.tokensFilePath = tokensFilePath;
  }

  async start() {
    const readInterface = await readline.createInterface({
      input: fs.createReadStream(this.tokensFilePath),
      output: process.stdout
    });

    readInterface.on("line", async token => {
      let client = new Client();
      try {
        await client.login(token);
        await console.log(`Working token: ${token}`);
      } catch (err) {
        if (err.message == "Incorrect login details were provided.")
          throw new Error(`Incorrect token: ${token}`);
      }
    });
  }
}
