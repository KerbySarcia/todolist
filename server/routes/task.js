const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task');

router.get('/task', taskController.getTasks);
router.post('/task', taskController.addTask);
router.patch('/task', taskController.updateTask);
router.delete('/task/:id', taskController.deleteTask);
router.delete('/task', taskController.deleteAllTask);

module.exports = router;