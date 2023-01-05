const express = require('express');
const app = express();
const {CreateClient , UpdateClient , DeleteClient , GetAllClient} = require('../Controllers/ClientController')
const verifyToken = require('../Middlewares/verifyToken')
const syndicatMiddleware = require('../Middlewares/SyndicatMiddelwares')


app.post('/client' ,verifyToken,syndicatMiddleware,CreateClient)
app.put('/client/:id' ,verifyToken,syndicatMiddleware,UpdateClient)
app.delete('/client/:id' ,verifyToken,syndicatMiddleware,DeleteClient)
app.get('/client' ,verifyToken,syndicatMiddleware,GetAllClient)

module.exports = app;