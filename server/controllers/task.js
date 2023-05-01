const taskService = require('../service/task');

const getTasks = async (req, res) => {
    try {
        const tasks = await taskService.getTasks();

        return res.json({ statusCode: 200, data: tasks });
    } catch (error) {
        if (error?.message) return res.json(error)
        console.log(error)
    }
}


const addTask = async (req, res) => {
    try {
        const response = await taskService.addTask(req.body.task);

        return res.json(response);
    } catch (error) {
        if (error?.message) return res.json(error)
        console.log(error)
    }
}

const updateTask = async (req, res) => {
    try {
        const { task, taskId } = req.body

        if (!task || !taskId) return res.json({ statusCode: 400, message: 'task and taskId field is required' });

        const taskPayload = { text: task, id: taskId };

        const response = await taskService.updateTask(taskPayload);

        return res.json(response);

    } catch (error) {
        if (error?.message) return res.json(error)
        console.log(error)
    }
}

const deleteTask = async (req, res) => {
    try {
        const { taskId } = req.body;

        if (!taskId) return res.json({ statusCode: 400, message: 'Task ID is required' });

        const response = await taskService.deleteTask(taskId);

        return res.json(response);
    } catch (error) {
        if (error?.message) return res.json(error);
        console.log(error);
    }
}

module.exports = {
    getTasks,
    addTask,
    updateTask,
    deleteTask
}

