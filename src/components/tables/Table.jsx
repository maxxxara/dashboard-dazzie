import React from 'react'

const Table = () => {
  return (
    <div className='overflow-x-auto p-3'>
        <table className='table-auto w-full'>
            <thead className='text-sm bg-lightBg'>
                <tr className='text-left'>
                    <th className='p-4 font-medium'>ID</th>
                    <th className='p-4 font-medium'>Product Name</th>
                    <th className='p-4 font-medium'>Product Quantity</th>
                    <th className='p-4 font-medium'>Total</th>
                </tr>
            </thead>
            <tbody className='divide-y divide-[#E1E1FB]'>
                <tr className='text-sm'>
                    <td className='p-4'>0</td>
                    <td className='p-4'>Title 1</td>
                    <td className='p-4'>123</td>
                    <td className='p-4'>1230</td>
                </tr>
                <tr className='text-sm'>
                    <td className='p-4'>0</td>
                    <td className='p-4'>Title 1</td>
                    <td className='p-4'>123</td>
                    <td className='p-4'>1230</td>
                </tr>
                <tr className='text-sm'>
                    <td className='p-4'>0</td>
                    <td className='p-4'>Title 1</td>
                    <td className='p-4'>123</td>
                    <td className='p-4'>1230</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table