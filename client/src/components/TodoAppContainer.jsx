import React from 'react'

const TodoAppContainer = ({ children }) => {
    return (
        <div className='bg-white space-y-2 h-fit w-full  max-w-xl p-5'>
            {children}
        </div>
    )
}

export default TodoAppContainer