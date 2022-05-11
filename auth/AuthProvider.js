import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
  signOut,
  updatePassword,
  updateEmail,
  updateProfile,
} from 'firebase/auth'
import { useContext, createContext, useEffect, useState } from 'react'
import { auth, db } from '../utils/fire'
import { doc, setDoc } from 'firebase/firestore'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function emailPassLogin(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut(auth)
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }

  function updateEml(email) {
    return updateEmail(currentUser, email)
  }

  function updatePass(password) {
    return updatePassword(currentUser, password)
  }

  function googleLogin() {
    return signInWithRedirect(auth, new GoogleAuthProvider())
  }

  function setupUser(setupData) {
    const promises = []
    const userRef = doc(db, 'clients', currentUser.uid)
    promises.push(
      setDoc(
        userRef,
        {
         ...setupData,
          uid: currentUser.uid,
        },
        { merge: true }
      )
    )
    promises.push(updateProfile(currentUser, { displayName: setupData.name }))
    return Promise.all(promises)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    emailPassLogin,
    logout,
    signup,
    resetPassword,
    updateEml,
    updatePass,
    googleLogin,
    setupUser,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
