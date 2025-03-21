const mongoose = require('mongoose');

const StagiaireSchema = new mongoose.Schema({
    nom: {type: String, required: true},
    prenom: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    telephone: {type: String, required: true},
    adresse: {type: String, required: true},
    ville: {type: String, required: true},
    niveau: {type: String, enum: ['Ts', 'T', 'Q', 'S'], required: true},
    filiere: {type: String, required: true},
},{ timestamps: true },
);

const Stagiaire = mongoose.model('Stagiaire', StagiaireSchema);

module.exports = Stagiaire;