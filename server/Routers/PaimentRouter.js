const express = require("express");
const router = express.Router();
const {CreatePaiment , DeletePaiment} = require("../Controllers/PaimentController");

router.post('/paiment' ,CreatePaiment)
router.delete('/paiment/:id' , DeletePaiment)



module.exports = router;