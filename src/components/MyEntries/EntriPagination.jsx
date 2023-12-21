import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";
const EntriPagination = () => {
  return (
    <div className='mx-auto my-10 flex items-center justify-center gap-3'>
        <div className='p-2 rounded-full hover:bg-gray-300 aspect-square cursor-pointer border'>
            <FaLessThan/>
        </div>
        <div className='p-2 rounded-full hover:bg-gray-300 aspect-square cursor-pointer'>
            1
        </div>
        <div className='p-2 rounded-full hover:bg-gray-300 aspect-square cursor-pointer'>
            2
        </div>
        <div className='p-2 rounded-full hover:bg-gray-300 aspect-square cursor-pointer'>
            3
        </div>
        <div className='p-2 rounded-full hover:bg-gray-300 aspect-square cursor-pointer'>
            4 
        </div>
        <div className='p-2 rounded-full hover:bg-gray-300 aspect-square cursor-pointer'>
            5
        </div>
        <div className='p-2 rounded-full hover:bg-gray-300 aspect-square cursor-pointer border'>
            <FaGreaterThan/>
        </div>
    </div>
  )
}

export default EntriPagination