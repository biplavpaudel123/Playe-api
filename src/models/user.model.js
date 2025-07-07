const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    loginMethod:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: false,
    }
}) 

modules.exports= mongoose.Model('user',userSchema);