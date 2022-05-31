import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../../utils/fire'
import { useState, useEffect } from 'react'
import { useAuth } from '../../../auth/AuthProvider'
import Loading from '../../../components/loading'
import DashNav from '../../../components/Navbar/dash'
import { Table } from 'react-bootstrap'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { withSetupUser } from '../../../auth/hooks'

function ContractDashboard() {
  const { currentUser } = useAuth()
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [contracts, setContracts] = useState([])
  const [userData, setUserData] = useState()

  useEffect(() => {
    const ref = doc(db, 'clients', currentUser.uid)
    getDoc(ref).then(snap => {
      //snap.data() works
      const data = snap.data()

      setUserData(data)

      data.contracts.forEach(c => {
				console.log(c)
        const contRef = doc(db, 'contracts', `${c}`)
        getDoc(contRef).then(cSnap => {
          const cData = cSnap.data()
          setContracts(contracts => [...contracts, cData])
        })
      })
      setLoading(false)
    })
  }, [currentUser.uid])

  function contractAddition() {
    router.push('/dashboard/contract/new')
  }

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
      <main className=''>
        {loading ? (
          <Loading />
        ) : (
          <>
            <DashNav userData={userData} />
            <div id='main' className='flex flex-row m-5 justify-between'>
              <div id='left' className='w-[16%]'>
                <div id='title' className=''>
                  asdf
                </div>
                <div id='txns' className=''></div>
              </div>
              <div id='right' className='flex flex-col items-center w-[1000px]'>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Total Supply</th>
                      <th>Minted</th>
                      <th>Created</th>
                      <th>Address</th>
                      <th>Owner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contracts.map((contract, i) => (
                      <tr key='1' className='text-xs text-center w-full'>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <button id='new contract' className='hover:stroke-black transition-all' onClick={contractAddition}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
                  <path d='M12.75 7.75a.75.75 0 00-1.5 0v3.5h-3.5a.75.75 0 000 1.5h3.5v3.5a.75.75 0 001.5 0v-3.5h3.5a.75.75 0 000-1.5h-3.5v-3.5z'></path>
                  <path
                    fillRule='evenodd'
                    d='M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z'
                  ></path>
                </svg>
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  )
}

export default withSetupUser(ContractDashboard)