const express = require('express');
const db = require('./dbConfig')

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

server.use(db);

module.exports = server;