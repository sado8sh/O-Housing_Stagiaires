const bcrypt = require('bcryptjs');

const Stagiaire = require('../models/stagiaire.model');

const getStagiaires = async (req, res) => {
    try {
        const stagiaires = await Stagiaire.find({});

        if (!stagiaires || stagiaires.length === 0) {
            return res.status(404).json({ message: 'No stagiaires found' });
        }

        res.status(200).json(stagiaires);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getStagiaireById = async (req, res) => {
    try {
        const stagiaire = await Stagiaire.findById(req.params.id);
        if (!stagiaire) {
            res.status(404).json({ message: 'Stagiaire not found' });
        }
        res.status(200).json(stagiaire);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createStagiaire = async (req, res) => {
    try {
        const { nom, prenom, date_naissance, email, password, telephone, etranger, adresse, ville, niveau, filiere} = req.body;

        // Check if the stagiaire already exists
        const existingStagiaire = await Stagiaire.findOne({ email: email });

        if (existingStagiaire) {
            const error = new Error('Stagiaire already exists');
            error.statusCode = 409;
            throw error;
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const stagiaire = await Stagiaire.create(
            {
                nom,
                prenom,
                date_naissance,
                email,
                password: hashedPassword,
                telephone,
                etranger,
                adresse,
                ville,
                niveau,
                filiere
            }
        );
        res.status(201).json(stagiaire);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateStagiaire = async (req, res) => {
    try {
        const stagiaire = await Stagiaire.findByIdAndUpdate(req.params.id, req.body);
        if (!stagiaire) {
            res.status(404).json({ message: 'Stagiaire not found' });
        }
        const updatedStagiaire = await Stagiaire.findByIdAndUpdate(req.params.id);
        res.status(200).json(updatedStagiaire);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteStagiaire = async (req, res) => {
    try {
        const stagiaire = await Stagiaire.findByIdAndDelete(req.params.id);
        if (!stagiaire) {
            res.status(404).json({ message: 'Stagiaire not found' });
        }
        res.status(204).json({message: 'Stagiaire deleted successfully'});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getStagiaires, getStagiaireById, createStagiaire, updateStagiaire, deleteStagiaire };