const { prefix } = require("./config");

const { GetSummonerByName } = require("./plugins/SummonerPlugin");
const { GetCommandList } = require("./plugins/MainPlugin");

module.exports = (msg) => {
  if (msg.content.startsWith(`${prefix}sm`)) 
    return GetSummonerByName(msg);

  if (msg.content === `${prefix}commands`)
    return GetCommandList(msg);
};
