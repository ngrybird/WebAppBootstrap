const express = require("express");

const isAuth = require("../middleware/is-auth");
const toDoController = require("../controllers/toDoAppController");

const router = express.Router();

router.get("/todoapp", isAuth, toDoController.getToDoApp);
router.post("/task", isAuth, toDoController.postAddTask);

module.exports = router;
