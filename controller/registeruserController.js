const User = require("../model/User");
// create user
const register = async (req, res) => {
  //const { username, password } = req.body;
  // try{
  //     const user = await User({username, password})
  //     user.save();
  //     res.status(201).json(user)
  // }
  const {username,password} = req.body;
  try {
    const user = await User.create({username,password})
    res.status(201).json(user)
    
  } catch (err) {
    res.status(500).json(err);
  }
};

//login
const login = async(req,res) => {
  try{

  }
  catch(err) {
    res.status(500).json(err)
  }
}

// logout
const logout = async (req, res) => {
  try {

  }
  catch (err) {
    res.status(500).json(err)
  }
}

module.exports = { register,login,logout };
