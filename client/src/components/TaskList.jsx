import React from 'react'
import Task from './Task'

const TaskList = () => {
    return (
        <div className='space-y-2 h-[292px] overflow-y-scroll'>
            <Task text={'dance'} />
            <Task text={'Walk'} />
            <Task text={'Cook'} />
            <Task text={'Cook'} />
            <Task text={'Cook'} />
            <Task text={'Cook'} />
        </div>
    )
}

export default TaskList