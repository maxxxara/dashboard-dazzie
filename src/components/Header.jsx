import React, { useState } from 'react'
import { FiBell, FiBellOff } from 'react-icons/fi';
const Header = () => {
  const [bell, setBell] = useState(true);
  return (
    <div className='py-4 bg-white border-b border-[#E1E1E1]'>
      <div className='px-12 flex justify-between items-center w-full sm:px-4'>
        <div className='flex items-center'>
          <div className='w-10 h-10 rounded-lg bg-image'></div>
          <h4 className='font-medium text-lg ml-2'>Dazzie</h4>
        </div>
        <div className='flex items-center'>
          {bell ? <FiBell onClick={() => setBell(!bell)} className='mr-8 stroke-icon w-5 h-5 xs:hidden cursor-pointer'/> : <FiBellOff onClick={() => setBell(!bell)} className='cursor-pointer mr-8 stroke-icon w-5 h-5 xs:hidden'/>}
          
          <div className='flex items-center'>
            <div className='w-8 h-8 rounded-full bg-[#C4C4C4] mr-3'></div>
            <div>
              <p className='text-sm font-bold mb-[-4px] tracking-wide'>Samanta</p>
              <span className='text-grayText text-[12px] font-thin tracking-wider'>Leader</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header