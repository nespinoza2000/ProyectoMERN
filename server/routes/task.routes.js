const verifyToken = require("../util/verifyToken");
const express = require('express');
const router = express.Router();

const taskController = require('../controllers/task.controller');


//* Rutas de Tarea
router.post("", verifyToken, taskController.createTask);
router.get("", verifyToken, taskController.getTaskPerUser);

router.get("/:id", taskController.findTaskById);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;