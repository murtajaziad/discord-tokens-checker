# Discord tokens checker.
<div align="center">
<p>
<a href="https://nodei.co/npm/discord-tokens-checker/"><img src="https://nodei.co/npm/discord-tokens-checker.png"></a>
</p>
<br />
 <p>
 <a href="https://www.npmjs.com/package/discord-tokens-checker"><img src="https://img.shields.io/npm/v/discord-tokens-checker.svg?maxAge=3600" alt="NPM version" /></a>
<a href="https://www.npmjs.com/package/discord-tokens-checker"><img src="https://img.shields.io/npm/dt/discord-tokens-checker.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
</div>

## About 
> A discord tokens checker that check the working tokens from a text file.


## Example
```js
const Checker = require("discord-tokens-checker"),
      checker = new Checker("./tokens.txt");

checker.start()
```
