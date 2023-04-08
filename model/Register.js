const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength:3
    },
    password: {
        type: String,
        required: true,
        minlength:3
    }
}, {timestamp: true})

module.exports = mongoose.model('User', UserSchema);