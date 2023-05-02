import React, { useEffect, useState } from 'react'
import TodoAppContainer from './components/TodoAppContainer'
import AddTask from './components/AddTask'
import PendingTask from './components/PendingTask'
import TaskList from './components/TaskList'
import { getTasks } from './service/task'
function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className='h-screen flex justify-center items-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
      <TodoAppContainer>
        <AddTask onTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
        <PendingTask numberOfPendingTask={tasks.length} onTasks={setTasks} />
      </TodoAppContainer>
    </div>
  )
}

export default App