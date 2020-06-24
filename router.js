const express = require('express');
const router = express.Router();
const twig = require('twig');

let livresSchema = require('./model/livres.model');
const mongoose = require('mongoose');

router.get('/', (req, res) => {
    res.render("./log/login.html.twig");
});

router.get('/signup', (req, res) => {
    res.render("./log/signup.html.twig");
});

router.get('/livres', (req, res) => {
    // nous renvoyons tous les livres
    let livre = livresSchema.find()
        .exec()
        .then(livres => {
            console.log(livres);

            res.render('livres/livre.html.twig', { livres: livres, message: res.locals.message });

        })
        .catch(error => { console.log(error) });
});

router.get('/livres/:id', (req, res) => {
    livresSchema.findById(req.params.id)
        .exec()
        .then(resulat => {
            res.render('livres/details.html.twig', { resulat: resulat })
        })
        .catch(error => {
            console.log(error);
        })

});



router.post('/livres', (req, res) => {
    console.log(req.body);

    const livre = new livresSchema({
        _id: new mongoose.Types.ObjectId(),
        nom: req.body.titre,
        auteur: req.body.auteur,
        pages: req.body.pages,
        description: req.body.description
    })
    livre.save()
        .then(resultat => {
            console.log(resultat);
            res.redirect("/livres")
        })
        .catch(error => {
            console.log(error);
        })
});

router.post("/livres/delete/:id", (req, res) => {
    livresSchema.remove({ _id: req.params.id })
        .exec()
        .then(resultat => {
            req.session.message = {
                Type: 'success',
                contenu: 'Suppression effectuée !'
            }
            res.redirect('/livres');
        })
        .catch(error => {
            console.log(error);
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