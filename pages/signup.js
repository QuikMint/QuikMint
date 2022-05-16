import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { withoutAuth } from '../auth/hooks'
import { useAuth } from '../auth/AuthProvider'
import Link from 'next/link'
import GoogleButton from '../components/google'

function Signup() {
  const { googleLogin, signup, currentUser } = useAuth()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
	const [name, setName] = useState()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  async function handleEmailPassSignup() {
    setLoading(true)
    if (!(email && password && name)) {
      setError('Please fill out required fields')
      setLoading(false)
      return
    }
    try {
      await signup(email, password)
			currentUser.updateProfile({
				displayName: name
			})
			router.push('/setup')
    } catch {
      setError('failed to sign up')
    }
  }

  return (
    <main className='flex flex-col items-center justify-center space-y-10 pt-20 mb-96'>
      <h1 className='text-3xl'>Sign Up</h1>
      <div
        id='auth-box'
        className='flex flex-col items-center justify-center w-96 h-full space-y-2 p-4 rounded-md bg-[#f6f8fa] border-[1px] border-[#d8dee4]'
      >
        {error && error}
        <div className='w-full space-y-2'>
          <label htmlFor='email'>Email address</label>
          <input
            id='email'
            value={email}
            onChange={e => setEmail(() => e.target.value)}
            className='w-full h-10 px-3 py-1 text-sm font-[Menlo] rounded-md shadow-inner shadow-slate-400'
          />
        </div>
        <div className='w-full space-y-2'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            value={name}
            onChange={e => setName(() => e.target.value)}
            className='w-full h-10 px-3 py-1 text-sm font-[Menlo] rounded-md shadow-inner shadow-slate-400'
          />
        </div>
        <div className='w-full space-y-2'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(() => e.target.value)}
            className='w-full h-10 px-3 py-1 text-sm font-[Menlo] rounded-md shadow-inner shadow-slate-400'
          />
        </div>
        <button
          id='sign-in'
          className='mt-2 px-4 py-1 w-full text-center font-semibold text-white shadow-md rounded-md hover:shadow-inner bg-blue-500'
          onClick={handleEmailPassSignup}
          disabled={loading}
        >
          Sign Up
        </button>
        <div className='flex flex-row items-center justify-start'>
          <span>Other Sign Up Options: </span>
          <GoogleButton />
        </div>
        <span className='flex flex-row w-full justify-start text-xs'>
          Already have an account?
          <Link href='/login'>
            <a className='text-blue-500 hover:text-blue-700 ml-1'>Log In</a>
          </Link>
        </span>
      </div>
    </main>
  )
}

export default withoutAuth(Signup)
