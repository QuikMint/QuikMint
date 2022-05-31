import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import { useAuth } from '../auth/AuthProvider'

export function ActionsDropdown() {
  const [active, setActive] = useState('/dashboard')
  const [open, setOpen] = useState(false)

  const router = useRouter()

  const dropdownRef = useRef()

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
    function handleClick(e) {
      if (dropdownRef && dropdownRef.current) {
        const ref = dropdownRef.current
        if (!ref.contains(e.target) && open) {
          setOpen(false)
        }
      }
    }
  })

  useEffect(() => {
    setActive(router.pathname)
  }, [router.pathname])

  function openClose() {
    setOpen(!open)
  }

  return (
    <div id='actions-dropdown'>
      <button
        id='actions-btn'
        className='flex flex-row items-center justify-around rounded-full border-[1px] border-[#635bff] pr-1 pl-2 text-[12px] transition-all hover:bg-[#635bff] hover:text-white hover:fill-white'
        aria-expanded='true'
        aria-haspopup='true'
        onClick={openClose}
      >
        actions
        <i className=''>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'>
            <path
              fillRule='evenodd'
              d='M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z'
            ></path>
          </svg>
        </i>
      </button>
      <div
        className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none  ${
          open ? 'transform opacity-100 scale-100' : 'transform hidden scale-95'
        }`}
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='menu-button'
        tabIndex='-1'
        ref={dropdownRef}
        disabled={!open}
      >
        <div className='py-1' role='none'>
          {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
          <Link href='/contract/new' role='menuitem' tabIndex='-1' id='menu-item-1'>
            <a
              className={`block px-4 py-2 text-sm ${
                active.indexOf('profile') > -1 ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              }`}
            >
              New Contract
            </a>
          </Link>
          <Link href='/dashboard/profile' role='menuitem' tabIndex='-1' id='menu-item-1'>
            <a
              className={`block px-4 py-2 text-sm ${
                active.indexOf('billing') > -1 ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              }`}
            >
              Edit Profile
            </a>
          </Link>
          <Link href='/dashboard/balances' role='menuitem' tabIndex='-1' id='menu-item-1'>
            <a
              className={`block px-4 py-2 text-sm ${
                active.indexOf('help') > -1 ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              }`}
            >
              Payouts
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export function TWUIDropdown() {
  const [active, setActive] = useState('/dashboard')
  const [open, setOpen] = useState(false)

	const router = useRouter()
  const { logout } = useAuth()

	useEffect(() => {
		setActive(router.pathname)
	}, [router.pathname])

  const dropdownRef = useRef()

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
    function handleClick(e) {
      if (dropdownRef && dropdownRef.current) {
        const ref = dropdownRef.current
        if (!ref.contains(e.target) && open) {
          setOpen(false)
        }
      }
    }
  })

	function openClose() {
    setOpen(!open)
  }

  function logOut() {
    logout()
  }

  return (
    <div id='copy-dropdown'>
      <button
        type='button'
        className='flex justify-center items-center p-1 text-gray-700'
        id='menu-button'
        aria-expanded='true'
        aria-haspopup='true'
        onClick={openClose}
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'>
          <path
            fillRule='evenodd'
            d='M2 4a1 1 0 100-2 1 1 0 000 2zm3.75-1.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM3 8a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z'
          ></path>
        </svg>
      </button>
      <div
        className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none  ${
          open ? 'transform opacity-100 scale-100' : 'transform hidden scale-95'
        }`}
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='menu-button'
        tabIndex='-1'
        ref={dropdownRef}
      >
        <div className='py-1' role='none'>
          {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
          <Link href='/dashboard/profile' role='menuitem' tabIndex='-1' id='menu-item-1'>
            <a
              className={`block px-4 py-2 text-sm ${
                active.indexOf('profile') > -1 ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              }`}
            >
              Profile
            </a>
          </Link>
          <Link href='/dashboard/billing' role='menuitem' tabIndex='-1' id='menu-item-1'>
            <a
              className={`block px-4 py-2 text-sm ${
                active.indexOf('billing') > -1 ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              }`}
            >
              Billing
            </a>
          </Link>
          <Link href='/help' role='menuitem' tabIndex='-1' id='menu-item-1'>
            <a
              className={`block px-4 py-2 text-sm ${
                active.indexOf('help') > -1 ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              }`}
            >
              Help
            </a>
          </Link>
        </div>
        <div className='py-1' role='none'>
          <Link href='/dashboard/settings' role='menuitem' tabIndex='-1' id='menu-item-4'>
            <a
              className={`block px-4 py-2 text-sm ${
                active.indexOf('settings') > -1 ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              }`}
            >
              Settings
            </a>
          </Link>
          <button
            className={`flex flex-row px-4 py-2 text-sm text-gray-700 w-full`}
            role='menuitem'
            tabIndex='-1'
            id='menu-item-5'
            onClick={logOut}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}
