const fetch = require("cross-fetch");
const { response } = require("express");
const AIC_URL = "https://api.steampowered.com/";

const getUser = async (req, res = response) => {
    const { keyword } = req.params;

    try {
        const resp = await fetch(
            `${AIC_URL}ISteamUser/GetPlayerSummaries/v0002/?key=0EFAA7838348709DF0247F408F1B5FC8&steamids=${keyword}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const { data } = await resp.json();
        console.log(data)

        res.json(data);
    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    getUser,
};