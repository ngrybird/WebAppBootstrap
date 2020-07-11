const Task = require("../models/task");

exports.getToDoApp = (req, res, next) => {
  Task.find()
    .then(tasks => {
      res.render("todoapp", {
        pageTitle: "To Do App",
        tasks: tasks,
        csrfToken: req.csrfToken()
      });
    })
    .catch(err => console.log(err));
};

exports.postAddTask = (req, res, next) => {
  const task = req.body.task;

  const toDoTask = new Task({ task: task, isComplete: false });
  toDoTask
    .save()
    .then(() => {
      console.log("task created");
      res.redirect("/todoapp");
    })
    .catch(err => console.log(err));
};
