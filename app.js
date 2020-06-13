const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const notesRouter = require("./routes/notesRoutes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res, next) {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/search", function(req, res, next) {
  console.log(req.body);
  res.redirect("/");
});
app.use(notesRouter);

app.listen("3001", function() {
  console.log("listening to port 3001");
});
