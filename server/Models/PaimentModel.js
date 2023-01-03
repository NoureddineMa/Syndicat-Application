const mongoose = require("mongoose");
const AppartementSchema = require('./AppartementModel')

const PaimentAppartement = mongoose.Schema({
    Date : {
        type: Date,
        required: [true, "choose  a date "]
    },
    Montant : {
        type: Number,
        required: [true, "Please enter a montant of payment"]
    },
    Appartement_Number : {
        type: Number,
        ref: 'Appartement'
    }
})

module.exports = mongoose.model("Paiment" , PaimentAppartement)