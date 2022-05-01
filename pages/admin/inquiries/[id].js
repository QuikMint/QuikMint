import { doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import SideNav from '../../../components/admin/sideNav'
import { db } from '../../utils/fire'
import Link from 'next/link'

export default function OneInquiry() {
  const [inquiry, setInquiry] = useState(undefined)
	const [pageError, setPageError] = useState('')
	const [response, setResponse] = useState()

	const router = useRouter()

  useEffect(() => {
		console.log(router.query)
		const docRef = doc(db, `inquiries/${router.query.id}`)
		const docSnap = getDoc(docRef)
    docSnap.then(snap => {
      if (docSnap.exists()) {
        setInquiry(docSnap.data())
      } else {
        // doc.data() will be undefined in this case
        setPageError('Invalid ID')
      }
    })
  }, [pageError, router.query])

  return !inquiry ? (
    <p className='text-red-500'>{pageError}</p>
  ) : (
    <div className={`flex flex-row`}>
      <SideNav />
      <div className={`flex flex-col w-full justify-center items-center`}>
        <div
          id='inquiry-details'
          className={`w-3/4 flex flex-row items-center justify-around p-4 h-1/5 bg-indigo-400 rounded-t`}
        >
          <span className={`text-2xl text-slate-600 text-center`}>{inquiry.timestamp}</span>
          <span className={`text-3xl text-slate-600 text-center`}>{inquiry.name}</span>
          <span className={`text-2xl text-slate-600 text-center`}>
            {inquiry.status || 'incomplete'}
          </span>
        </div>
        <div
          id='inquiry-response'
          className={`flex flex-row min-h-[75%] w-3/4 p-5 bg-indigo-400 rounded-b`}
        >
          <div
            id='inquiry'
            className={`h-full w-1/2 border-8 p-5 border-indigo-400 bg-indigo-50 rounded-bl`}
          >
            {inquiry.inquiry}
          </div>
          <div
            id='respond'
            className={`flex flex-col h-full w-1/2 border-8 bg-indigo-400 border-indigo-400 rounded-br`}
          >
            <textarea id='response' className='h-full w-full p-2'></textarea>
            <div className='flex flex-row justify-between p-2 pt-3'>
              <span className='flex flex-col justify-center'>
                to: <Link href={`mailto:${inquiry.email}`}><a>{inquiry.email}</a></Link>
              </span>
              <button className='bg-indigo-600 p-2 rounded-md w-32'>Send</button>
            </div>
						
          </div>
        </div>
      </div>
    </div>
  )
}
