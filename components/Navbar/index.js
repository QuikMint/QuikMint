import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { items } from './pages'

export const Navbar = () => {
  const router = useRouter()

  const [active, setActive] = useState()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setActive(() => router.pathname)
  }, [router.pathname])

  return (
    <div className='min-h-full'>
      <nav className='bg-gray-800'>
        <div className='mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex flex-row space-x-2 items-center'>
                <Image
                  height='40'
                  width='40'
                  src='/favicon.ico'
                  alt='Logo'
                />
                <p className='text-2xl text-white'>QuikMint</p>
              </div>
              <div className='hidden md:block' id='desktop menu'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  {items.map((item, i) => (
                    <Link href={item.path} key={i}>
                      <a
                        className={
                          active === item.path
                            ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                        }
                        aria-current='page'
                      >
                        {item.title}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              {/* Mobile menu button */}
              <button
                type='button'
                className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
                onClick={() => setOpen(() => !open)}
              >
                <span className='sr-only'>Open main menu</span>
                {/*
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            */}
                <svg
                  className={`${open ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
                {/*
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            */}
                <svg
                  className={`${open ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div className='md:hidden' id='mobile-menu'>
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${open ? 'block' : 'hidden'}`}>
            {items.map((item, i) => (
              <Link href={item.path} key={i}>
                <a
                  className={`
                ${
                  active === item.path
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium'
                } 
                block px-3 py-2 rounded-md text-base font-medium`}
                  aria-current='page'
                >
                  {item.title}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}
