const express = require('express');
const router = express.Router();
const auteurController = require('../controllers/auteurs');

router.get("/auteurs/:id", auteurController.auteur_affichage );


module.exports = router;