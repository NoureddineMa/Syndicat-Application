const express = require('express');
const app = express();
const CreateClient = require('../Controllers/ClientController')


app.post('/client' , CreateClient)


module.exports = app;