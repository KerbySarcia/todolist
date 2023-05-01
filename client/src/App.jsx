import React from 'react'
import TodoAppContainer from './components/TodoAppContainer'
import AddTask from './components/AddTask'
import Task from './components/Task'
import PendingTask from './components/PendingTask'
import TaskList from './components/TaskList'

function App() {
  return (
    <div className='h-screen flex justify-center items-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
      <TodoAppContainer>
        <AddTask />
        <TaskList />
        <PendingTask />
      </TodoAppContainer>
    </div>
  )
}

export default App