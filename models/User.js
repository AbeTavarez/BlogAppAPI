const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        require: true
    },
    email: {
        type: String, 
        require: true
    },
    password: {
        type: String, 
        require: true
    },
    birthday: {
        type: Date, 
        },
    age: {
        type: Number
    }
});

module.exports = mongoose.model('user', userSchema);