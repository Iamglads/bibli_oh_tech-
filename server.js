const express = require('express');

const server = express();
const morgan = require('morgan');
const router = require('./router');
server.use(express.static("public"));

server.use(morgan('dev'));
server.use('/', router);


server.listen(4000);