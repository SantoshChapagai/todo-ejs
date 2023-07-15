const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = ["study", "cook", "eat"];
app.get("/", function (req, res) {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day = today.toLocaleDateString("en-us", options);
  res.render("list", { kindOfDay: day, todoItems: items });
});

app.post("/", function (req, res) {
  let item = req.body.todo;
  items.push(item);
  res.redirect("/");
})

app.listen(3000, function () {
  console.log("server is running at port 3000")

});