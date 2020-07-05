const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TaskSchema = new Schema({
  task: {
    type: String,
    require: true
  },
  isComplete: {
    type: Boolean,
    require: true
  }
});
module.exports = mongoose.model("Task", TaskSchema);

// const fs = require("fs");
// const path = require("path");
// const getDB = require("../utils/database").getDB;

// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   "data",
//   "tasks.json"
// );

// const getTasksFromFile = cb => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

// module.exports = class Task {
//   constructor(task, complete) {
//     this.task = task;
//     this.complete = complete;
//   }

//   save() {
//     // getTasksFromFile(tasks => {
//     //   if (this.id) {
//     //     const existingTasksIndex = tasks.findIndex(task => task.id === this.id);
//     //     const updatedTasks = [...tasks];
//     //     updatedTasks[existingTasksIndex] = this;
//     //     fs.writeFile(p, JSON.stringify(updatedTasks), err => {

//     //     });
//     //   } else {
//     //     this.id = Math.random().toString();
//     //     tasks.push(this);
//     //     fs.writeFile(p, JSON.stringify(tasks), err => {

//     //     });
//     //   }
//     // });
//     const db = getDB();
//     db.collection("tasks")
//       .insertOne(this)
//       .then(result => {
//         console.log(result);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
//   // static fetchAll(cb) {
//   //   getTasksFromFile(cb);
//   // }
//   static fetchAll() {
//     const db = getDB();
//     return db
//       .collection("tasks")
//       .find()
//       .toArray()
//       .then(tasks => {
//         console.log(tasks);
//         return tasks;
//       })
//       .catch(err => console.log(err));
//   }
// };
