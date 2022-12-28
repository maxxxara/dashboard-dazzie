import React from 'react'
import OrderListItem from './OrderListItem';

const OrderList = () => {
  return (
    <div className='bg-white px-4 py-8 rounded-lg xl:w-[370px] dashboard-orderlist'>
        <div className='flex justify-between'>
        <h4 className='font-medium text-md'>Current Order</h4>
        <p className='text-error font-medium text-sm cursor-pointer'>Clear All</p>
        </div>
        <hr className='border-[#E1E1FB] mt-5'/>
        <div className='mt-6 flex flex-col gap-6'>
            <OrderListItem />
            <OrderListItem />
            <OrderListItem />
        </div>
    </div>
  )
}

export default OrderList