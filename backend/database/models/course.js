const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseScehma = new Schema({
  title: String,
  insitution: String,
  link: { url: String, name: String },
  modules: Array,
});

module.exports = mongoose.model("User", courseScehma);
