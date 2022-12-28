import clsx from 'clsx'
import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

const Short = ({content}) => {
  return (
    <div className='bg-white px-4 py-6 rounded-lg cursor-pointer'>
        <div className='flex justify-between'>
        <p className='text-sm font-medium'>Customer</p>
        <FiChevronDown className={clsx(content == 'red' ? 'stroke-error' : 'stroke-green', 'w-5 h-5')}/>
        </div>
        <div className='flex justify-between mt-4'>
        <p className='font-medium text-sm'>1000</p>
        <p className={clsx(content == 'red' ? 'text-error' : 'text-green', 'font-medium text-sm')}>-15%</p>
        </div>
    </div> 
  )
}

export default Short