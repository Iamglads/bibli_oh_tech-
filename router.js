const express = require('express');
const router = express.Router();
//const fs = require('fs');

const routerAuteur = require('./routes/auteurs');
const routerLivre = require('./routes/livres.route');
const routerHome = require('./routes/home');
const routerUser = require('./routes/user');


/*
=========================================
            Parametrage multer 
=========================================
*/
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/'); // chemin pour récuperer les images 
    },
    // nom images
    filename: function (req, file, cb) {
        let date = new Date().toLocaleDateString();
        cb(null, date + "-" + Math.round(Math.random() * 1000) + "-" + file.originalname);
    }
})

// indiquer quel type de fichier accepter 
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.minetype === "image/png") {
        cb(null, true); // accepter le fichier
    } else {
        cb(new Error("l'image n'est pas acceptée"), false);
    }
}
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter : fileFilter
})
/*
=========================================
            Parametrage multer fin 
=========================================
*/
router.use('/', routerHome);
router.use('/', routerAuteur);
router.use('/', routerLivre);
router.use('/', routerUser);



// gestion des erreurs 
router.use((req, res, next) => {
    const error = new Error('Page non trouvée');
    error.status = 404;
    next(error); //on passe error à la middleware suiviante 
});
// on récuperer lerreur en paramettre 
router.use((error, req, res) => {
    res.status(error.status || 500);
    res.end(error.message);
});


module.exports = router;