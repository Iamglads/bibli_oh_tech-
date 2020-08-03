// route

const express = require('express');
const router = express.Router();


// authentification
const auth = require('../middleware/auth');

// le fichier controller
const livreController = require('../controllers/livre.controller')

router.get('/livres/:id', auth, livreController.livre_affichage);
//router.post('/livres', upload.single("image"), livreController.livres_ajouter); 
router.get("/livres", auth, livreController.livres_affichage);
router.post("/livres/delete/:id", livreController.livre_suppression);

module.exports = router;