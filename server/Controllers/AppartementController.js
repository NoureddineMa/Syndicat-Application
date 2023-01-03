const asyncHandler = require('express-async-handler');
const Appartement = require('../Models/AppartementModel');


// @desc POST Single Appartement:
// @route POST /appartement
// @access Private

const CreateAppartement = asyncHandler(async (req, res) => {
    const { Name_Residence, Number_appartement } = req.body;
    if (!Name_Residence || !Number_appartement) {
        res.status(400)
            .json({ message: "please fill all fields !" })
    }
    // check for Number_appartement if already exist 
    const AppartementExists = await Appartement.findOne({ Number_appartement })
    if (AppartementExists) {
        res.status(400)
            .json({ message: "Appartement Already Exist" })
    }
    // Create Appartement :
    const appartement = await Appartement.create({
        Name_Residence,
        Number_appartement
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

