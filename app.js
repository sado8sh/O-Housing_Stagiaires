const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const stagiaireRoute = require('./routes/stagiaire.route');

// Middleware
app.use(express.json());

// Routes
app.use("/api/stagiaires", stagiaireRoute);

// Connect to the database
mongoose.connect('mongodb://localhost:27017/O-Housing').then(() => {
    app.listen(port, () => {
        console.log(`O-Housing app listening at http://localhost:${port}`);
    });
}).catch((error) => {
    console.log(error);
});