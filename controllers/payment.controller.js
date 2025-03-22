const Payment = require('../models/payment.model'); 

const getPayments = async (req, res) => {
    try {
        const payments = await Payment.find({}).populate('stagiaire_id', 'name');
        if (!payments || payments.length === 0) {
            return res.status(404).json({ message: 'No payments found' });
        }
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id).populate('stagiaire_id', 'name');
        if (!payment) {
            return res.status(404).json({ message: 'Payment record not found' });
        }
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createPayment = async (req, res) => {
    try {
        const { stagiaire_id, startYear } = req.body;

        const endYear = startYear + 1;

        const newPayment = new Payment({
            stagiaire_id,
            year: `${startYear}/${endYear}`
        });

        await newPayment.save();
        res.status(201).json(newPayment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updatePaymentMonth = async (req, res) => {
    try {
        const { month, paid } = req.body;

        if (!month || typeof paid !== "boolean") {
            return res.status(400).json({ message: "Month and paid status are required" });
        }

        const payment = await Payment.findById(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: "Payment record not found" });
        }

        if (!(month in payment.months)) {
            return res.status(400).json({ message: `Invalid month: ${month}` });
        }

        // Update the month status
        payment.months[month] = paid;

        // Mark `months` as modified to force Mongoose to update it
        payment.markModified('months');

        await payment.save();

        res.status(200).json({ message: `Payment status for ${month} updated`, payment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deletePayment = async (req, res) => {
    try {
        const payment = await Payment.findByIdAndDelete(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: 'Payment record not found' });
        }
        res.status(204).json({ message: 'Payment record deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { getPayments, getPaymentById, createPayment, updatePaymentMonth, deletePayment };