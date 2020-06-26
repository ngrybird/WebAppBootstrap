const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

//const { MongoClient } = require("mongodb");
//const mongoConnect = require("./utils/database");

const notesRouter = require("./routes/notesRoutes");
const authRouter = require("./routes/authRouter");
const signupRouter = require("./routes/signupRouter");

const app = express();

//Adding body parser for parsing request
app.use(bodyParser.urlencoded({ extended: false }));

//Serving static content like css
app.use(express.static(__dirname + "/public"));

// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", "views");

//SSR index.ejs file @ /
app.get("/", function(req, res, next) {
  //res.sendFile(path.join(__dirname, "views", "index.html"));

  //EJS way of server side rendering
  res.render("index", {
    pageTitle: "Home"
  });
});

app.post("/search", function(req, res, next) {
  console.log(req.body);
  res.redirect("/");
});

app.use(notesRouter);
app.use(authRouter);
app.use(signupRouter);

//404 Page not found error
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "404 Page not found" });
});

app.listen("3001", () => {
  console.log("Server started");
});

// mongoConnect(client => {
//   console.log(client);
//   app.listen("3001");
// });
