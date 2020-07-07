const express = require('express');
const app = express.Router();
const mongoose = require('mongoose');
const fs = require('fs');

const routerAuteur = require('./routes/auteurs');
const routerLogin = require('./routes/login')
const routerLivre = require('./routes/livres.route');


app.use('/', routerAuteur);
app.use('/', routerLogin);
app.use('/', routerLivre);

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





// gestion des erreurs 
app.use((req, res, next) => {
    const error = new Error('Page non trouvée');
    error.status = 404;
    next(error); //on passe error à la middleware suiviante 
});
// on récuperer lerreur en paramettre 
app.use((error, req, res) => {
    res.status(error.status || 500);
    res.end(error.message);
});


module.exports = app;