import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function DashNav({ userData }) {

	const [active, setActive] = useState('/dashboard')

	const router = useRouter()

	  useEffect(() => {
      setActive(router.pathname)
    }, [router.pathname])

	return (
    <>
      <div
        id='top'
        className='flex flex-row justify-between items-center px-5 h-[50px] bg-[#F6F8FA]'
      >
        <div id='left' className='flex flex-row space-x-2'>
          <div id='project-logo' className='rounded-full w-30 h-30'>
            {'a'}
          </div>
          <span id='project'>{userData.project}</span>
        </div>
        <div id='right' className='flex flex-row space-x-3 items-center '>
          <button
            id='actions-btn'
            className='flex flex-row items-center justify-around rounded-full border-[1px] border-[#635bff] pr-1 pl-2 text-[12px] transition-all hover:bg-[#635bff] hover:text-white hover:fill-white'
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
          <button id='notifications'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'>
              <path d='M4.243 4.757a3.757 3.757 0 115.851 3.119 6.006 6.006 0 013.9 5.339.75.75 0 01-.715.784H2.721a.75.75 0 01-.714-.784 6.006 6.006 0 013.9-5.34 3.753 3.753 0 01-1.664-3.118z'></path>
            </svg>
          </button>
          <button id='settings' className=''>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'>
              <path
                fillRule='evenodd'
                d='M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z'
              ></path>
            </svg>
          </button>
          <div id='dropdown' className='dropdown-hover flex flex-col'>
            <div className='flex flex-row w-full justify-end'>
              <button id='dropdown-btn' className=''>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'>
                  <path
                    fillRule='evenodd'
                    d='M2 4a1 1 0 100-2 1 1 0 000 2zm3.75-1.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM3 8a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z'
                  ></path>
                </svg>
              </button>
            </div>
            <ul id='dropdown-menu' className='dropdown-menu w-full flex-col hidden'>
              <li id='profile' className='accordion-row'>
                <i>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    width='16'
                    height='16'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z'
                    ></path>
                  </svg>
                </i>
                <span>Profile</span>
              </li>
              <li id='billing' className='accordion-row'>
                <i></i>
                <span>Billing</span>
              </li>
              <li id='help' className='accordion-row border-b-2 border-[#cccccc]'>
                <i></i>
                <span>Help</span>
              </li>
              <li id='settings' className='accordion-row'>
                <i></i>
                <span>Settings</span>
              </li>
              <li id='logout' className='accordion-row'>
                <i></i>
                <span>Log Out</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        id='dashboard-nav'
        className='flex flex-row items-center justify-start border-b-2 border-[#cccccc] h-[42px] mx-5 space-x-1'
      >
        <div className='w-20'>
          <Link href='/dashboard'>
            <a
              className={`${
                active === '/dashboard' ? 'bg-[#635BFF] text-white' : 'hover:bg-[#EBEEF1]'
              } flex flex-row justify-center text-[12px] rounded-full px-1 py-[2px]`}
              aria-current='page'
            >
              Home
            </a>
          </Link>
        </div>
        <div className='w-20'>
          <Link href='/dashboard/contract'>
            <a
              className={`${
                active === '/dashboard/contract' ? 'bg-[#635BFF] text-white' : 'hover:bg-[#EBEEF1]'
              } flex flex-row justify-center text-[12px] rounded-full px-1 py-[2px]`}
              aria-current='page'
            >
              Contract
            </a>
          </Link>
        </div>
        <div className='w-20'>
          <Link href='/dashboard/balances'>
            <a
              className={`${
                active === '/dashboard/balances' ? 'bg-[#635BFF] text-white' : 'hover:bg-[#EBEEF1]'
              } flex flex-row justify-center text-[12px] rounded-full px-1 py-[2px]`}
              aria-current='page'
            >
              Balances
            </a>
          </Link>
        </div>
        <div className='w-20'>
          <Link href='/dashboard/customers'>
            <a
              className={`${
                active === '/dashboard/customers' ? 'bg-[#635BFF] text-white' : 'hover:bg-[#EBEEF1]'
              } flex flex-row justify-center text-[12px] rounded-full px-1 py-[2px]`}
              aria-current='page'
            >
              Customers
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}