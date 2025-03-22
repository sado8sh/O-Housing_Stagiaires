const express = require('express');
const router = express.Router();
const { getPayments, getPaymentById, createPayment, updatePaymentMonth, deletePayment } = require('../controllers/payment.controller');

// Display all payments
router.get('/', getPayments);

// Display a single payment by ID
router.get('/:id', getPaymentById);

// Create a new payment
router.post('/', createPayment);

// Update the month of a payment
router.put('/:id', updatePaymentMonth);

// Delete the payment
router.delete('/:id', deletePayment);

module.exports = router;