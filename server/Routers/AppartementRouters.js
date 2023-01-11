const express = require('express');
const app = express();

const {CreateAppartement , DeleteAppartement , UpdateAppartement , GetAllAppartement} = require('../Controllers/AppartementController')
const verifyToken = require('../Middlewares/verifyToken')
const syndicatMiddleware = require('../Middlewares/SyndicatMiddelwares')



app.post('/appartement' ,verifyToken,syndicatMiddleware,CreateAppartement)
app.delete('/appartement/:id' ,verifyToken,syndicatMiddleware,DeleteAppartement)
app.put('/appartement/:id' ,verifyToken,syndicatMiddleware,UpdateAppartement)
app.get('/appartements' ,verifyToken,syndicatMiddleware,GetAllAppartement)
app.get('/appartements/:id' ,verifyToken,syndicatMiddleware,GetAllAppartement)

module.exports = app;
