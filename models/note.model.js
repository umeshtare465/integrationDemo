const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema({
  name: String,
  phone: Number,
});
const noteModel = mongoose.model("model", noteSchema);
module.exports = noteModel;
