const express = require('express');
const app = express.Router();
const auteurController = require('../controllers/auteurs');

app.get("/auteurs/:id", auteurController.auteur_affichage );


module.exports = app;