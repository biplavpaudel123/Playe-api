const mongoose = require('mongoose');

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

module.exports = mongoose.model('user', userSchema);