const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    created_by: {
        type: mongoose.Schema.objectId,
        ref: 'User',
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    blog_title: {
        type: String,
        required: true
    },
    blog_content: {
        type: String,
        required: true
    },
    private: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Blog', blogSchema);