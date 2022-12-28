import clsx from 'clsx';
import React, { useEffect, useState } from 'react'
import { FiAirplay, FiBarChart, FiBox, FiImage, FiPieChart, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [active, setActive] = useState('/');
  return (
    <div className='w-[80px] bg-white flex flex-col items-center py-12 h-revert border-r border-grayBorder sm:py-4 sm:px-4 sm:w-full sm:flex-row'>
      <div className='flex flex-col gap-y-4 sm:flex-row sm:w-full sm:justify-between xs:gap-y-2'>
        <Link to="/" className={clsx(active == '/' && 'bg-blue p-4 rounded-lg', 'p-4 sm:p-2')} onClick={() => setActive('/')}>
          <FiBox className={clsx(active == '/' ? 'stroke-white' : 'stroke-icon', 'w-5 h-5 xs:w-4 xs:h-4')}/>
        </Link>
        <Link to='/tables' className={clsx(active == 'tables' && 'bg-blue p-4 rounded-lg', 'p-4 sm:p-2')} onClick={() => setActive('tables')}>
          <FiPieChart className={clsx(active == 'tables' ? 'stroke-white' : 'stroke-icon', 'w-5 h-5 xs:w-4 xs:h-4')}/>
        </Link>
        <Link to='/statistic' className={clsx(active == 'statistic' && 'bg-blue p-4 rounded-lg', 'p-4 sm:p-2')} onClick={() => setActive('statistic')}>
          <FiBarChart className={clsx(active == 'statistic' ? 'stroke-white' : 'stroke-icon', 'w-5 h-5 xs:w-4 xs:h-4')}/>
        </Link>
        <Link to='/login' className={clsx(active == 'login' && 'bg-blue p-4 rounded-lg', 'p-4 sm:p-2')} onClick={() => setActive('login')}>
          <FiUser className={clsx(active == 'login' ? 'stroke-white' : 'stroke-icon', 'w-5 h-5 xs:w-4 xs:h-4')}/>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar