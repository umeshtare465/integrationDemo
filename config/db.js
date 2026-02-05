const { log } = require("console");
const mongoose = require("mongoose");
const connectToDb = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((res) => console.log("db connected seccesfully"));
};
module.exports = connectToDb;
