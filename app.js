const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const flash = require("connect-flash");
const session = require("express-session");
const mongoDBStore = require("connect-mongodb-session")(session);
const csrf = require("csurf");

//const { MongoClient } = require("mongodb");
// const mongoConnect = require("./utils/database").mongoConnect;

const mongoose = require("mongoose");

const notesRouter = require("./routes/notesRoutes");
const authRouter = require("./routes/authRouter");
const signupRouter = require("./routes/signupRouter");
const todoappRouteer = require("./routes/toDoAppRouter");

//MONGODB uri
const MONGO_DB_URI =
  "mongodb+srv://SuperUser:wQGIH77i9iW9oKYc@cluster0.zeaqe.mongodb.net/test?retryWrites=true&w=majority";

const app = express();

//Adding body parser for parsing request
app.use(bodyParser.urlencoded({ extended: false }));

//Serving static content like css
app.use(express.static(__dirname + "/public"));

//flash messages on error
app.use(flash());

//Storing sessions on database
const store = new mongoDBStore({
  uri: MONGO_DB_URI,
  collection: "sessions"
});

app.use(
  session({
    secret: "my secret",
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    },
    saveUninitialized: false,
    store: store,
    unset: "destroy"
  })
);
//Adding csrf tokens on each request
const csrfProtection = csrf();
app.use(csrfProtection);

//set isAuthenticated and csrf token to every res
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", "views");

//SSR index.ejs file @ /
app.get("/", function(req, res, next) {
  //res.sendFile(path.join(__dirname, "views", "index.html"));

  //EJS way of server side rendering
  res.render("index", {
    pageTitle: "Home",
    csrfToken: req.csrfToken()
  });
});

app.post("/search", function(req, res, next) {
  res.redirect("/");
});

app.use(notesRouter);
app.use(authRouter);
app.use(signupRouter);

//To do app added
app.use(todoappRouteer);

//404 Page not found error
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "404 Page not found" });
});

mongoose
  .connect(MONGO_DB_URI)
  .then(result => app.listen("3001", console.log("Connected to server")))
  .catch(err => console.log(err));
