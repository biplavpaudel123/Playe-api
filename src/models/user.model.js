const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    provider: {
        type: String,
        required: true,
        enum: ['google', 'facebook', 'local'] //only one of 3 providers
    },
    email: {
        type: String,
        required: function () {
            return this.provider === 'local' || this.provider === 'google'
        },
    },
    password: {
        type: String,
        required: function () {
            return this.provider === 'local' //true only for local provider
        }
    },
    userID: {
        type: Number,
        required: true,
    }
})

userSchema.pre('save',async function (next) {
    if (this.provider=='local') next();
    if (this.isModified('password')) next();
    const salt = await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt);
    
    next();
})

userSchema.methods.comparePassword= function (inputPassword){
    return bcrypt.compare(inputPassword,this.password);
}

module.exports = mongoose.model('user', userSchema);