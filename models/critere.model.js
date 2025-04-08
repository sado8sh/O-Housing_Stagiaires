const mongoose = require ('mongoose');

const CritereSchema = new mongoose.Schema({
    stagiaire_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stagiaire",
        required: true
    },
    situation_parents: {
        type: String,
        enum: ['divorcés', 'décédés', 'vivants'],
        required: true
    },
    situation_physique: {
        type: String,
        enum: ['handicapé', 'non_handicape']
    },
    situation_sociaux : {
        type: String,
        enum: ['faibe', 'moyenne', 'riche'],
        required: true
    },
    situation_geographique: {
        type: String,
        enum: ['benguerir', 'other'],
        required: true
    },
    niveau_scolaire: {
        type: String,
        enum: ['TS', 'T', 'Q', 'S'],
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
}, { timestamps: true });

// Middleware to calculate total score out of 100
CritereSchema.pre('save', function (next) {
    let score = 0;

    // 1. Family criteria (max 20)
    if (this.situation_parents === 'divorcés' || this.situation_parents === 'décédés') {
        score += 20;
    }

    // 2. Physical criteria (max 20)
    if (this.situation_physique === 'handicapé') {
        score += 20;
    }

    // 3. Social criteria (max 20)
    if (this.situation_sociaux === 'faibe') {
        score += 20;
    } else if (this.situation_sociaux === 'moyenne') {
        score += 10;
    } // riche = 0

    // 4. Geographic criteria (max 20)
    if (this.situation_geographique !== 'benguerir') {
        score += 20;
    }

    // 5. Academic criteria (max 20)
    switch (this.niveau_scolaire) {
        case 'S': score += 20; break;
        case 'Q': score += 15; break;
        case 'T': score += 10; break;
        case 'TS': score += 5; break;
    }

    this.score = score;
    next();
});

const Critere = mongoose.model('Critere', CritereSchema);

module.exports = Critere;