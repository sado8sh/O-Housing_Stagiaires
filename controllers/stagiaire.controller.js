const Stagiaire = require('../models/stagiaire.model');

const getStagiaires = async (req, res) => {
    try {
        const stagiaires = await Stagiaire.find({});
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
        const stagiaire = await Stagiaire.create(req.body);
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