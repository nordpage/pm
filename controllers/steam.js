const fetch = require("cross-fetch");
const { response } = require("express");
const AIC_URL = "https://api.steampowered.com/";

const SteamAPI = require('steamapi');
const steam = new SteamAPI('4F3ABF72FB11931A802C9BE3571FDE6C');

const getUser = async (req, res = response) => {
    const { keyword } = req.params;

    try {
      steam.getUserSummary(keyword).then(summary => {
          res.json(summary);
        });
    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    getUser,
};