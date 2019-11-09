const express = require('express');

class App {

    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use((req, res, next) => {
            res.append("Access-Control-Allow-Origin", ["*"]);
            next();
        });
    }

    routes() {
        this.server.use(require('./routes'));
    }
}

module.exports = new App().server;