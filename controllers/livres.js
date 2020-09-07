const mongoose = require('mongoose');
const fs = require('fs');
const twig = require('twig');
let Livres = require('../model/livres');


exports.getAllLivre = (req, res, next) => {
    Livres.find()
        .then((livres) => {
            console.log(livres);
            res.render('admin/admin.html.twig', { livres: livres, message: res.locals.message });
        })
        .catch((error) => res.status(200).json(log(error)) );
}


exports.getOneLivre = (req, res, next) => {
    Livres.findById(req.params._id)
        .then(resulat => {
            res.render('livres/details.html.twig', { resulat: resulat })
        })
        .catch((error) => res.status(400).json(log(error)));

}


exports.postOneLivre = (req, res, next) => {
    //console.log(req.body);
    const livre = new Livres({
        _id: new mongoose.Types.ObjectId(),
        nom: req.body.titre,
        auteur: req.body.auteur,
        pages: req.body.pages,
        description: req.body.description,
        image: req.file.path.substring(14)
    })
    livre.save()
        .then((livre) => {
            console.log(livre);
            res.redirect("/admin")
        })
        .then(() => res.status(200).json(log('Votre nouveau livre est crée avec succèss!')))
        .catch((error) => res.status(400).json(log(error)));
};



exports.deleteOneLivre = (req, res, next) => {
    Livres.remove({ _id: req.params.id })
        .then(() => {
            req.session.message = {
                Type: 'success',
                contenu: 'Suppression effectuée !'
            }
            res.redirect('/admin');
        })
        .catch(error => res.status(400).json(log(error)))

};
