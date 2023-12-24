const fetch = require("cross-fetch");
const { response } = require("express");
const AIC_URL = "https://api.steampowered.com/";

const getUser = async (req, res = response) => {
    const { keyword } = req.params;

    try {
        const resp = await fetch(
            `${AIC_URL}ISteamUser/GetPlayerSummaries/v0002/?key=4F3ABF72FB11931A802C9BE3571FDE6C&steamids=${keyword}`,
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