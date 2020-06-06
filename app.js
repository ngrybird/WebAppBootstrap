var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", function(req, res, next) {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.post("/search", function(req, res, next) {
  console.log(req.body);
  res.redirect("/");
});
app.listen("3001", function() {
  console.log("listening to port 3001");
});
