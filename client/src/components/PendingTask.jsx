import React from 'react'

const PendingTask = ({ numberOfPendingTask }) => {
    return (
        <div className='flex justify-between items-center p-2'>
            <h1 className='font-semibold text-xl'>Pending Task</h1>
            <button className='bg-indigo-400 text-white py-1 px-2 rounded-sm'>
                Clear All
            </button>
        </div>
    )
}

export default PendingTask