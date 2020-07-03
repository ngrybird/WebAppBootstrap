const express = require("express");
const path = require("path");
const Task = require("../models/task");
//const signupController = require("../controllers/signupController");

const router = express.Router();

router.get("/todoapp", (req, res, next) => {
  Task.fetchAll().then(tasks => {
    res.render("todoapp", {
      pageTitle: "To Do App",
      tasks: tasks
    });
  });
});
router.post("/task", (req, res, next) => {
  const task = req.body.task;

  const toDoTask = new Task(task, false);
  toDoTask.save();
  res.redirect("/todoapp");

  // res.render("todoapp", {
  //   pageTitle: "To Do App"
  // });
});

module.exports = router;
