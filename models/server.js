const express = require("express");
const cors = require("cors");
const path = require("path");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            auth: "/api/auth",
            steam: "/api/steam",
        };

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());

    }

    // Bind controllers to routes
    routes() {
        this.app.use(this.paths.steam, require("../routes/steam"));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port: ", this.port);
        });
    }
}

module.exports = Server;