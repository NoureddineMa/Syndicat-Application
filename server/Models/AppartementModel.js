const mongoose = require("mongoose");

const AppartementSchema = mongoose.Schema({
    Name_Residence: {
        type: String,
        required: [true, "please enter a name of residence"]
    },
    Number_appartement: {
        type: Number,
        required: [true, "please enter a Number of appartement"],
        unique: true
    }
})

module.exports = mongoose.model("Appartement", AppartementSchema);