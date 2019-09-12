const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use((req, res, next) => {
    req.io = io;

    next();
});

app.use(cors());

app.use(require('./routes'));

app.listen(3001);