const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    stagiaire_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Stagiaire",
        required: true
    },
    year: {
        type: String,
        required: true
    },
    months: {
        type: Object,
        default: function () {
            if (!this.year) return {}; // Ensure year exists

            const startYear = parseInt(this.year.split('/')[0]); // Extract first year
            const months = [
                "septembre", "octobre", "novembre", "décembre",
                "janvier", "février", "mars", "avril",
                "mai", "juin", "juillet", "août", "septembre"
            ];
            const monthObj = {};

            months.forEach((month, index) => {
                const currentYear = (index >= 4) ? startYear + 1 : startYear;
                monthObj[`${month}_${currentYear}`] = false;
            });

            return monthObj;
        }
    }
});

module.exports = mongoose.model("Payment", paymentSchema);
