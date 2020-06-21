const mongoose = require('mongoose');

const livresSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    nom: String,
    auteur: String,
    pages: Number,
    description: String
})

const livresModel = mongoose.model("livres", livresSchema);

module.exports = livresModel;