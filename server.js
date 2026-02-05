const app = require("./src/app");
const connectToDb = require("./config/db");
connectToDb();
app.listen(3000, (req, res) => {
  console.log("connected succesfulluy");
});
