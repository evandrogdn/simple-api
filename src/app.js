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
            res.append("Access-Control-Allow-Origin", "*");
            res.append("Content-Type", "Application/Json");
            res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
            res.append("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
            next();
        });
    }

    routes() {
        this.server.use(require('./routes'));
    }
}

module.exports = new App().server;