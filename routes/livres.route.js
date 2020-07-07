// route

const express = require('express');
const app = express.Router();

// authentification
const auth = require('./middleware/auth');

// le fichier controller
const livreController = require('../controllers/livre.controller')

app.get('/livres/:id', auth, livreController.livre_affichage);
app.post('/livres', upload.single("image"), livreController.livres_ajouter); 
app.get("/livres", livreController.livres_affichage);
app.post("/livres/delete/:id", livreController.livre_suppression);

module.exports = app;