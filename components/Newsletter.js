import React from 'react'
import { useFormik } from 'formik'

function Newsletter() {
    // form logic  
    const formik = useFormik({
        initialValues: {
            email: ""
        },
        //Validate form up here with yup if neccesary
    })
  return (
    <div className='w-full md:w-1/2 flex justify-center '>
        <form onSubmit={formik.handleSubmit}>
            <h1 className='text-center text-[#E4DFDB]  md:text-xl'>Subcribe to my newsletter to get emails on new blog posts, projects, and resume updates</h1>
            <div className='flex justify-center '>
                <div className='mt-3  flex justify-center'>
                    <input className=" text-xs rounded-md md:text-lg py-2 px-5" type='text' name='email' value="example@gmail.com" onChange={formik.handleChange}/>
                    <button className='text-xs ml-2 md:text-lg py-2 px-5 text-white rounded-md border border-white hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-stone-300 transition duration-150 ease-in-out' >Subscribe</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Newsletter