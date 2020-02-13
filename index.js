import { Client } from "discord.js";
import { readFileSync } from "fs";

class Checker {
    constructor(tokensFilePath = new String()) {
        this.tokensFilePath = tokensFilePath;
    }

    async start() {
        if (!this.tokensFilePath) throw `You must declare Checker class before using this method !`;

        try {
            const tokens = readFileSync(this.tokensFilePath, {encoding: "utf-8"}).split(/ /);
            tokens.forEach((token) => {
                const client = new Client()

                client.login(token)
                .then((_) => { console.log(`Working token: ${token}`) })
                .catch((_) => { undefined });

                client.destroy();
            });

        } catch(_) {
            throw `Invalid path was provided: ${this.tokensFilePath}`;
        }
    }
}
