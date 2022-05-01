import { useRouter } from 'next/router'

export default function SideNav() {

	const router = useRouter()

	return (
    <div className='py-12 px-10 w-1/4'>
      <div id='logo-top' className='flex space-2 items-center border-b-2 pb-4'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-14 w-14 text-indigo-600'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </div>
        <div className='ml-3'>
          <h1 className='text-3xl font-bold text-indigo-600'>Selfi Monke</h1>
          <p className='text-center text-sm text-indigo-600 mt-1 font-serif'>Admin Console</p>
        </div>
      </div>

      <div className='mt-8'>
        <ul id='side-menu' className='space-y-10'>
          <li>
            <a
              href='/admin'
              className={`flex items-center text-sm font-semibold p-2 rounded-md ${
                router.asPath === '/admin' ? 'bg-indigo-50' : ''
              } text-gray-500 hover:text-indigo-600 transition duration-200`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 text-gray-400 mr-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z'
                />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a
              href='/admin/inquiries'
              className={`flex items-center text-sm font-semibold p-2 rounded-md ${
                router.asPath.match(/\/admin\/inquiries\/.*/) ? 'bg-indigo-50' : ''
              } text-gray-500 hover:text-indigo-600 transition duration-200`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 mr-4 text-gray-400 hover:text-indigo-600 transition duration-200'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z' />
              </svg>
              Activity
            </a>
          </li>
          <li>
            <a
              href='/admin/analytics'
              className={`flex items-center text-sm font-semibold p-2 rounded-md ${
                router.asPath === '/admin/analytics' ? 'bg-indigo-50' : ''
              } text-gray-500 hover:text-indigo-600 transition duration-200`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 mr-4 text-gray-400 hover:text-indigo-600 transition duration-200'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                />
              </svg>
              Library
            </a>
          </li>
          <li>
            <a
              href='/admin/settings'
              className={`flex items-center text-sm font-semibold p-2 rounded-md ${
                router.asPath === '/admin/settings' ? 'bg-indigo-50' : ''
              } text-gray-500 hover:text-indigo-600 transition duration-200`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 mr-4 text-gray-400 hover:text-indigo-600 transition duration-200'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
              Settings
            </a>
          </li>
        </ul>
      </div>
      <div className='flex mt-20 space-x-4 items-center'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-gray-400 hover:text-indigo-600 transition duration-200'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
            />
          </svg>
        </div>
        <a
          href='/'
          className='block font-semibold text-gray-500 hover:text-indigo-600 transition duration-200'
        >
          Logout
        </a>
      </div>
    </div>
  )
}