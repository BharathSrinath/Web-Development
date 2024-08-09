const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be blank']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank']
    }
})

// Just a reminder:  'Static/Class methods' are methods that are available to the model itself, not to any specific instance
userSchema.statics.findAndValidate = async function (username, password) {
    const foundUser = await this.findOne({ username });
    const isValid = await bcrypt.compare(password, foundUser.password);
    return isValid ? foundUser : false;
}
// bcrypt.compare
// It takes two arguments: the plain text password and the hashed password.
    // It extracts the salt from the stored hashed password.
    // It uses the extracted salt to hash the plain text password.
    // It compares the resulting hash with the stored hash.

userSchema.pre('save', async function (next) {
    // Callback function of the pre-middleware has access to 'next'. Kindly look at the syntax under farm.js(4.mongo-relationships)
    if (!this.isModified('password')) return next();
    // this refers to the instance on which the save operation was performed. 
    // isModified is a function provided by Mongoose to check whether a field has been modified in the document.
        // every document instance created from a Mongoose model will have the isModified method. 
    // We need this because When updating user details, if the password is not changed, it won't be rehashed unnecessarily. If the password is changed, it will be hashed before saving.
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

module.exports = mongoose.model('User', userSchema);