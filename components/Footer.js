import Image from 'next/image'
import Link from 'next/link'
export const Footer = () => {
  return (
      <nav
        className='flex flex-row items-center justify-between w-full py-4 md:py-0 
        px-4 text-lg text-white border-t-[1px] border-[#cccccc] bg-[#f4f8fa]
        shadow-lg transition-all delay-50 h-14 mt-0'
      >
        <div className='w-full md:items-center md:w-auto' id='menu'>
          <ul className='p--2 text-base flex md:justify-between md:pt-0 space-x-4'>
            <li className='h-6 w-6 relative hover:cursor-pointer'>
              <Link href='https://twitter.com/quikmint_io' passHref>
                <Image alt='social' src='/twitter.svg' layout='fill' objectFit='cover' />
              </Link>
            </li>
            <li className='h-6 w-6 relative hover:cursor-pointer'>
              <Link href='https://instagram.com/quikmint_io' passHref>
                <Image alt='social' src='/instagram.svg' layout='fill' objectFit='cover' />
              </Link>
            </li>
            <li className='h-6 w-6 relative hover:cursor-pointer'>
              <Link href='https://github.com/QuikMint/QuikMint' passHref>
                <Image alt='social' src='/github.svg' layout='fill' objectFit='cover' />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}
