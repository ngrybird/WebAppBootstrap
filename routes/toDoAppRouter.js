const express = require("express");
const path = require("path");
const Task = require("../models/task");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/todoapp", isAuth, (req, res, next) => {
  Task.find()
    .then(tasks => {
      res.render("todoapp", {
        pageTitle: "To Do App",
        tasks: tasks,
        csrfToken: req.csrfToken()
      });
    })
    .catch(err => console.log(err));
});
router.post("/task", isAuth, (req, res, next) => {
  const task = req.body.task;

  const toDoTask = new Task({ task: task, isComplete: false });
  toDoTask
    .save()
    .then(() => {
      console.log("task created");
      res.redirect("/todoapp");
    })
    .catch(err => console.log(err));

  // res.render("todoapp", {
  //   pageTitle: "To Do App"
  // });
});

module.exports = router;
