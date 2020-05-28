const { prefix } = require("../config");

module.exports = {
  GetCommandList: (msg) => {
    return msg.channel.send(
      `Commands:\n` +
      `${prefix}sm [Summoner Name] --- Gets summuners info`
    );
  }
}