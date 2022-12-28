import React from 'react'
import Search from '../components/tables/Search'
import Table from './../components/tables/Table';

const Tables = () => {
  return (
    <div>
        <h1 className='font-medium text-xl'>Tables</h1>
        <div className='bg-white'>
            <div className='mt-8 px-4 py-5'>
                <Search />
                <Table />
            </div>
        </div>
    </div>
  )
}

export default Tables