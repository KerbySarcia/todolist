import React, { useState } from 'react'
import { updateTask } from '../service/task';

const Modal = ({ onClose, task, onTasks }) => {
    const [value, setValue] = useState(task.text);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await updateTask({ text: value, taskId: task.taskId });

            if (response.data.statusCode !== 200) throw response;

            onTasks(oldTasks => {
                const filteredTasks = oldTasks.filter(taskValue => taskValue._id !== task.taskId);
                const newTasks = [response.data.data, ...filteredTasks];
                return newTasks;
            })

            onClose(false);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='absolute z-10 h-screen w-full bg-black/20 top-0 left-0 flex justify-center items-center'>
            <div className="bg-white h-fit w-72 rounded-lg p-5 flex justify-center">
                <form className=''>
                    <input
                        onChange={handleChange}
                        value={value}
                        type="text"
                        className='border-2 text-lg p-3'
                    />
                    <div className="flex justify-evenly mt-5">
                        <button
                            onClick={() => onClose(false)}
                            className='bg-gray-300 p-1 px-3 rounded-md hover:opacity-50 duration-100'>
                            Cancel
                        </button>
                        <button
                            onClick={handleUpdate}
                            className='bg-indigo-400 p-1 px-3 rounded-md text-white hover:opacity-50 duration-100'>
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal