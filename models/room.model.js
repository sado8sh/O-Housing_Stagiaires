const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    nom : {type: String, required: true},
    type : {type: String, enum: ['male', 'female'], required: true},
    stagiaires: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Stagiaire' }],
        validate: {
            // Ensures no more than 4 stagiaires can be added to a room
            validator: function (val) {
                return val.length <= 4; 
            },
            message: 'A room can have a maximum of 4 stagiaires.',
        },
    },
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;