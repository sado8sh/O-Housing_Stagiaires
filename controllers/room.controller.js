const Room = require('../models/room.model');

const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find({});
        if (!rooms) {
            res.status(404).json({ message: 'No rooms found' });
        }
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getRoomById = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) {
            res.status(404).json({ message: 'Room not found' });
        }
        res.status(200).json(room);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createRoom = async (req, res) => {
    try {
        const room = await Room.create(req.body);
        res.status(201).json(room);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateRoom = async (req, res) => {
    try {
        const room = await Room.findByIdAndUpdate(req.params.id, req.body);
        if (!room) {
            res.status(404).json({ message: 'Room not found' });
        }
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id);
        res.status(200).json(updatedRoom);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteRoom = async (req, res) => {
    try {
        const room = await Room.findByIdAndDelete(req.params.id);
        if (!room) {
            res.status(404).json({ message: 'Room not found' });
        }
        res.status(204).json({message: 'Room deleted successfully'});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addStagiaireToRoom = async (req, res) => {
    try {
        const { roomId } = req.params; 
        const { stagiaireId } = req.body; 

        // Check if the room exists
        const room = await Room.findById(roomId);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        // Check if the stagiaire is already in another room
        const existingRoom = await Room.findOne({ stagiaires: stagiaireId });
        if (existingRoom) {
            return res.status(400).json({ 
                message: 'Stagiaire is already assigned to another room.', 
                existingRoomId: existingRoom._id 
            });
        }

        // Check if the stagiaire is already in the room
        if (room.stagiaires.includes(stagiaireId)) {
            return res.status(400).json({ message: 'Stagiaire is already in the room.' });
        }

        // Check if the room is already full
        if (room.stagiaires.length >= 4) {
            return res.status(400).json({ message: 'This room is already full.' });
        }

        room.stagiaires.push(stagiaireId);
        await room.save();

        res.status(200).json({ message: 'Stagiaire added successfully!', room });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const removeStagiaireFromRoom = async (req, res) => {
    try {
        const { roomId } = req.params;
        const { stagiaireId } = req.body;

        const room = await Room.findById(roomId);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        // Check if the stagiaire exists in the room
        if (!room.stagiaires.includes(stagiaireId)) {
            return res.status(400).json({ message: 'Stagiaire is not in this room.' });
        }

        // Remove the stagiaire from the room
        room.stagiaires = room.stagiaires.filter(id => id.toString() !== stagiaireId);
        await room.save();

        res.status(200).json({ message: 'Stagiaire removed successfully!', room });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getRooms, getRoomById, createRoom, updateRoom, deleteRoom, addStagiaireToRoom, removeStagiaireFromRoom };