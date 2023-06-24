import React from 'react'
import {AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail} from 'react-icons/ai'

function Footer() {
  return (
    <div className='bg-[#fc35ffdb] flex-col items-center text-center py-16'>
        <div className='flex justify-center '>
            <div className='flex justify-between w-1/2 md:w-1/5 '>
                <AiOutlineLinkedin size={40} className='cursor-pointer' color='black'/>
                <AiOutlineGithub size={40} className='cursor-pointer' color='black'/>
                <AiOutlineMail size={40} className='cursor-pointer' color='black'/>
            </div>
        </div>
        
        <div className=' mt-4'>
            <p>Created by Arturo Villalobos. © 2023</p>
        </div>
        
    </div>
  )
}

export default Footer