const jwt = require('jsonwebtoken')
const Admin = require('../Models/AdminModel');

const syndicatMiddleware = async (req,res,next) => {
    token = req.header('Authorization').split(' ')[1]
    if(token){
        const adminInfos = jwt.verify(token, process.env.JWT_SECRET)
        const adminId = adminInfos._id

        // after retrieve id we need to ckeck role if is Syndicat :
        const admin = await Admin.findById({_id: adminId})
        const roleName = admin.Role
        if(roleName == 'Syndicat'){
        } else {
            res.status(400)
               .json({message: "ACCES DENIED !!"})
        }
    }
}

module.exports = syndicatMiddleware;