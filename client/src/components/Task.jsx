import React, { useState } from 'react'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { deleteTask } from '../service/task'
import Modal from './Modal'

const Task = ({ text, taskId, onTasks }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDelete = async () => {
        try {
            const response = await deleteTask(taskId);

            if (response.data.statusCode !== 200) throw response;

            onTasks(values => {
                const newValues = values.filter(values => values._id !== taskId);
                return newValues;
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handleModal = () => setIsOpen(true);

    return (
        <>
            <div className='flex text-xl bg-gray-200 relative overflow-hidden group mt-2'>
                <h2 className='flex-1 p-3'>{text}</h2>
                <div className="flex absolute right-[-104px] group-hover:right-0 duration-150">
                    <button
                        onClick={handleModal}
                        className='w-[52px] h-[52px] bg-blue-500 text-white hover:opacity-50 duration-100'>
                        <PencilSquareIcon className='w-5 m-auto' />
                    </button>
                    <button
                        onClick={handleDelete}
                        className='w-[52px] h-[52px] bg-red-500 text-white hover:opacity-50 duration-100'>
                        <TrashIcon className='w-5 m-auto' />
                    </button>
                </div>
            </div>
            {isOpen && <Modal
                onClose={setIsOpen}
                task={{ taskId, text }}
                onTasks={onTasks}
            />}
        </>
    )
}

export default Task