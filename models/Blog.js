const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    blogTitle: {
        type: String,
        required: true
    },
    blogContent: {
        type: String,
        required: true
    },
    private: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Blog', blogSchema);