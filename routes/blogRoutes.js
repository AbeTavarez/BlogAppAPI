const express = require('express')
const Blog = require('../models/Blog');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({msg: 'Blog Routes'})
});

router.get('/:username', verifyToken, (req, res) => {
    const username = req.params.username;

    Blog.find({username: username}, (error, blogs) => {
        if (error) {
            res.status(400).json({ msg: error.message });
          }

          res.status(200).json({blogs})
    })
})

router.post('/', verifyToken, async (req, res) => {
    const blog = req.body
    const {createdBy, blogTitle, blogContent} = req.body;
    
    if (!createdBy || !blogTitle || !blogContent) {
        return res.status(400).json({msg: 'Please include an Id, title and content'})
    }

    try {
        await Blog.create(blog, (error, newBlog) => {
            if (error) {
                res.status(400).json({ msg: error.message });
              }
    
              res.status(201).json({blog: newBlog})
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Server Error" });
    }

});


module.exports = router;