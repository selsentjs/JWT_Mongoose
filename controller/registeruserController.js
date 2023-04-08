const User = require("../model/Register");
const bcrypt = require("bcrypt");

// get all users
const getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
// create user
const createUser = async (req, res) => {
  const { username, password } = req.body;
  // try{
  //     const user = await User({username, password})
  //     user.save();
  //     res.status(201).json(user)
  // }
  try {
    const { username } = req.body;
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
        const password = hashedPassword;
        const newUser = new User({ username, password });
        newUser.save();
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getAllUsers, createUser };
