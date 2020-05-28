const Axios = require('axios');
require("dotenv").config();

Axios.defaults.timeout = 20000;
Axios.defaults.headers.common['X-Riot-Token'] = process.env.RIOTAPIKEY;
const riotApi = Axios.create({
  baseURL: 'https://br1.api.riotgames.com/'
});

module.exports = riotApi;