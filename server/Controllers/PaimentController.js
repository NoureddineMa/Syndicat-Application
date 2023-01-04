const asyncHandler = require("express-async-handler");
const Paiment = require("../Models/PaimentModel");
const AppartementModel = require("../Models/AppartementModel");
const ClientModel = require("../Models/ClientModel");



// @desc POST Single Paiment:
// @route POST http://localhost:3001/api/admin/paiment
// @access Private

const CreatePaiment = asyncHandler(async (req, res) => {

    const {Date , Montant , Appartement_number , CIN } = req.body;
    console.log(req.body.Appartement_number);

    if(!Date || !Montant || !Appartement_number || !CIN ){
        res.status(400);
        res.json({message: "Please fill all the fields"})
    }

    // search for ID appartement TO send in req Add Paiment
    const SearchAppartement = await AppartementModel.findOne({Number_appartement: {$eq:  req.body.Appartement_number}});
    console.log(SearchAppartement);
    if(!SearchAppartement){
        res.status(400)
        .json({message: "appartement Not Found"})
    } 

    // search for ID Client TO send in req Add Paiment
    const SearchClient = await ClientModel.findOne({CIN : CIN})
    console.log(SearchClient);
    if(!SearchClient){
        res.status(400)
        .json({message: "Client Not Found"})
    }

    // const idClient = SearchClient._id;
    // console.log(idClient);

    // const idAppartement = SearchAppartement._id;
    // console.log(idAppartement); 
    
})

module.exports = CreatePaiment;