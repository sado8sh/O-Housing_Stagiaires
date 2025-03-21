const express = require('express');
const router = express.Router();
const { getStagiaires, getStagiaireById, createStagiaire, updateStagiaire, deleteStagiaire } = require('../controllers/stagiaire.controller');

// Display all stagiaires
router.get('/', getStagiaires);

// Display a single stagiaire by ID
router.get('/:id', getStagiaireById);

// Create a new stagiaire
router.post('/', createStagiaire);

// Update a stagiaire
router.put('/:id', updateStagiaire);

// Delete a stagiaire
router.delete('/:id', deleteStagiaire);

module.exports = router;