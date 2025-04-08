const express = require('express');
const router = express.Router();
const { getCriteres, getCritereById, createCritere, updateCritere, deleteCritere } = require('../controllers/critere.controller.js');

// Display all criteres
router.get('/', getCriteres);

// Display a single critere by ID
router.get('/:id', getCritereById);

// Create a new critere
router.post('/', createCritere);

// Update a critere by ID
router.put('/:id', updateCritere);

// Delete a critere by ID
router.delete('/:id', deleteCritere);

module.exports = router;