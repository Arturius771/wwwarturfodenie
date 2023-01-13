const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const afdbtoken = require("../database/afdbtoken.js");

// Schemas
const User = require("../database/models/user.js");

token = `mongodb+srv://${afdbtoken.username}:${afdbtoken.password}@cluster0.xydbj.mongodb.net/${afdbtoken.database}?retryWrites=true&w=majority`;

console.log(token);

mongoose.set("strictQuery", false);

mongoose.connect(token, (err) => {
  if (err) {
    console.error("Error!" + err);
  } else {
    console.log("Connected to mongodb");
  }
});

router.get("/", (req, res) => {
  res.send("From API route");
});

router.post("/register", (req, res) => {
  const userData = req.body;
  const user = new User(userData);
  user.save((error, registeredUser) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(registeredUser);
    }
  });
});

module.exports = router;
