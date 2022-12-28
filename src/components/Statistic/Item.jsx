import React from 'react'

const Item = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex gap-x-4 items-center'>
          <div className='w-16 h-16 bg-image rounded-lg sm:hidden'></div>
          <div>
            <p className='font-medium text-sm w-40 sm:w-auto sm:text-xs'>Soba - Buckwheat Noodles</p>
          </div>
        </div>
        <div className='flex items-center gap-4'>
            <p className='text-sm text-grayText'>430 Items</p>
        </div>
    </div>
  )
}

export default Item