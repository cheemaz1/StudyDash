const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    handle: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    },
    daysLoggedIn: {
        type: Number,
        default: 0
    },
    lastLogin: {
        type: Date,
        default: new Date()
    },
    timeStudied: {
        type: Number,
        default: 0
    },
    timeOnBreak: {
        type: Number,
        default: 0
    }
});

const User = mongoose.model('users', UserSchema);
module.exports = User;