const express = require('express');
const app = express();

const {CreateAppartement } = require('../Controllers/AppartementController')


app.post('/appartement' , CreateAppartement)


module.exports = app;
