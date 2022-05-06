import { useContext, createContext, useState } from "react";
import AuthService from "./AuthService";



const authContext = createContext()

export default function useAuth() {
  return useContext(authContext)
}


export function AuthProvider(props) {
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')

  async function loginWithGoogle() {
    const { error, user } = await AuthService.loginWithGoogle()
    setUser(() => user ?? null)
    setError(() => error ?? '')
  }

  async function logout() {
    await AuthService.logout()
    setUser(null)
  }
  const value = { user, error, loginWithGoogle, logout }

  return <authContext.Provider value={value} {...props} />
}