const express = require('express');
const { append } = require('express/lib/response');
const { default: helmet } = require('helmet');
const morgan = require('morgan');

require('dotenv').config();
const server = express();
server.use(morgan('dev'))
server.use(express.json());
server.use(helmet())

server.get('/', (req, res) => {
    res.status(200).json({msg: 'Welcome to NodeJS server'})
});

server.post('/', (req, res) => {
    const data = req.body;

    res.status(200).json({ msg: 'We got data', data: data})
})

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => `Node Server Listening on port: ${PORT}`)