import React, { useEffect, useState } from 'react'
import Task from './Task'
import { getTasks } from '../service/task'

const TaskList = ({ tasks, setTasks }) => {
    const [status, setStatus] = useState(null);

    useEffect(() => {
        handleTasks();
    }, [])

    const handleTasks = async () => {
        try {
            const response = await getTasks();

            setTasks(response.data.data);
            setStatus(response.data.statusCode);
        } catch (error) {
            console.log(error);
        }
    }

    if (!status) return <div className='h-[292px] text-center'>Loading...</div>

    const taskElements = tasks?.map(task => <Task
        key={task._id}
        text={task.name}
        taskId={task._id}
        onTasks={setTasks}
    />)

    return (
        <div className='h-[292px] overflow-y-scroll'>
            {!tasks.length ? <h1 className='text-center'>Empty todo</h1> : taskElements}
        </div>
    )
}

export default TaskList