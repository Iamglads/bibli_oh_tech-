const mongoose = require('mongoose');
const fs = require('fs');



exports.auteur_affichage = (req, res) => {
    res.render('auteurs/auteur.html.twig');
}