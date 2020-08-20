// route

const express = require('express');
const router = express.Router();


// authentification
const auth = require('../middleware/auth');

// le fichier controller
const livreController = require('../controllers/livre.controller');

router.get("/livres", auth, livreController.livres_affichage);
router.get('/livres/:id', livreController.livre_affichage);
//router.post('/livres', upload.single("image"), livreController.livre_ajouter); 
router.post("/livres/delete/:id", livreController.livre_suppression);

module.exports = router;