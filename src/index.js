const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(
    "mongodb://localhost:27017/estoque",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use((req, res, next) => {
    req.io = io;

    next();
});

app.use(cors());

app.use(require('./routes'));

app.listen(3001);