const TASK = require('../models/task');

const getTasks = async () => {
    try {
        const tasks = await TASK.find().lean();

        if (!tasks.length) throw ({ statusCode: 400, message: 'Collection is Empty' });

        return tasks;
    } catch (error) {
        throw error
    }
}

const addTask = async (task) => {
    try {
        if (!task) throw ({ statusCode: 400, message: 'Task is required' })

        const result = await TASK.create({ name: task });

        if (!result) throw ({ statusCode: 400, message: 'Invalid data receive' });

        return { statusCode: 201, message: 'Successfully Added!' }
    } catch (error) {
        throw error;
    }
}

const deleteTask = async (taskId) => {
    try {
        const findId = await TASK.findById(taskId).exec();

        if (!findId) throw ({ statusCode: 400, message: 'Task ID does not exist' });

        const result = await findId.deleteOne();

        if (!result) throw ({ statusCode: 400, message: 'Invalid data recieved' });

        return { statusCode: 200, message: `Task ID ${taskId} Successfully Deleted` };

    } catch (error) {
        throw error;
    }
}

const updateTask = async (task) => {
    try {
        const { text, id } = task;

        const findTask = await TASK.findById(id).exec();

        if (!findTask) throw ({ statusCode: 400, message: 'Task not found' });

        // Update task
        findTask.name = text;
        const result = await findTask.save();

        if (!result) throw ({ statusCode: 400, message: 'Invalid data received' });

        return { statusCode: 200, message: 'Succesfully updated!' };
    } catch (error) {
        throw error
    }
}

module.exports = {
    getTasks,
    addTask,
    deleteTask,
    updateTask
}