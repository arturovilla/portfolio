import React from 'react'
import {FiArrowUpRight} from 'react-icons/fi'

function Newsletter() {
    // form logic  
   
  return (
    <div className='text-gray-400 w-full md:w-1/2 flex flex-col mx-auto text-center '>
        <div className='flex text-center justify-center '>
            <a href='https://arturovillalobos.substack.com' target='_blank' className='flex text-center justify-center hover:text-gray-100 transition-all'>
                Get emails for new posts, projects, and resume updates <FiArrowUpRight size={20} className='cursor-pointer' color='#9CA3AF'/>
            </a>
        </div>
        
    </div>
  )
}

export default Newsletter




// https://arturovillalobos.substack.com