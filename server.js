const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { dbConnect } = require("./dbConfig");
require("dotenv").config();
const swaggerUI = require('swagger-ui-express');
//
const authRouter = require('./routes/authRoutes');
const blogRouter = require('./routes/blogRoutes');
const swaggerRoute = require('./docs/swagger');

const server = express();
server.use(express.json());
server.use(morgan("dev"));
server.use(helmet());
server.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerRoute));


server.use('/api/v1/auth', authRouter);
server.use('/api/v1/blogs', blogRouter)

server.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to NodeJS server" });
});

server.post("/", (req, res) => {
  const data = req.body;

  res.status(200).json({ msg: "We got data", data: data });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Node Server Listening on port: ${PORT}`);
    dbConnect();
});
