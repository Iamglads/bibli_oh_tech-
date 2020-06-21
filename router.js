const express = require('express');
const router = express.Router();
const twig = require('twig');

let livresModel = require('./model/livres.model');
const { Mongoose } = require('mongoose');

router.get('/', (req, res) => {
    res.render("home.html.twig");
});

router.get('/livres', (req, res) => {
    // nous renvoyons tous les livres
     let livres = livresModel.find()
        .exec()
        .then(livres => {
            console.log(livres);
            
            res.render('livres/livre.html.twig', {livres : livres});

        })
        .catch(error => {console.log(error)});
});

router.get('/livres/:id', (req, res) => {
    console.log(req.params._id);
    res.render('livres/details.html.twig', { id: req.params._id });
});

router.post('/livres', (req, res) => {
    console.log(req.body);

    const livres = new livresModel({
        _id: new Mongoose.Types.ObjectId(),
        nom: req.body.titre,
        auteur: req.body.auteur,
        pages: req.body.pages,
        description: req.body.description
    })
    livres.save()
    .then(resulat => {console.log(resulat);
        res.redirect("/livres") 
    })
    .catch(error => { console.log(error);
    })
});

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