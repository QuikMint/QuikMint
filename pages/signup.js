import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { withoutAuth } from '../auth/hooks'
import { useAuth } from '../auth/AuthProvider'
import Link from 'next/link'

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
    if (email && password && name) {
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

  async function handleGoogleLogin() {
    try {
      await googleLogin()
			router.push('/setup')
    } catch {
      setError('login with Google failed')
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
          <label htmlFor='name'>Full Name</label>
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
          <button id='google-signin' onClick={handleGoogleLogin} className='w-min self-start p-3'>
            <svg
              className='w-5 h-5'
              viewBox='0 0 256 262'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              xlink='http://www.w3.org/1999/xlink'
              preserveAspectRatio='xMidYMid'
            >
              <g>
                <path
                  d='M255.878,133.451 C255.878,122.717 255.007,114.884 253.122,106.761 L130.55,106.761 L130.55,155.209 L202.497,155.209 C201.047,167.249 193.214,185.381 175.807,197.565 L175.563,199.187 L214.318,229.21 L217.003,229.478 C241.662,206.704 255.878,173.196 255.878,133.451'
                  fill='#4285F4'
                ></path>
                <path
                  d='M130.55,261.1 C165.798,261.1 195.389,249.495 217.003,229.478 L175.807,197.565 C164.783,205.253 149.987,210.62 130.55,210.62 C96.027,210.62 66.726,187.847 56.281,156.37 L54.75,156.5 L14.452,187.687 L13.925,189.152 C35.393,231.798 79.49,261.1 130.55,261.1'
                  fill='#34A853'
                ></path>
                <path
                  d='M56.281,156.37 C53.525,148.247 51.93,139.543 51.93,130.55 C51.93,121.556 53.525,112.853 56.136,104.73 L56.063,103 L15.26,71.312 L13.925,71.947 C5.077,89.644 0,109.517 0,130.55 C0,151.583 5.077,171.455 13.925,189.152 L56.281,156.37'
                  fill='#FBBC05'
                ></path>
                <path
                  d='M130.55,50.479 C155.064,50.479 171.6,61.068 181.029,69.917 L217.873,33.943 C195.245,12.91 165.798,0 130.55,0 C79.49,0 35.393,29.301 13.925,71.947 L56.136,104.73 C66.726,73.253 96.027,50.479 130.55,50.479'
                  fill='#EB4335'
                ></path>
              </g>
            </svg>
          </button>
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
