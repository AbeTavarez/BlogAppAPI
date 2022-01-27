const JWT = require("jsonwebtoken");

const verifyJWT = () => {
  let TOKEN = req.get("Authorization");

  if (TOKEN === null || TOKEN === undefined) {
    res.status(403).json({ message: "You must be logged in" });
  }

  JWT.verify(TOKEN, process.env.JWT_SECRET, (error, result) => {
    if (error) {
      res.status(400).json({ message: "Validation Error" });
    }

    if (result === false) {
      res.status(403).json({ message: "You must be logged in" });
    }
    next();
  });
};

module.exports = verifyJWT;
