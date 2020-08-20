const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');

router.get('/', homeController.homeLogin)
router.get('/log/register', homeController.register)

module.exports = router;