const express = require('express');
const app = express();

const {CreateAppartement , DeleteAppartement , UpdateAppartement , GetAllAppartement} = require('../Controllers/AppartementController')


app.post('/appartement' , CreateAppartement)
app.delete('/appartement/:id' , DeleteAppartement)
app.put('/appartement/:id' , UpdateAppartement)
app.get('/appartements' , GetAllAppartement)

module.exports = app;
