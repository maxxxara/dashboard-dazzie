import React from 'react'
import { FiMoreVertical } from 'react-icons/fi'

const Pay = () => {
  return (
    <div className='bg-white px-4 py-6 rounded-lg mt-5'>
        <div className='flex justify-between'>
            <p className='font-medium'>Payment Mode</p>
            <FiMoreVertical className='w-5 h-5 text-icon'/>
        </div>
        <div className='flex mt-4 gap-2 sm:flex-wrap'>
            <button className='border-2 px-6 py-[7px] text-blue font-medium text-sm rounded-lg border-blue'>Cash</button>
            <button className='border-2 border-gray1 px-6 py-[7px] text-blue font-medium text-sm rounded-lg'>Card</button>
            <button className='border-2 border-gray1 px-6 py-[7px] text-blue font-medium text-sm rounded-lg'>E-Wallet</button>
        </div>
        <button className='w-full py-3 bg-blue text-white rounded-xl text-sm mt-6 font-mediumx'>Pay Now</button>
    </div>
  )
}

export default Pay