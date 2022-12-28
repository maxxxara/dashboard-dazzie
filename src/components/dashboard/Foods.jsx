import React from 'react'
import Food from './Food';

const Foods = () => {
  return (
    <div className='mt-10'>
        <h4 className='font-medium text-lg'>Food</h4>
        <div className='grid grid-cols-3 mt-5 gap-4 sm:grid-cols-1'>
            <Food />
            <Food />
            <Food />
        </div>
    </div>
  )
}

export default Foods