const express = require('express');
const router = express.Router();

const RegisterAdmin = require('../Controllers/AdminAuthentication')

router.post('/register' , RegisterAdmin)


module.exports = router;