
import Head from 'next/head'

export default function Checkmark (props) {
  return (
    <>
      <Head>
        <script async src='https://kit.fontawesome.com/66358b6226.js' crossOrigin='anonymous'></script>
      </Head>
      <div className='w-full h-full'>
        <div className='font-[Helvecta Nue] flex justify-center items-center text-3xl flex-nowrap flex-col'>
          <div className='fa fa-check-circle-o symbol'></div>
          <div className='font-[Helvecta Nue] flex justify-center items-center text-3xl flex-nowrap flex-col'>
            Thank you for purchasing SelfiMonke!
          </div>
          <div className='mt-4 text-2xl text-orange-600 text-center font-[avenir] font-light'>
            Your order has been received.
          </div>
          <div>
            <button className='text-[1rem] text-center'>
              Next steps <i className='fas fa-arrow-right'></i>
              <div className='hidden hover:visible w-5 h-5 bg-slate-300'></div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
