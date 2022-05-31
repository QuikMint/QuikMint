import { doc, getDoc } from 'firebase/firestore'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAuth } from '../../auth/AuthProvider'
import { db } from '../../utils/fire'
import { TWUIDropdown, ActionsDropdown } from '../dropdown'
import Loading from '../loading'

export default function DashNav() {
  const [active, setActive] = useState('/dashboard')
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState()

  const router = useRouter()
  const { currentUser } = useAuth()

  useEffect(() => {
    setActive(router.pathname)
  }, [router.pathname])

  useEffect(() => {
    if (!currentUser) return
    const ref = doc(db, 'clients', currentUser.uid)
    getDoc(ref).then(snap => {
      setUserData(snap.data())
      setLoading(false)
    })
  })

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div
            id='top'
            className='flex flex-row justify-between items-center px-5 h-[50px] bg-[#F6F8FA]'
          >
            <div id='left' className='flex flex-row items-center justify-center space-x-2'>
              <div id='project-logo' className='rounded-full w-30 h-30'>
                <Image src='/quikmint-logo.png' alt='a' width='30' height='30' objectFit='contain' />
              </div>
              <span id='project'>{userData.project}</span>
            </div>
            <div id='right' className='flex flex-row space-x-3 items-center '>
              <ActionsDropdown />
              <div className='relative inline-block text-left'>
                <TWUIDropdown />
              </div>
            </div>
          </div>
          <div
            id='dashboard-nav'
            className='flex flex-row items-center justify-start border-b-2 border-[#cccccc] h-[42px] mx-5 space-x-1'
          >
            <div className='w-20'>
              <Link href='/dashboard'>
                <a
                  className={`${
                    active === '/dashboard' ? 'bg-[#635BFF] text-white' : 'hover:bg-[#EBEEF1]'
                  } flex flex-row justify-center text-[12px] rounded-full px-1 py-[2px]`}
                  aria-current='page'
                >
                  Home
                </a>
              </Link>
            </div>
            <div className='w-20'>
              <Link href='/dashboard/contract'>
                <a
                  className={`${
                    active === '/dashboard/contract'
                      ? 'bg-[#635BFF] text-white'
                      : 'hover:bg-[#EBEEF1]'
                  } flex flex-row justify-center text-[12px] rounded-full px-1 py-[2px]`}
                  aria-current='page'
                >
                  Contract
                </a>
              </Link>
            </div>
            <div className='w-20'>
              <Link href='/dashboard/balances'>
                <a
                  className={`${
                    active === '/dashboard/balances'
                      ? 'bg-[#635BFF] text-white'
                      : 'hover:bg-[#EBEEF1]'
                  } flex flex-row justify-center text-[12px] rounded-full px-1 py-[2px]`}
                  aria-current='page'
                >
                  Balances
                </a>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}
