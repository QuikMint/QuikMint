import { useEffect, useState } from 'react'
import SideNav from '../../components/admin/sideNav'
import { getTotalSupply } from '../../components/TotalSupply'
import InquiryTable from '../../components/admin/inquiryTable'

export default function Admin() {
  
  useEffect(() => {
    getTotalSupply().then(supplyStr => setSupply(() => supplyStr))
  })
	const [supply, setSupply] = useState('')

  return (
    <div className='min-h-screen flex'>
      <SideNav />
      <div className='bg-indigo-50 flex-grow py-12 px-10'>
        <div className='flex space-x-4'>
          <div
            id='top-info'
            className='flex items-center justify-start p-6 bg-indigo-600 w-64 rounded-xl space-x-2 mt-10 shadow-lg'
          >
            <div>
              <span className='text-sm font-semibold text-gray-400'>Today's Date</span>
              <h1 className='text-2xl font-bold'>{new Date().toISOString()}</h1>
            </div>
          </div>
          <div
            id='top-info'
            className='flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg'
          >
            <div>
              <span className='text-sm font-semibold text-gray-400'>Total Minted</span>
              <h1 className='text-2xl font-bold'>{supply}</h1>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 text-indigo-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 11l7-7 7 7M5 19l7-7 7 7'
                />
              </svg>
            </div>
          </div>
          <div
            id='top-info'
            className='flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg'
          >
            <div>
              <span className='text-sm font-semibold text-gray-400'>Contract Address</span>
              <h1 className='text-2xl font-bold w-36 overflow-scroll'>
                {process.env.NEXT_PUBLIC_MINTER_ADDRESS}
              </h1>
            </div>
            <div>
              <svg
                onClick={() => {
                  navigator.clipboard.writeText(process.env.NEXT_PUBLIC_MINTER_ADDRESS)
                }}
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 text-indigo-600 hover:text-indigo-50 hover:cursor-pointer transition-all'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                />
              </svg>
            </div>
          </div>
          <div
            id='top-info'
            className='flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg'
          >
            <div>
              <span className='text-sm font-semibold text-gray-400'>Spent this month</span>
              <h1 className='text-2xl font-bold'>$682.5</h1>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 text-indigo-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 11l7-7 7 7M5 19l7-7 7 7'
                />
              </svg>
            </div>
          </div>
        </div>
        <InquiryTable />
      </div>
    </div>
  )
}
