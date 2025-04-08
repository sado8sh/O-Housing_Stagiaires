const Critere = require('../models/critere.model.js');

const getCriteres = async (req, res) => {
    try {
        const criteres = await Critere.find({}).populate('stagiaire_id', 'name');
        if (!criteres || criteres.length === 0) {
            return res.status(404).json({ message: 'No criteres found' });
        }
        res.status(200).json(criteres);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCritereById = async (req, res) => {
    try {
        const critere = await Critere.findById(req.params.id).populate('stagiaire_id', 'name');
        if (!critere) {
            return res.status(404).json({ message: 'Critere not found' });
        }
        res.status(200).json(critere);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createCritere = async (req, res) => {
    try {
        const {
            stagiaire_id,
            situation_parents,
            situation_physique,
            situation_sociaux,
            situation_geographique,
            niveau_scolaire
        } = req.body;

        // Check if stgiaire is already registered
        const existingCritere = await Critere.findOne({ stagiaire_id });
        if (existingCritere) {
            return res.status(400).json({ message: 'Critere already exists for this stagiaire' });
        }

        // Validate required fields
        const newCritere = new Critere({
            stagiaire_id,
            situation_parents,
            situation_physique,
            situation_sociaux,
            situation_geographique,
            niveau_scolaire
        });

        await newCritere.save(); // Score will be calculated automatically via pre-save middleware

        res.status(201).json(newCritere);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateCritere = async (req, res) => {
    try {
        const critere = await Critere.findById(req.params.id);
        if (!critere) {
            return res.status(404).json({ message: 'Critere not found' });
        }

        // Apply changes
        Object.assign(critere, req.body);

        // Save to trigger pre-save middleware (score recalculation)
        await critere.save();

        res.status(200).json(critere);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteCritere = async (req, res) => {
    try {
        const critere = await Critere.findByIdAndDelete(req.params.id);
        if (!critere) {
            return res.status(404).json({ message: 'Critere not found' });
        }
        res.status(204).json({ message: 'Critere deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getCriteres,
    getCritereById,
    createCritere,
    updateCritere,
    deleteCritere
};