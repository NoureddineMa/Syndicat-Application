const express = require('express');
const app = express();
require('dotenv').config();
const router = require('./Routers/AdminAuthRouter')
const appartement = require('./Routers/AppartementRouters')


const PORT = process.env.PORT_APP || 5000;
require('./Config/configDb').connect();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/admin' , router)
app.use('/api/admin' , appartement)


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});