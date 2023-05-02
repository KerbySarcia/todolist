import React from 'react'
import { deleteAllTask } from '../service/task';

const PendingTask = ({ numberOfPendingTask, onTasks }) => {
    const isDisable = numberOfPendingTask === 0;

    const handleClearAll = async () => {
        try {
            const response = await deleteAllTask();
            if (response.data.statusCode !== 200) throw response;
            onTasks([]);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex justify-between items-center p-2'>
            <h1 className='font-semibold text-xl'>Pending Task {numberOfPendingTask}</h1>
            <button
                onClick={handleClearAll}
                disabled={isDisable}
                className={`${isDisable && 'opacity-50'} bg-indigo-400 text-white py-1 px-2 rounded-sm`}>
                Clear All
            </button>
        </div>
    )
}

export default PendingTask