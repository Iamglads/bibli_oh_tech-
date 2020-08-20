const mongoose = require('mongoose');
const fs = require('fs');
const twig = require('twig');
let livresSchema = require('../model/livres.model');

exports.livres_affichage = ((req, res) => {
    // nous renvoyons tous les livres
    let livre = livresSchema.find()
        .exec()
        .then(livres => {
            console.log(livres);
            res.render('livres/livre.html.twig', { livres: livres, message: res.locals.message });
        })
        .catch(error => { console.log(error) });
});

exports.livre_ajouter = ((req, res) => {
    console.log(req.body);
    const livre = new livresSchema({
        _id: new mongoose.Types.ObjectId(),
        nom: req.body.titre,
        auteur: req.body.auteur,
        pages: req.body.pages,
        description: req.body.description,
        image: req.file.path.substring(14)
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

exports.livre_affichage = ((req, res) => {
    livresSchema.findById(req.params._id)
        .exec()
        .then(resulat => {
            res.render('livres/details.html.twig', { resulat: resulat })
        })
        .catch(error => {
            console.log(error);
        })

});

exports.livre_suppression = ((req, res) => {
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
