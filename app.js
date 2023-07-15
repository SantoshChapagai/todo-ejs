const express = require("express");
const bodyParser = require("body-parser");


const app = express();
// app.use(bodyParser);


app.get("/", function (req, res) {
  res.send("todo list.");
})

app.listen(3000, function () {
  console.log("server is running at port 3000")
})