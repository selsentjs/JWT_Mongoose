const User = require('../model/User');


// get all users
const getAllUsers = async(req,res) => {
    try{
        const user = await User.find();
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err)
    }
}
// create user
const createUser = async(req,res) => {
    const {username, password} = req.body;
    try{
        const user = await User({username, password})
        user.save();
        res.status(201).json(user)
    }
    catch(err){
        res.status(500).json(err)
    }
    

}

module.exports = {getAllUsers,createUser}