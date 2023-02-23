const express = require("express");
const app = express();
const cors = require("cors");
const auth = require("./auth");
app.use(cors());
app.get("/", auth, (req, res) => {
  res.send("successfull");
});

app.listen(4000, () => {
  console.log("server is running");
});
