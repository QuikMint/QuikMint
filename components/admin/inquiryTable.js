import { db } from '../../utils/fire'
import { getDocs, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function InquiryTable() {
  const router = useRouter()

  useEffect(() => {
    const docs = []
    const querySnapshot = getDocs(collection(db, 'inquiries'))
    querySnapshot.then(snap => {
      snap.forEach(doc => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      setInquiries(() => docs)
    })
  }, [])

  const [inquiries, setInquiries] = useState([
    {
      id: '1234',
      name: 'Greg',
      email: 'email',
      timestamp: 'timestamp',
      status: 'complete',
      inquiry: 'peepee poopoo'
    },
  ])

  return (
    <div id='inquiry-table' className='flex mt-10 justify-center'>
      <table className='min-w-min table-auto'>
        <thead className='justify-between'>
          <tr className='bg-indigo-600'>
            <th className='px-16 py-2'>
              <span className='text-indigo-50'>Name</span>
            </th>
            <th className='px-16 py-2'>
              <span className='text-indigo-50'>Email</span>
            </th>
            <th className='px-16 py-2'>
              <span className='text-indigo-50'>Timestamp</span>
            </th>
            <th className='px-16 py-2'>
              <span className='text-indigo-50'>Status</span>
            </th>
          </tr>
        </thead>
        <tbody className='bg-gray-200'>
          {inquiries.map((inquiry, i) => {
            return (
              <tr
                key='1'
                className='bg-white hover:bg-gray-200 hover:cursor-pointer border-4 border-gray-200 hover:border-gray-400 text-center transition-all'
                onClick={() => {
                  router.push(`/admin/inquiries/${inquiry.id}`)
                }}
                title={inquiry.inquiry}
              >
                <td>
                  <span className='text-center ml-2 font-semibold'>{inquiry.name}</span>
                </td>
                <td className='px-16 py-2'>{inquiry.email}</td>
                <td className='px-16 py-2'>
                  <span>{inquiry.timestamp}</span>
                </td>
                <td className='px-16 py-2'>
                  <span id='svg' className='flex justify-center'>
                    {inquiry.status === 'complete' ? (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='#2c3e50'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <path d='M5 12l5 5l10 -10' />
                      </svg>
                    ) : (
                      (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-5 h-5'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='#2c3e50'
                          fill='none'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path stroke='none' d='M0 0h24v24H0z' />
                          <circle cx={12} cy={12} r={9} />
                          <polyline points='12 7 12 12 15 15' />
                        </svg>
                      ) || (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-5 h-5 ml-8'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='#2c3e50'
                          fill='none'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path stroke='none' d='M0 0h24v24H0z' />
                          <circle cx={12} cy={12} r={9} />
                          <polyline points='12 7 12 12 15 15' />
                        </svg>
                      )
                    )}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
