const Discord = require("discord.js");
const bot = new Discord.Client();

const { token, prefix } = require('./config');
const routes = require('./routes');

bot.login(token);

bot.on("ready", () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  bot.user.setActivity(`${prefix}commands to help`);
});


bot.on("message", msg => {
  if (msg.content.startsWith(prefix)) {
    routes(msg);
  }
});
