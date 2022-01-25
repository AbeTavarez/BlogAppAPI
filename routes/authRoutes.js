const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({msg: 'auth'})
});

router.post('/register', (req, res) => {
    const user = req.body;

    if (!user.email || !password) {
        res.status(400).json({msg: 'Please include an email and password'})
    };

    const hashedPassword = bcrypt.hash(user.password, process.env.SALT);
    user.password = hashedPassword;

    
});


module.exports = router;