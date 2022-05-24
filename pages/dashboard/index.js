import { withSetupUser } from '../../auth/hooks'
import Head from 'next/head'
import { useAuth } from '../../auth/AuthProvider'
import { db } from '../../utils/fire'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import Loading from '../../components/loading'
import { useRouter } from 'next/router'
import DashNav from '../../components/Navbar/dash'
import Graph from '../../components/graph'

function Dashboard() {
  const { currentUser } = useAuth()
  const router = useRouter()

  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const ref = doc(db, 'clients', currentUser.uid)
    getDoc(ref).then(snap => {
      setUserData(snap.data())
      setLoading(false)
    })
  })

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
            <DashNav userData={userData} />
            <div
              id='warning'
              className='flex flex-col bg-[#fef4fa] border-1 rounded-md mx-5 border-[#ebeef1] mt-4 p-2'
            >
              <div className='flex flex-row items-center space-x-1'>
                <i className='exclamation-triangle'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 12 12'
                    width='12'
                    height='12'
                    className='fill-red-500'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.855.708c.5-.896 1.79-.896 2.29 0l4.675 8.351a1.312 1.312 0 01-1.146 1.954H1.33A1.312 1.312 0 01.183 9.058L4.855.708zM7 7V3H5v4h2zm-1 3a1 1 0 100-2 1 1 0 000 2z'
                    ></path>
                  </svg>
                </i>
                <span id='warning-message' className='font-semibold'>
                  Alert Title
                </span>
              </div>
              <span id='warning-message' className=''>
                Lorem Ipsum dolor sit amet ..... ballsack penis shit fart 1234
              </span>
            </div>
            <div id='metric-cards' className='mx-5 mt-4 flex flex-row h-32 space-x-3'>
              <div
                id='metric'
                className='flex flex-row basis-3/12 justify-around items-center space-x-10 bg-[#ebeef1] border-1 border-[#cccccc] rounded-md'
              >
                <div id='left' classsName='flex flex-col'>
                  <span id='value-big' className='text-[48px] text-[#635bff] font-bold'>
                    69
                  </span>
                  <br />
                  <span id='name-small' className=''>
                    Total Sales
                  </span>
                </div>
                <i id='metric-picture' className='w-65 h-65 flex justify-center items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    width='65'
                    height='65'
                    className='w-65 h-65'
                  >
                    <path
                      fillRule='evenodd'
                      d='M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z'
                    ></path>
                  </svg>
                </i>
              </div>
              <div
                id='metric'
                className='flex flex-row basis-1/4 justify-around items-center space-x-10 bg-[#ebeef1] border-1 border-[#cccccc] rounded-md'
              >
                <div id='left' classsName='flex flex-col'>
                  <span id='value-big' className='text-[48px] text-[#635bff] font-bold'>
                    69
                  </span>
                  <br />
                  <span id='name-small' className=''>
                    Total Sales
                  </span>
                </div>
                <i id='metric-picture' className='w-65 h-65 flex justify-center items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    width='65'
                    height='65'
                    className='w-65 h-65'
                  >
                    <path
                      fillRule='evenodd'
                      d='M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z'
                    ></path>
                  </svg>
                </i>
              </div>
              <div
                id='metric'
                className='flex flex-row basis-1/4 justify-around items-center space-x-10 bg-[#ebeef1] border-1 border-[#cccccc] rounded-md'
              >
                <div id='left' classsName='flex flex-col'>
                  <span id='value-big' className='text-[48px] text-[#635bff] font-bold'>
                    69
                  </span>
                  <br />
                  <span id='name-small' className=''>
                    Total Sales
                  </span>
                </div>
                <i id='metric-picture' className='w-65 h-65 flex justify-center items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    width='65'
                    height='65'
                    className='w-65 h-65'
                  >
                    <path
                      fillRule='evenodd'
                      d='M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z'
                    ></path>
                  </svg>
                </i>
              </div>
              <div
                id='metric'
                className='flex flex-row basis-1/4 justify-around items-center space-x-10 bg-[#ebeef1] border-1 border-[#cccccc] rounded-md'
              >
                <div id='left' classsName='flex flex-col'>
                  <span id='value-big' className='text-[48px] text-[#635bff] font-bold'>
                    69
                  </span>
                  <br />
                  <span id='name-small' className=''>
                    Total Sales
                  </span>
                </div>
                <i id='metric-picture' className='w-65 h-65 flex justify-center items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    width='65'
                    height='65'
                    className='w-65 h-65'
                  >
                    <path
                      fillRule='evenodd'
                      d='M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z'
                    ></path>
                  </svg>
                </i>
              </div>
            </div>
            <div id='bottom' className='flex flex-row space-x-3 m-5'>
              <div id='graph-left' className='w-full'>
                <div
                  id='graph-title'
                  className='flex flex-row items-center space-x-3 mb-2 font-semibold text-[20px]'
                >
                  <span>VOLUME</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    width='16'
                    height='16'
                  >
                    <path
                      fillRule='evenodd'
                      d='M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z'
                    ></path>
                  </svg>
                </div>
                <div id='graph' className='w-auto h-[360px]'>
                  <div
                    id='graph-head'
                    className='bg-[#fffbfc] border-1 flex flex-row justify-start items-center h-[60px] p-2 px-3 rounded-t-[10px]'
                  >
                    <button className='bg-[#C3BBFF] text-center border-1 border-[#cccccc] rounded-tl rounded-bl px-3 text-[12px] hover:shadow-md'>
                      24h
                    </button>
                    <button className='bg-[#f3ebff] text-center border-1 border-[#cccccc] px-3 text-[12px] hover:shadow-md'>
                      1w
                    </button>
                    <button className='bg-[#f3ebff] text-center border-1 border-[#cccccc] px-3 text-[12px] hover:shadow-md'>
                      1m
                    </button>
                    <button className='bg-[#f3ebff] text-center border-1 border-[#cccccc] rounded-tr rounded-br px-3 text-[12px] hover:shadow-md'>
                      1y
                    </button>
                  </div>
                  <div
                    id='graph-body'
                    className='bg-[#f4f8fa] w-auto h-[90%] rounded-b-[10px] border-x-[1px] border-b-[1px]'
                  >
                    <div id='badge'></div>
                    <Graph />
                  </div>
                </div>
              </div>
              <div id='payment-right' className='w-full'>
                <span id='payments-title' className='font-semibold text-[24px] mb-2'>
                  Kickstart your project with one of our pro plans
                </span>
                <div id='plans' className='flex flex-row justify-between h-full'>
                  <div
                    id='plan-1'
                    className='mt-5 w-52 h-[80%] bg-[#f4f8fa] rounded-md border-[#cccccc] border-1 shadow-[#cccccc] shadow-md hover:shadow-lg hover:shadow-[#999999] transition-shadow'
                  >
                    <div
                      id='top-title-price'
                      className='payment-top flex flex-col justify-center space-y-3 items-center rounded-t-md bg-[#fffbfc] border-b-[1px] border-[#cccccc] h-[40%]'
                    >
                      <span id='option-title' className='text-[24px]'>
                        Basic
                      </span>
                      <span id='price' className='space-x-[4px]'>
                        <span id='dollar-sign' className='text-[12px]'>
                          $
                        </span>
                        <span id='price' className='text-[#1d4ed8] font-medium text-[20px]'>
                          200
                        </span>
                        <span id='mo' className='text-[12px]'>
                          /mo
                        </span>
                      </span>
                    </div>
                    <div className='h-[60%] p-2 pb-6 flex flex-col'>
                      <ul
                        id='features'
                        className='flex flex-col space-y-[10px] items-center text-[12px] pt-6'
                      >
                        <li className=''>Full API access</li>
                        <li className=''>Custom checkout button</li>
                        <li className='text-center'>Around the clock customer service</li>
                        <li className=''>3% Per-sale Fee</li>
                      </ul>
                      <button
                        id='buy-plan'
                        className='mx-6 w-[120px] self-center text-center py-1 mt-6 bg-[#1d4ed8] text-white font-light rounded-md shadow-md shadow-[#cccccc]'
                      >
                        More
                      </button>
                    </div>
                  </div>
                  <div
                    id='plan-2'
                    className='w-52 h-[80%] bg-[#f4f8fa] rounded-md border-[#cccccc] border-1 shadow-[#cccccc] shadow-md hover:shadow-lg hover:shadow-[#999999] transition-shadow'
                  >
                    <div
                      id='top-title-price'
                      className='payment-top flex flex-col justify-center space-y-3 items-center rounded-t-md bg-[#fffbfc] border-b-[1px] border-[#cccccc] h-[40%]'
                    >
                      <span id='option-title' className='text-[24px]'>
                        Pro
                      </span>
                      <span id='price' className='space-x-[4px]'>
                        <span id='dollar-sign' className='text-[12px]'>
                          $
                        </span>
                        <span id='price' className='text-[#1d4ed8] font-medium text-[20px]'>
                          450
                        </span>
                        <span id='mo' className='text-[12px]'>
                          /mo
                        </span>
                      </span>
                    </div>
                    <div className='h-[60%] p-2 pb-6 flex flex-col'>
                      <ul
                        id='features'
                        className='flex flex-col space-y-6 items-center text-[12px] pt-6'
                      >
                        <li className=''>All Basic Plan Features</li>
                        <li className=''>Up to 3 smart contracts at a time</li>
                        <li className='text-center'>Custom webpages for minting, claiming, etc.</li>
                      </ul>
                      <button
                        id='buy-plan'
                        className='mx-6 w-[120px] self-center text-center py-1 mt-6 bg-[#46a6ff] text-gray-700 font-light rounded-md shadow-md shadow-[#cccccc]'
                      >
                        More
                      </button>
                    </div>
                  </div>
                  <div
                    id='plan-3'
                    className='mt-5 w-52 h-[80%] bg-[#f4f8fa] rounded-md border-[#cccccc] border-1 shadow-[#cccccc] shadow-md hover:shadow-lg hover:shadow-[#999999] transition-shadow'
                  >
                    <div
                      id='top-title-price'
                      className='payment-top flex flex-col justify-center space-y-3 items-center rounded-t-md bg-[#fffbfc] border-b-[1px] border-[#cccccc] h-[40%]'
                    >
                      <span id='option-title' className='text-[24px]'>
                        Enterprise
                      </span>
                      <span id='price' className='space-x-[4px]'>
                        <span id='dollar-sign' className='text-[12px]'>
                          $
                        </span>
                        <span id='price' className='text-[#1d4ed8] font-medium text-[20px]'>
                          900
                        </span>
                        <span id='mo' className='text-[12px]'>
                          /mo
                        </span>
                      </span>
                    </div>
                    <div className='h-[60%] p-2 pb-6 flex flex-col'>
                      <ul
                        id='features'
                        className='flex flex-col space-y-4 items-center text-[12px] pt-6'
                      >
                        <li className=''>Unlimited smart contracts</li>
                        <li className=''>Upgraded security</li>
                        <li className=''>No per-sale fee</li>
                        <li className='text-center'>Dedicated solutions specialist</li>
                      </ul>
                      <button
                        id='buy-plan'
                        className='mx-6 w-[120px] self-center text-center py-1 mt-6 bg-[#1d4ed8] text-white font-light rounded-md shadow-md shadow-[#cccccc]'
                      >
                        More
                      </button>
                    </div>
                  </div>
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
