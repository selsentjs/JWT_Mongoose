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

UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (hashPassword) {
    const isMatch = await bcrypt.compare(hashPassword, this.password);
    return isMatch;
};

module.exports = mongoose.model('User', UserSchema);