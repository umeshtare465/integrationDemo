const express = require("express");
const path = require("path");
const app = express();
const noteModel = require("../models/note.model");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

require("dotenv").config();
app.post("/api/note", async (req, res) => {
  const { name, phone } = req.body;
  const note = await noteModel.create({
    name,
    phone,
  });
  res.status(201).json({
    message: "note created",
    note,
  });
});
app.get("/api/note", async (req, res) => {
  const note = await noteModel.find();
  res.status(200).json({
    message: "data fetched",
    note,
  });
});
app.delete("/api/note/:id", async (req, res) => {
  const id = req.params.id;
  const note = await noteModel.findByIdAndDelete(id);
  res.status(200).json({
    message: "data fetched",
    note,
  });
});
app.patch("/api/note/:id", async (req, res) => {
  const id = req.params.id;
  const { phone } = req.body;
  const note = await noteModel.findByIdAndUpdate(id, { phone });
  res.status(200).json({
    message: "data fetched",
    note,
  });
});

// app.use("*name", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "/public/index.html"));
// });
module.exports = app;
