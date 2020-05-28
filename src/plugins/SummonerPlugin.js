const riotApi = require('../services/riotApi');

module.exports = {
  GetSummonerByName: async (msg) => {
    const username = msg.content.split("!sm ")[1];

    if (!username) return msg.channel.send(`inform a username please.`)

    await riotApi
      .get("/lol/summoner/v4/summoners/by-name/" + encodeURIComponent(username))
      .then((response) => {
        const body = response.data;
        console.log(response.data);
        msg.channel.send(
          `Summoner Name: ${body.name} \n` +
            `Summoner Level: ${body.summonerLevel}`
        );
      })
      .catch((error) => {
        if (error.response.status === 400) {
          msg.channel.send("User not found.");
        } else {
          msg.channel.send(error.toString());
        }
      });
  },
};
