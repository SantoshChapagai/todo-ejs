const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

var items = ["study", "cook", "eat"];
app.get("/", function (req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day = today.toLocaleDateString("en-us", options);
  res.render("list", { kindOfDay: day, todoItems: items });
});

app.post("/", function (req, res) {
  var item = req.body.todo;
  items.push(item);
  res.redirect("/");
})

app.listen(3000, function () {
  console.log("server is running at port 3000")

});