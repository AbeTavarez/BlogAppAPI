const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    blogs: {type: Array},
    followers: {type: Array},
    following: {type: Array}
});

export default mongoose.model('User', UserSchema);