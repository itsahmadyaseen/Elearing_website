import React from 'react'
import { useState} from 'react'
import {motion} from 'framer-motion'
import { HiX } from 'react-icons/hi'

const Signup = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='bg-Solitude w-80'>

            {toggle &&( 
                <motion.div 
                initial={{x:-500, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration:0.3}}

                className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-black flex flex-col justify-center items-center shadow-lg gap-8 py-8">
                <div className=''>
            <div className='text-2xl font-bold font-Poppins text-Teal px-6 mt-12'>
                Login
            </div>
            <div className='text-sm font-Poppins font-semibold px-6 mt-2'>
                Enter your details
            </div>
        </div>
        <div className='ml-2'>
            <div>
                <input type="email" placeholder='Enter your email address'
                        className='px-6 mt-2 text-black border border-black outline-none'/>
            </div>
            <div>
                <input type="password" placeholder='Enter your email address'
                        className='px-6 mt-1 text-black border border-black outline-none focus:outline-none'/>
            </div>
        </div>
        <div className='mt-2 ml-2'>
            <p className='text-sm text-gray underline underline-offset-1 cursor-pointer whitespace-nowrap'>Forgot Password?</p>
        </div>

        <div className='mt-2 ml-12 flex flex-col '>
            <button className='w-1/2 text-center font-bold border border-black bg-Teal my-1 text-white rounded-sm'>
                Login
            </button>
            <button className='w-1/2 mb-3 text-center font-semibold border border-black bg-white text-black rounded-sm'>
                Signup
            </button>
        </div>
                
                <HiX className='absolute text-3xl right-12 top-12 cursor-pointer'
                    onClick={(prev) => setToggle(!prev)}   
                />
                </motion.div>
            )}



        

    </div>
  )
}

export default Signup