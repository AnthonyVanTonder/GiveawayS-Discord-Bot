<h1 align="center">

<img src="https://images-ext-1.discordapp.net/external/t_gCzO58AOb2eZ_Xjrnt3cBlqdu0-QWELoIrFH-D9_E/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1037359071818432512/dd0a60d9f487adf703022cdbe1d06772.webp" alt="logo" width="256"/>
<br/>
GiveawayS Discord Bot
</h1>

<h4 align="center">Hold giveaways quickly and easily on your Discord server! Written In [Discord.js](https://discord.js.org) v13.5.0 and [Node.js](https://nodejs.org) v16.13.1
</h4>

<div align="center">

![Maintenance](https://img.shields.io/maintenance/yes/2022?style=plastic)
![GitHub package.json version](https://img.shields.io/github/package-json/v/AnthonyVanTonder/GiveawayS-Discord-Bot)
![GitHub repo size](https://img.shields.io/github/repo-size/AnthonyVanTonder/GiveawayS-Discord-Bot)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/AnthonyVanTonder/GiveawayS-Discord-Bot/discord.js)
![Discord Support](https://img.shields.io/discord/889487066440818690?label=Discord%20Support&labelColor=FFFFF&style=plastic&logo=Discord&link=https://discord.gg/ZAzGRFTv59&link=https://discord.gg/ZAzGRFTv59)
[![Run on Repl.it](https://repl.it/badge/github/AnthonyVanTonder/GiveawayS-Discord-Bot)](https://repl.it/github/AnthonyVanTonder/GiveawayS-Discord-Bot)
[![Contributors](https://img.shields.io/github/contributors/AnthonyVanTonder/GiveawayS-Discord-Bot?label=Contributors&color=yellow)](https://github.com/AnthonyVanTonder/GiveawayS-Discord-Bot/graphs/contributors)
[![LICENSE](https://img.shields.io/github/license/AnthonyVanTonder/GiveawayS-Discord-Bot?label=License&color=blueviolet)](https://github.com/AnthonyVanTonder/GiveawayS-Discord-Bot/blob/main/LICENSE)
[![Stars](https://img.shields.io/github/stars/AnthonyVanTonder/GiveawayS-Discord-Bot.svg)](https://github.com/AnthonyVanTonder/GiveawayS-Discord-Bot/stargazers)
[![CodeFactor](https://www.codefactor.io/repository/github/anthonyvantonder/thegiveawaybot/badge)](https://www.codefactor.io/repository/github/anthonyvantonder/GiveawayS-Discord-Bot)


</div>

# Credits

This code is created by [@Aim2339](https://github.com/Aim2339) Aim2339 deleted the original code of this code. I only added it back if anyone wants to use this code Aim2339 if you want me to delete this repositories pleas let me know and I will remove it. When using this code pleas make sure to credit Aim2339 when using this code.

# Usage

🎉 TheGiveawayBot commands:

- **/about** - shows info about the bot
- **/invite** - shows how to invite the bot
- **/ping** - checks the bot's latency
- **/help** - Shows you Help for TheGiveawayBot
- **/commands** - View all the commands available to the bot!
- **/feedback** [content] - Send me feedback. (can include bugs/problems)
- **/support** - Gets a link to my support guild!

Giveaway:

- **/start [time] [winners] [prize] [#channel]** - starts a giveaway with the provided number of seconds. For example, /g start 30s 2 Steam Code #giveaway would start a 30-second giveaway for a Steam Code with 2 winners in the #giveaway channel! To use minutes/hours/days/weeks/months instead of seconds, simply include an "m", "h", or "d" in the time ~ 3m would be a would be a 3-minute giveaway.
- **/end [messageId]** - ends the most recent giveaway in the current channel. If you want to end an older/more specific giveaway, use **/g end [messageId]**
- **/reroll [messageId]** - picks a new winner from the latest giveaway. If you want to reroll an older giveaway, you can use **/reroll [messageId]**
- **/edit [messageId]** - allows you do edit your giveaway that you have hosted.
- **/delete [messageId]** - Delete a giveaway that have been made.
- **/resume [messageId]** - Resume a paused giveaway.
- **/pause [messageId]** - Pause active giveaways on the server.
- **/list** - lists all the currently-running giveaways on the server

Do not include <> nor [] - <> means required and [] means optional.

# Installation | How to use the Handler

 **1.** Install [node.js v16+](https://nodejs.org/) or higher

 **2.** Download this repo and unzip it    |    or git clone it

 **3.** Install all of the packages with **`npm install`**
 
 **4** Fill in the parameters, RIGHT in `config.json`!

 **5.** start the bot with **`node_modules/.bin/node sharding.js`**!
