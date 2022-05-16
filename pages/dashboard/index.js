import { withSetupUser } from '../../auth/hooks'
import { Card, Button } from 'react-bootstrap'
import Head from 'next/head'
import { useAuth } from '../../auth/AuthProvider'
import { db } from '../../utils/fire'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import Loading from '../../components/loading'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Dashboard() {

	const { currentUser } = useAuth()
	const router = useRouter()

	const [userData, setUserData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [active, setActive] = useState('/dashboard')

	useEffect(() => {
		const ref = doc(db, 'clients', currentUser.uid)
    getDoc(ref).then(snap => {
			setUserData(snap.data())
			setLoading(false)
		})
	})

	useEffect(() => {
		setActive(router.pathname)
	}, [router.pathname])

  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
          integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3'
          crossOrigin='anonymous'
        />
      </Head>
      <main>
        {loading ? (
          <Loading />
        ) : (
          <div className='w-full h-full'>
            <div id='top' className='flex flex-row'>
              <div id='left'>
                <div id='project-logo' className='rounded-full'></div>
                <span id='project'>{userData.project}</span>
              </div>
              <div id='right' className='inline-block'>
                <button id='actions-btn' className=''></button>
                <i id='notifications'></i>
                <i id='settings' className=''></i>
                <div id='profile-dropdown' className=''>
                  <i id='profile-icon' className=''></i>
                  <div id='accordion-thing'>
                    <div id='profile' className='accordion-row'>
                      <i></i>
                      <span>Profile</span>
                    </div>
                    <div id='billing' className='accordion-row'>
                      <i></i>
                      <span>Billing</span>
                    </div>
                    <div id='help' className='accordion-row border-b-2 border-[#cccccc]'>
                      <i></i>
                      <span>Help</span>
                    </div>
                    <div id='settings' className='accordion-row'>
                      <i></i>
                      <span>Settings</span>
                    </div>
                    <div id='logout' className='accordion-row'>
                      <i></i>
                      <span>Log Out</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id='dashboard-nav' className='border-b-2 border-[#cccccc] w-full'>
              <Link href='/dashboard'>
                <a className={active === '/dashboard' ? '' : ''} aria-current='page'>
                  Home
                </a>
              </Link>
              <Link href='/dashboard/contract'>
                <a className={active === '/dashboard/contract' ? '' : ''} aria-current='page'>
                  Contract
                </a>
              </Link>
              <Link href='/dashboard/balances'>
                <a className={active === '/dashboard/balances' ? '' : ''} aria-current='page'>
                  Balances
                </a>
              </Link>
              <Link href='/dashboard/customers'>
                <a className={active === '/dashboard/customers' ? '' : ''} aria-current='page'>
                  Customers
                </a>
              </Link>
            </div>
            <div id='warning' className='warning w-full'>
              <i className='exclamation-triangle'></i>
              <span id='warning-message' className=''></span>
            </div>
            <div id='metric-cards' className=''>
              <div id='metric' className='flex flex-row'>
                <div id='left' classsName='flex flex-col'>
                  <span id='value-big'></span>
                  <span id='name-small'></span>
                </div>
                <i id='metric-picture' className=''></i>
              </div>
              <div id='metric' className='flex flex-row'>
                <div id='left' classsName='flex flex-col'>
                  <span id='value-big'></span>
                  <span id='name-small'></span>
                </div>
                <i id='metric-picture' className=''></i>
              </div>
              <div id='metric' className='flex flex-row'>
                <div id='left' classsName='flex flex-col'>
                  <span id='value-big'></span>
                  <span id='name-small'></span>
                </div>
                <i id='metric-picture' className=''></i>
              </div>
              <div id='metric' className='flex flex-row'>
                <div id='left' classsName='flex flex-col'>
                  <span id='value-big'></span>
                  <span id='name-small'></span>
                </div>
                <i id='metric-picture' className=''></i>
              </div>
            </div>
            <div id='bottom' className=''>
              <div id='graph-left'>
                <span id='graph-title' className=''>
                  Volume
                </span>
                <div id='graph' className=''></div>
              </div>
              <div id='payment-right' className=''>
                <span id='payments-title'>Kickstart your project with one of our pro plans</span>
                <div id='plans'>
                  <div id='plan-1' className='w-1/3'>
										<div id='top-title-price'>
											<span id='option-title'></span>
											<span id='price'>
												<span id='dollar-sign'>$</span>
												<span id='price'></span>
												<span>.00</span>
											</span>
										</div>
									</div>
                  <div id='plan-2' className='w-1/3'></div>
                  <div id='plan-3' className='w-1/3'></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default withSetupUser(Dashboard)
