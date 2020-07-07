// route

const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');

router.get('/', loginController.loginProject)
router.get('/log/register', loginController.registerProjetc)

module.exports = router;