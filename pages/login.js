import { useState } from 'react'
import { useRouter } from 'next/router'
import { withoutAuth } from '../auth/hooks'
import { useAuth } from '../auth/AuthProvider'
import Link from 'next/link'
import GoogleButton from '../components/google'

function Login(props) {
	const { emailPassLogin } = useAuth()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

	const router = useRouter()

  async function handleEmailPassLogin() {
    setLoading(true)
    if (email === '' && password === '') {
      setError('Please enter email and password')
      setLoading(false)
      return
    }
    try {
      await emailPassLogin(email, password)
      router.push('/setup')
    } catch {
      setError('failed to login')
    }
  }

  return (
    <main className='flex flex-col items-center justify-center space-y-10 pt-20 mb-96'>
      <h1 className='text-3xl'>Log In</h1>
      <div
        id='auth-box'
        className='flex flex-col items-center justify-center w-96 h-full space-y-2 p-4 rounded-md bg-[#f6f8fa] border-[1px] border-[#d8dee4]'
      >
        {error && <span className='text-red-400'>error</span>}
        <div className='w-full space-y-2'>
          <label htmlFor='email'>email address</label>
          <input
            id='email'
            value={email}
            onChange={e => setEmail(() => e.target.value)}
            className='w-full h-10 px-3 py-1 text-sm font-[Menlo] rounded-md shadow-inner shadow-slate-400'
          />
        </div>
        <div className='w-full space-y-2'>
          <label htmlFor='email'>password</label>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(() => e.target.value)}
            className='w-full h-10 px-3 py-1 text-sm font-[Menlo] rounded-md shadow-inner shadow-slate-400'
          />
        </div>
        <button
          id='sign-in'
          className='mt-2 px-4 py-1 w-full text-center font-semibold text-white shadow-md rounded-md hover:shadow-inner bg-[#4ca54c]'
          onClick={handleEmailPassLogin}
          disabled={loading}
        >
          Sign In
        </button>
        <div className='flex flex-row items-center justify-start'>
          <span>Other Sign In Options: </span>
          <GoogleButton />
        </div>
        <span className='flex flex-row w-full justify-start text-xs'>
          Need an account?
          <Link href='/signup'>
            <a className='text-blue-500 hover:text-blue-700 ml-1'>Sign Up</a>
          </Link>
        </span>
      </div>
    </main>
  )
}

export default withoutAuth(Login)

export async function getStaticProps() {
  return {
    props: {
      prop: 'hello'
    }
  }
}