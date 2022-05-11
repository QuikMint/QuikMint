/* eslint-disable react/display-name */
import { useEffect } from 'react'
import { useAuth } from './AuthProvider'
import { useRouter } from 'next/router'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../utils/fire' 

const withAuth = Component => props => {
  const { currentUser } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!currentUser) router.replace('/login') //or /login real app
  })

  return <>{currentUser ? <Component {...props} /> : <></>}</>
}

const withoutAuth = Component => props => {
	const { currentUser } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (currentUser) router.replace('/dashboard')
  })

  return <>{!currentUser ? <Component {...props} /> : <></>}</>
}

const withNotSetupUser = Component => props => {
  const { currentUser } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!currentUser) router.replace('/login') //or /login real app

    const ref = doc(db, 'clients', currentUser.uid)
    getDoc(ref).then(doc => {
      if (doc.exists) router.push('/dashboard')
    })
  })

  return <>{currentUser ? <Component {...props} /> : <></>}</>
}

export { withAuth, withoutAuth, withNotSetupUser }
