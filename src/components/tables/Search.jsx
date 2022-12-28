import React from 'react'
import { FiFilter, FiSearch, FiMoreVertical } from 'react-icons/fi';

const Search = () => {
  return (
    <div className='w-full flex items-center'>
        <div className='relative flex items-center w-full'>
            <FiSearch className='stroke-icon absolute left-4' />
            <input type="text" className='bg-lightBg w-full px-10 py-3 text-grayText   text-xs rounded-lg' placeholder='Search Here...' />
        </div>
        <FiFilter className='w-4 h-4 stroke-icon ml-5'/>
        <FiMoreVertical className='w-5 h-5 stroke-icon ml-4'/>
    </div>
  )
}

export default Search