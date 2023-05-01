import React from 'react'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
const Task = ({ text }) => {
    return (
        <div className='flex text-xl bg-gray-200 relative overflow-hidden group'>
            <h2 className='flex-1 p-3'>{text}</h2>
            <div className="flex absolute right-[-104px] group-hover:right-0 duration-150">
                <button className='w-[52px] h-[52px] bg-blue-500 text-white hover:opacity-50 duration-100'>
                    <PencilSquareIcon className='w-5 m-auto' />
                </button>
                <button className='w-[52px] h-[52px] bg-red-500 text-white hover:opacity-50 duration-100'>
                    <TrashIcon className='w-5 m-auto' />
                </button>
            </div>
        </div>
    )
}

export default Task