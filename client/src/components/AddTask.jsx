import React, { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import { addTask } from '../service/task';

const AddTask = ({ onTasks }) => {
    const [value, setValue] = useState('');

    const disableButton = !value.length;

    const handleAddTask = async (e) => {
        e.preventDefault();
        try {
            const { data: { data } } = await addTask(value);
            onTasks(values => [data, ...values]);
            setValue('');
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className='space-y-3'>
            <h1 className='text-2xl font-bold'>
                Todo List
            </h1>
            <form className='flex items-center' action="">
                <input
                    value={value}
                    onChange={handleChange}
                    className='border-2 flex-1 p-2 pl-2'
                    placeholder='Add Task'
                    type="text"
                />
                <button
                    disabled={disableButton}
                    onClick={handleAddTask}
                    type='submit'
                    className={`${disableButton && 'opacity-50'} text-white h-[43.2px] w-[43.2px] bg-indigo-400`}>
                    <PlusIcon className='w-5 m-auto' />
                </button>
            </form>
        </div>
    )
}

export default AddTask