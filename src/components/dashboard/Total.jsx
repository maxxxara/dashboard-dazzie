import React from 'react'

const Total = () => {
  return (
    <div className='bg-white px-4 py-6 rounded-lg'>
        <div className='flex justify-between'>
            <ul>
                <li className='text-grayText text-sm font-medium'>Sub Total</li>
                <li className='my-3 text-grayText text-sm font-medium'>Tax Total</li>
                <li className='text-grayText text-sm font-medium'>Discount</li>
            </ul>
            <ul className='text-right'>
                <li className='font-bold text-sm'>$88</li>
                <li className='my-3 font-bold text-sm'>$4</li>
                <li className='font-bold text-sm'>-20$</li>
            </ul>
        </div>
        <hr className='border-[#E1E1FB] mt-6'/>
        <div className='flex justify-between items-center mt-6'>
            <p className='text-grayText text-sm font-medium'>Total</p>
            <p className='font-medium text-2xl'>$32</p>
        </div>
    </div>
  )
}

export default Total