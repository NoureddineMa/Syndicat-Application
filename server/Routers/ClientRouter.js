const express = require('express');
const app = express();
const {CreateClient , UpdateClient} = require('../Controllers/ClientController')


app.post('/client' , CreateClient)
app.put('/client/:id' , UpdateClient)

module.exports = app;