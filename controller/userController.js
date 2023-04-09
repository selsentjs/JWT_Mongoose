const User = require("../model/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const generateToken = require('../utils');


// create user
const register = async (req, res) => {

  const { username, email, password } = req.body;
  try {
    // check the email - already existing or not
    const emailAlreadyExists = await User.findOne({email})
    if(emailAlreadyExists){
      return res.send('email already exists')
    }

    // register new user
    const user = await User({ 
      username: username,
      email: email,
      password: await bcrypt.hash(password, 10)
    
    })
    console.log(user)
    user.save();
    res.status(201).json(user);

  }
  catch (err) {
    res.status(500).json(err)
  }
}

//login
const login = async (req, res) => {
 const {username, email, password} = req.body;
  try {

    // check all the details are provided by user or not
    if(!username || !email || !password){
      return res.send("please enter username, email and password")
    }

      // check email is correct or not
    const user = await User.findOne({email});
    if(!user){
      return res.send("Invalid email")
    }
    
    // compare registered password and hash password and generate token
    if(user){
      if(bcrypt.compare(password, user.password)){
        res.status(200).json({user, token:generateToken(user)})
      }
    }
  }
  catch (err) {
    res.status(500).json(err)
  }
}



module.exports = { register, login }
