/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import { useEffect, useState } from 'react'
import { useAuth } from './AuthProvider'
import { useRouter } from 'next/router'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../utils/fire'
import Loading from '../components/loading'

/* user must exist 
  -- protected pages
    Kicks unauthorized users out of setup, dashboard or any pages that require only a login
*/
const withAuth = Component => props => {
  const { currentUser } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!currentUser) router.replace('/login')
  })

  return <>{currentUser ? <Component {...props} /> : <Loading />}</>
}

const withAdmin = Component => props => {
  const [loading, setLoading] = useState(true)

  const { currentUser } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!currentUser) {
      router.replace('/blog')
      return
    }
    const userRef = doc(db, 'clients', currentUser.uid)
    getDoc(userRef).then(doc => {
      if (doc.exists()) {
        if (doc.data().admin === true) setLoading(false)
        else router.replace('/blog')
      } else {
        console.log('no exist')
        router.push('/blog')
      }
    })
  })

  return <>{!loading ? <Component {...props} /> : <Loading />}</>
}

// authenticated.  DIFFERENT FROM PUBLIC. Essentially just redirects to dashboard if there's a user (login, signup, etc.)
const withoutAuth = Component => props => {
  const [loading, setLoading] = useState(true)

  const { currentUser } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (currentUser) {
      router.replace('/dashboard')
    }
    setLoading(false)
  })

  return <>{!loading ? <Component {...props} /> : <Loading />}</>
}

// authenticated and set up (dashboard)
const withSetupUser = Component => props => {
  const router = useRouter()
  const { currentUser } = useAuth()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!currentUser) {
      router.replace('/login')
      return
    }
    const ref = doc(db, 'clients', currentUser.uid)
    getDoc(ref).then(snap => {
      if (!snap.exists()) router.push('/setup')
    })
    setLoading(false)
  })

  return <>{!loading ? <Component {...props} /> : <Loading />}</>
}

// user must be authenticated but not set up (basically just for setup page)
const withNotSetupUser = Component => props => {
  const [loading, setLoading] = useState(true)

  const router = useRouter()
  const { currentUser } = useAuth()

  useEffect(() => {
    if (!currentUser) {
      router.replace('/login')
      return
    }
    const ref = doc(db, 'clients', currentUser.uid)
    getDoc(ref).then(snap => {
      if (snap.exists()) router.push('/dashboard')
    })
    setLoading(false)
  })

  return <>{!loading ? <Component {...props} /> : <Loading />}</>
}

export { withAuth, withoutAuth, withNotSetupUser, withSetupUser, withAdmin }
