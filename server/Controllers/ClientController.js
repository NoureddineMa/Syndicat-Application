const Client = require("../Models/ClientModel");
const asyncHandler = require("express-async-handler");

// @desc POST Single Client:
// @route POST http://localhost:3001/api/admin/client
// @access Private

const CreateClient = asyncHandler(async (req, res) => {
    const {
        Name,
        CIN,
        Phone_number
    } = req.body;
    if (!Name || !CIN || !Phone_number) {
        res.status(400)
           .json({ message: "please fill all fields !" });
    }
    // check for CIN if already exist
    const ClientExists = await Client.findOne ({ CIN }); 
    if (ClientExists) {
        res.status(400)
           .json({ message: "Client Already Exist" });
    }
    // Create Client :
    const client = await Client.create({
        Name,
        CIN,
        Phone_number
    });
    if (client) {
        res.status(200)
           .json({ message: "Client Created Successfully !" });
    } else {
        res.status(400)
           .json({ message: "Error  please try later  ! thank you" });
    }
});


module.exports = CreateClient;
