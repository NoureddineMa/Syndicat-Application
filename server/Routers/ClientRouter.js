const express = require('express');
const app = express();
const {CreateClient , UpdateClient , DeleteClient , GetAllClient} = require('../Controllers/ClientController')
// const syndicatMiddleware = require('../Middlewares/SyndicatMiddelwares')
// const verifyToken = require('../Middlewares/verifyToken')


app.post('/client' ,CreateClient)
app.put('/client/:id' , UpdateClient)
app.delete('/client/:id' , DeleteClient)
app.get('/client' , GetAllClient)

module.exports = app;