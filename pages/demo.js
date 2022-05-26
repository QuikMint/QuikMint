import Head from 'next/head'
import Image from 'next/image'
import router from 'next/router'

export default function Demo(props) {
  const buyNFTs = () => {
    router.push('https://buy.stripe.com/test_9AQ5mJbLH0RsbPqfYY')
  }

  return (
    <>
      <Head>
        <title>Demo | Quikmint</title>
      </Head>
      <main className='flex flex-row justify-center mb-32 mt-20'>
        <div className='rounded-md p-4 md:p-10 space-y-2 w-[30rem] bg-[#f6f8fa] border-[1px] border-[#d8dee4]'>
          <h1 className='text-4xl text-center font-semibold mb-8 mt-8'>{props.demoName}</h1>
          <div className='justify-center flex relative'>
            <Image
              src='/monke.ico'
              alt='image no want load'
              width='700'
              height='700'
              className='mb-10 rounded-md shadow-lg'
            />
            <div className='absolute text-2xl text-white font-medium px-2 py-1 bottom-0 left-0 bg-blue-400 rounded-tr rounded-bl'>
              $100
            </div>
          </div>
          <button
            className='grid grid-rows-1 grid-cols-3 mt-2 w-full bg-green-500 hover:bg-green-600 transition-colors text-white py-4 px-4 rounded-md'
            onClick={buyNFTs}
          >
            <div></div>
            <span className=''>Buy</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
              className='w-4 mt-0.5 opacity-20 justify-self-end'
            >
              <path d='M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z' />
            </svg>
          </button>
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      demoName: 'SelfiMonke',
    },
  }
}
