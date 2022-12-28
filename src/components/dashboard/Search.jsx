import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  return (
    <div className='relative flex items-center'>
        <FiSearch className='stroke-icon absolute left-4' />
        <input type="text" className='bg-lightBg w-full px-10 py-3 text-grayText   text-xs rounded-lg' placeholder='Search Here...' />
    </div>
  )
}

export default Search