const express = require('express');
const app = express();

const {CreateAppartement , DeleteAppartement , UpdateAppartement } = require('../Controllers/AppartementController')


app.post('/appartement' , CreateAppartement)
app.delete('/appartement/:id' , DeleteAppartement)
app.put('/appartement/:id' , UpdateAppartement)

module.exports = app;
