const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: {
        type:String,
    },
    lastname: {
        type:String,
    },
    email: {
        type:String,
        unique:true
    },
    password: {
        type:String,
    },
})

module.exports("user",userSchema);