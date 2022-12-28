import React from 'react'
import Category from '../components/dashboard/Category'
import Foods from '../components/dashboard/Foods';
import OrderList from '../components/dashboard/OrderList';
import Pay from '../components/dashboard/Pay';
import Search from './../components/dashboard/Search';
import Total from './../components/dashboard/Total';

const Dashboard = () => {
  return (
    <div className='flex justify-between gap-8 xl:flex-col'>
      <div className='w-2/3 bg-white px-3 py-4 xl:w-full'>
        <Search />
        <Category />
        <Foods />
      </div>
      <div className='w-1/3 flex flex-col gap-y-5 xl:w-full xl:flex-row xl:justify-between dashboard-left'>
        <OrderList />
        <div>
          <Total />
          <Pay />
        </div>
      </div>
    </div>
  )
}

export default Dashboard