import Head from "next/head";
import Link from "next/link";

function QuikMint(props) {
  return (
    <>
      <Head>
        <title>Quikmint | Mint NFTs with ease</title>
      </Head>
      <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-14 mb-60'>
        <h1 className='text-6xl text-blue-600 my-6 rounded-lg bg-indigo-100 p-4 w-min'>QuikMint</h1>
        <div className='sm:text-center lg:text-left'>
          <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
            <span className='block xl:inline'>Make your NFT accessible </span>
            <span className='block text-indigo-600 xl:inline'>to the average person</span>
          </h1>
          <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
            With our services, you can take card payments for crypto assets, bridging the gap
            between blockchain and centralized finance. Take your NFT collection to the next level
            with QuikMint.
          </p>
          <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
            <div className='rounded-md shadow'>
              <Link href='/contact'>
                <a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'>
                  {' '}
                  Get started{' '}
                </a>
              </Link>
            </div>
            <div className='mt-3 sm:mt-0 sm:ml-3'>
              <Link href='/demo'>
                <a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10'>
                  {' '}
                  Live demo{' '}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default QuikMint

export function getStaticProps() {
  return {
    props: {
      prop: 'hello'
    }
  }
}