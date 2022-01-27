const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String, 
        require: true},
    email: {
        type: String, 
        require: true},
    password: {
        type: String, 
        require: true},
    birthday: {
        type: Date, 
        require: true},
    age: {
        type: Number
    }
});

module.export = mongoose.model('User', userSchema);