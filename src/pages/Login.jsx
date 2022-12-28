import React, { useState } from 'react'
import Signup from './../components/login/Signup';
import Signin from './../components/login/Signin';
import clsx from 'clsx';
const Login = () => {
    const [content, setContent] = useState('in');

  return (
    <div className='container flex flex-col items-center justify-center pb-20'>
        <h1 className='font-bold text-2xl text-center mt-7'>Dashboard</h1>
        <div className='w-[520px] bg-white mt-10 flex flex-col items-center pb-10 rounded-md'>
            <div className='flex pt-8 w-full'>
                <div className={clsx(content == 'in' && 'border-blue', content != 'in' && 'border-gray1', 'w-1/2 cursor-pointer border-b-4 pb-2')} onClick={() => setContent('in')}>
                    <p className='font-bold text-center text-black text-sm'>Sign in</p>
                </div>
                <div className={clsx(content == 'up' && 'border-blue', content != 'up' && 'border-gray1', 'w-1/2 cursor-pointer border-b-4 pb-2')}  onClick={() => setContent('up')}>
                    <p className='font-medium text-center text-sm text-grayText'>Sign Up</p>
                </div>
            </div>
            {content == 'up' ? <Signup /> : <Signin />}
            {/* <Signup /> */}
        </div>
    </div>
  )
}

export default Login