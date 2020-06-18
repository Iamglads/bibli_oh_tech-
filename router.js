const express = require('express');
const router = express.Router();
const twig = require('twig');

router.get('/', (req, res) => {
    res.render("home.html.twig");
});

router.get('/livres', (req, res) => {
    res.render('livres.html.twig');
});

// gestion des erreurs 

router.use((req, res, next) =>{
    const error = new Error('Page non trouvée');
    error.status = 404;
    next(error); //on passe error à la middleware suiviante 
});


// on récuperer lerreur en paramettre 
router.use((error, req, res) =>{ 
   res.status(error.status || 500);
   res.end(error.message);
});

module.exports = router;