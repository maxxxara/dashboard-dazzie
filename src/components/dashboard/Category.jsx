import React from 'react'

const Category = () => {
  return (
    <div className='flex justify-between text-center mt-8 xs:flex-col sm:gap-y-4'>
        <p className='w-full border-b-4 pb-4 border-blue font-medium text-sm sm:text-xs'>All</p>
        <p className='w-full border-b-4 pb-4 border-gray1 text-grayText text-sm sm:text-xs'>Food</p>
        <p className='w-full border-b-4 pb-4 border-gray1 text-grayText text-sm sm:text-xs'>Drink</p>
        <p className='w-full border-b-4 pb-4 border-gray1 text-grayText text-sm sm:text-xs'>Snack</p>
        <p className='w-full border-b-4 pb-4 border-gray1 text-grayText text-sm sm:text-xs'>Packages</p>
    </div>
  )
}

export default Category