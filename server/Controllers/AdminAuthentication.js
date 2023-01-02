const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Admin = require('../Models/AdminModel');



// @desc Auth Admin
// @route POST /api/admin/Register
// @access Private

const RegisterAdmin = asyncHandler(async (req, res) => {
    const { First_Name, Second_Name, Email, Password, Phone_Number , Role } = req.body;
    
    if( !First_Name || !Second_Name || !Email || !Password || !Phone_Number) {
        res.status(400)
        .json({message: "please fill all fields !"})
    }
 
    // check for Email if already ixist 
    const AdminExists = await Admin.findOne({Email})
    if (AdminExists) {
        res.status(400)
        .json({message: "Admin Already Exist"})
    }
    // hash password :
    const RandomChar = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(Password , RandomChar);

    // Create Admin : 
    const admin = await Admin.create({
        First_Name,
        Second_Name,
        Email,
        Password: hashedPassword,
        Phone_Number,
        Role
    })
    if (admin) {
        res.status(200)
        .json({message: "Admin Created Successfully !"})
    } else {
        res.status(400)
        .json({message : "Error  please try later  ! thank you"})
    }
}) 

module.exports = RegisterAdmin;
