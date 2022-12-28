import React from 'react'
import { FiCheck, FiEye, FiEyeOff } from "react-icons/fi";

const Signin = () => {
  return (
    <div className='w-2/3 mt-10 flex flex-col gap-4'>
        <div className='flex flex-col'>
            <span className='font-medium ml-2 mb-1 text-sm'>Email</span>
            <div>
                <input type="text" className='w-full rounded-lg border-2 border-blue px-4 py-4 text-icons text-sm' placeholder='input new user email here'/>
            </div>
        </div>
        <div className='flex flex-col'>
            <span className='font-medium ml-2 mb-1 text-sm'>Password</span>
            <div className='flex items-center relative'>
                <input type="text" className='w-full rounded-lg border-2 border-blue px-4 py-4 text-icons text-sm' placeholder='input new user password here'/>
                <FiEyeOff className='absolute w-5 h-5 right-4 text-icon cursor-pointer'/>
            </div>
        </div>
        <div className='flex items-center'>
            {/* <div className='w-6 h-6 border-2 rounded-md border-blue block'></div> */}
            <div className='w-6 h-6 border-2 rounded-md border-blue bg-blue flex justify-center items-center'>
                <FiCheck className='w-4 h-4 stroke-white'/>
            </div>
            <p className='text-xs font-thin text-icon ml-3'>Let me stay in</p>
        </div>
        <button className='bg-blue text-white font-medium text-sm py-4 rounded-lg mt-4'>Sign In</button>
    </div>
  )
}

export default Signin