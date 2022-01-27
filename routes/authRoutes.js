const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User')
const JWT = require('jsonwebtoken');

const router = express.Router();

//* @Test Route
router.get('/', async (req, res) => {
    res.status(200).json({msg: 'auth'})
});

//* @Register User
router.post('/register', async (req, res) => {
    const user = req.body;
    
    if (!user.email || !user.password) {
        res.status(400).json({msg: 'Please include an email and password'})
    };
    // hash password
    const SALT = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, SALT);
    user.password = hashedPassword;
    console.log(user);
    try {
        await User.create(user, (error, result) => {
            if (error) {
                res.status(400).json({msg: error.message})
            }
    
            if ( result === undefined || result === null) {
                res.status(400).json({msg: "User already exist"})
            }
            // TOKEN and expire time
            const TOKEN = JWT.sign(user, process.env.JWT_SECRET, {expiresIn: 3600});
            res.setHeader('Authorization', TOKEN); //TOKEN set on headers
            res.status(200).json({data: result}); //! Send back user info NOT including the password hash
        })
    } catch (err) {
        console.error(err.message);
    }

    
});

//* @User Login
router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body);

    if (!password || !username){
        res.status(400).json({message: "Please have a username AND password"})
    }

    try {
        User.findOne({username: username}, (error, result) => {
            if(error){
                res.status(400).json({message: error.message})
            }
            // if User is NOT found
            if(result === null || result === undefined){
                res.status(404).json({message: "User Not Found"})
            }
    
            bcrypt.compare(password, result.password, (error, result) => {
                if(error){
                    res.status(403).json({message: error.message})
                }
                // if email or password is incorrect
                if(result === false){
                    res.status(403).json({message: "Either username or password is incorrect"})
                }
                //! TODO: change username to ID
                const TOKEN =  JWT.sign(username, process.env.JWT_SECRET);
                console.log(result); //! TODO: add token expiration
                res.setHeader('Authorization', TOKEN);
                res.status(200).json({ msg: 'Success'});
            })
        })
    } catch (err) {
        console.error(err);
    }
});


module.exports = router;