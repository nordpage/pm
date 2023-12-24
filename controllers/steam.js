const fetch = require("cross-fetch");
const { response } = require("express");
const AIC_URL = "https://api.steampowered.com/";

const getUser = async (req, res = response) => {
    const { keyword } = req.params;

    try {
        const resp = await fetch(
            `${AIC_URL}ISteamUser/GetPlayerSummaries/v0002/?key=674F3A679E3FD2346AB87AE3CC2DF4D1&steamids=${keyword}`,
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