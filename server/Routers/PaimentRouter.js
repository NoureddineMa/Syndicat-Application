const express = require("express");
const router = express.Router();
const CreatePaiment = require("../Controllers/PaimentController");

router.post('/paiment' ,CreatePaiment)


module.exports = router;