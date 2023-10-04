const mongoose = require("mongoose")
const { Schema } = mongoose;
// Define Schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name:{
        type: String
    }

})
//  Create and export model
const UserModel = mongoose.model('users', userSchema)
module.exports = UserModel