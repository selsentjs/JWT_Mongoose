const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign(
        {
            _id:user._id,
            username:user.username,
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_LIFETIME
        }
    )
}

module.exports = generateToken;