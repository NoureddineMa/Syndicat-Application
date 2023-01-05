const express = require('express');
const app = express();

const {CreateAppartement , DeleteAppartement , UpdateAppartement , GetAllAppartement} = require('../Controllers/AppartementController')
const verifyToken = require('../Middlewares/verifyToken')
const syndicatMiddleware = require('../Middlewares/SyndicatMiddelwares')
app.post('/appartement' ,verifyToken,syndicatMiddleware,CreateAppartement)
app.delete('/appartement/:id' , DeleteAppartement)
app.put('/appartement/:id' , UpdateAppartement)
app.get('/appartements' , GetAllAppartement)

module.exports = app;
