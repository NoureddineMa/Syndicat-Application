const express = require("express");
const router = express.Router();
const {CreatePaiment , DeletePaiment , GetAllPaiments} = require("../Controllers/PaimentController");

router.post('/paiment' ,CreatePaiment)
router.delete('/paiment/:id' , DeletePaiment)
router.get('/paiments' , GetAllPaiments)



module.exports = router;