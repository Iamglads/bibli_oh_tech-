const express = require('express');
const app = express.Router();

const userCtrl = require('../controllers/user');

app.post('/register', userCtrl.register);
app.post('/login', userCtrl.login);


module.exports = app;