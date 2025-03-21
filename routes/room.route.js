const express = require('express');
const router = express.Router();
const { getRooms, getRoomById, createRoom, updateRoom, deleteRoom, addStagiaireToRoom, removeStagiaireFromRoom } = require('../controllers/room.controller');

// Display all rooms
router.get('/', getRooms);

// Display a single room by ID
router.get('/:id', getRoomById);

// Create a new room
router.post('/', createRoom);

// Update a room by ID
router.put('/:id', updateRoom);

// Delete a room by ID
router.delete('/:id', deleteRoom);

// Add a stagiaire to a room
router.post('/:roomId/add-stagiaire', addStagiaireToRoom);

// Remove a stagiaire from a room
router.post('/:roomId/remove-stagiaire', removeStagiaireFromRoom);


module.exports = router;