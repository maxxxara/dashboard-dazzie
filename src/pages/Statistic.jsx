import React from 'react'
import { FiChevronDown } from 'react-icons/fi';
import Short from '../components/Statistic/Short'
import Chart from './../components/Statistic/Chart';
import Items from './../components/Statistic/Items';

const Statistic = () => {
  return (
    <div>
      <div className='w-full grid grid-cols-4 gap-8 md:grid-cols-2 statistic-info sm:gap-3'>
        <Short content={"red"}/>
        <Short />
        <Short content={"red"}/>
        <Short />
      </div>

      <div className='flex justify-between gap-8 xl:flex-col mt-8'>
        <div className='w-2/3 bg-white px-3 py-4 xl:w-full'>
          <div className='px-3 flex justify-between items-center'>
            <p className='font-medium text-lg'>Earning</p>
            <button className='xs:hidden flex justify-between items-center py-2 w-36 px-2 border-2 border-blue text-blue font-medium text-sm rounded-lg'>Weekly <FiChevronDown className='stroke-blue w-5 h-5 ml-6'/> </button>
          </div>
          <hr className='border-[#E1E1FB] mt-4'/>
          <div className='mt-6 flex justify-between items-center px-3'>
            <div>
              <p className='text-xl font-medium'>$50.000</p>
              <p className='text-xs mt-1 text-grayText'>Earning Overtime</p>
            </div>
            <div>
              <p className='text-xl font-medium text-right'>1050</p>
              <p className='text-xs mt-1 text-grayText'>Total Order</p>
            </div>
          </div>
          <Chart />
        </div>
        <div className='w-1/3 flex flex-col gap-y-5 xl:w-full xl:flex-row xl:justify-between dashboard-left'>
          <Items />
        </div>
      </div>
    </div>
  )
}

export default Statistic