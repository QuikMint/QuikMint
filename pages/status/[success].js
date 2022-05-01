import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faXmarkCircle, faHandPointRight } from '@fortawesome/free-regular-svg-icons'

export default function success() {

	const router = useRouter()
	const success = router.query.success === 'true' ? true : false

  return (
    <div className='w-full h-full mt-4'>
      <h1 className='text-5xl font-bold italic text-center'>ORDER STATUS:</h1>
      <div id='dynamic' className='m-4'>
        {success ? (
          <div
            id='success'
            className='font-[Helvecta Nue] flex justify-center items-center space-y-4 text-3xl flex-nowrap flex-col'
          >
            <div className='w-52 h-52'>
              <FontAwesomeIcon icon={faCheckCircle} className='text-lime-600' />
            </div>
            <div className='font-[Helvecta Nue] text-center text-3xl'>
              Thank you for purchasing SelfiMonke!
            </div>
            <div className='text-2xl text-orange-600 text-center font-[avenir] font-light'>
              Your order has been received.
            </div>
            <div>
              <a href='/next-steps' className='text-center text-2xl rounded-md bg-blue-300 p-4 flex flex-row space-x-4 items-center hover:cursor-pointer '>
                <p>Next steps</p>
                <div className='w-12 h-12'>
                  <FontAwesomeIcon icon={faHandPointRight} className='text-lime-600' />
                </div>
                <div className='hidden hover:visible w-5 h-5 bg-slate-300'></div>
              </a>
            </div>
          </div>
        ) : (
          <div
            id='failure'
            className='font-[Helvecta Nue] flex justify-center items-center space-y-4 text-2xl flex-nowrap flex-col'
          >
            <div className='w-52 h-52'>
              <FontAwesomeIcon icon={faXmarkCircle} className='text-red-600' />
            </div>
            <div className='font-[Helvecta Nue] text-center text-3xl'>
              There was an error while processing your order!
            </div>
            <div className='text-2xl text-orange-600 text-center font-[avenir] font-light'>
              Contact <b className='text-blue-400'>support@selfimonke.com</b> for more info and help
              with your order
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
