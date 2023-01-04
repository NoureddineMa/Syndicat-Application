const asyncHandler = require('express-async-handler');
const Appartement = require('../Models/AppartementModel');


// @desc POST Single Appartement:
// @route POST /appartement
// @access Private

const CreateAppartement = asyncHandler(async (req, res) => {
    const { Name_Residence, Appartement_number } = req.body;
    if (!Name_Residence || !Appartement_number) {
        res.status(400)
            .json({ message: "please fill all fields !" })
    }

    const checkAppartementNumber = await Appartement.findOne({Appartement_number: req.body.Appartement_number})
    if(checkAppartementNumber){
        res.json({message: "Appartement Already Exist "})
    }

    // Create Appartement :
    const appartement = await Appartement.create({
        Name_Residence,
        Appartement_number
    })
    if (appartement) {
        res.status(200)
            .json({ message: "Appartement Created Successfully !" })
    }
})
    
// @desc delete  Appartement:
// @route PUT /appartement/:id
// @access Private

const DeleteAppartement = asyncHandler(async (req, res) => {
    const appartement = await Appartement.findById(req.params.id)
    if (appartement) {
        await appartement.remove()
        res.json({ message: 'Appartement removed' })
    } else {
        res.status(404)
        res.json({message: "Appartement not found"})
    }
})


module.exports = {CreateAppartement , DeleteAppartement};

