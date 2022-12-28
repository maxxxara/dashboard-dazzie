import React from 'react'
import { FiChevronDown } from 'react-icons/fi';
import Item from './Item';

const Items = () => {
  return (
    <div className='bg-white px-4 py-8 rounded-lg xl:w-[370px] dashboard-orderlist'>
        <div className='flex justify-between items-center'>
        <h4 className='font-medium text-md'>Item Sold</h4>
        <button className='flex justify-between items-center py-2 w-36 px-2 border-2 border-blue text-blue font-medium text-sm rounded-lg xs:hidden'>Popular<FiChevronDown className='stroke-blue w-5 h-5 ml-6'/> </button>
        </div>
        <hr className='border-[#E1E1FB] mt-5'/>
        <div className='mt-6 flex flex-col gap-6'>
            <Item />
            <Item />
            <Item />
        </div>
    </div>
  )
}

export default Items