const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../database/models/user.js");
const afdbtoken = require("./afdbtoken.js");

token = `mongodb+srv://${afdbtoken.username}:${encodeURIComponent(
  afdbtoken.password
)}@cluster0.xydbj.mongodb.net/?retryWrites=true&w=majority`;

console.log(token);

mongoose.set("strictQuery", false);

mongoose.connect(token, (err) => {
  if (err) {
    console.error("Erro!" + err);
  } else {
    console.log("Connected to mongodb");
  }
});

router.get("/", (req, res) => {
  res.send("From API route");
});

router.post("/register", (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registeredUser) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(registeredUser);
    }
  });
});

module.exports = router;
