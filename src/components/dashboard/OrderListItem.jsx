import React from 'react'

const OrderListItem = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex gap-x-4'>
          <div className='w-16 h-16 bg-image rounded-lg sm:hidden'></div>
          <div>
            <p className='font-bold text-sm w-40 sm:w-auto sm:text-xs'>Soba - Buckwheat Noodles</p>
            <p className='text-green font-medium text-sm sm:text-xs sm:mt-2'>$22</p>
          </div>
        </div>
        <div className='flex items-center gap-4'>
        <p className='w-6 h-6 bg-blue flex justify-center items-center text-xl text-gray1 rounded-md'>-</p>
        <p>1</p>
        <p className='w-6 h-6 bg-blue flex justify-center items-center text-xl text-gray1 rounded-md'>+</p>
        </div>
    </div>
  )
}

export default OrderListItem