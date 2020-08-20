// route
const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/log/register', userCtrl.register);
router.post('/', userCtrl.login);


module.exports = router;