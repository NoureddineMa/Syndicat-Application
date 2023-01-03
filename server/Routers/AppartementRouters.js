const express = require('express');
const app = express();

const {CreateAppartement , DeleteAppartement } = require('../Controllers/AppartementController')


app.post('/appartement' , CreateAppartement)
app.delete('/appartement/:id' , DeleteAppartement)

module.exports = app;
