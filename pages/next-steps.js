import Image from 'next/image'

export default function nextSteps() {
  return (
    <div className='mt-4'>
      <h1 className='ml-4 mb-4 text-6xl font-bold font-[Arial]'>What{"'"}s Next?</h1>
      <div id='content' className=''>
        <ul>
          <li className='first p-4 border-y-2 border-slate-500 h-[20rem] lg:h-[25rem]'>
            <span className='caps m-2'>1.</span>
            <h2 className='text-2xl font-bold mt-2'>Check your email inbox</h2>
            <p className='text-xl'>
              An email from <span className='text-lime-600 bg-neutral-100 p-1 rounded-md'>bonan@selfimonke.com</span> was sent to
              you.
              <br />
              It will contain a link for you to claim your SelfiMonke
            </p>
            <div id='img-container' className='max-w-[30rem] md:max-w-[45rem] lg:max-w-[60rem]'>
              <Image
                src='/1-email.png'
                alt='email-screenshot'
                width='100%'
                height='20%'
                layout='responsive'
                objectFit='contain'
                className='rounded-md'
              />
            </div>
            <p className='text-sm mt-2'>
              *Be sure to look in your spam/junk folder in case the email got misplaced
            </p>
          </li>

          <li className='p-4 bg-neutral-100 border-b-2 border-slate-500 h-[25rem] md:h-[30rem] lg:h-[37rem]'>
            <span className='caps m-2'>2.</span>
            <h2 className='text-2xl font-bold mt-2'>Open the claim link</h2>
            <p className='text-xl'>
              You will be redirected to a one-time-use claim page.{`\n`}
              <span className='text-red-600'>
                <br />
                <div id='img-container' className='max-w-[30rem] md:max-w-[45rem] lg:max-w-[60rem]'>
                  <Image
                    src='/2-link.png'
                    alt='link-screenshot'
                    width='100%'
                    height='50%'
                    layout='responsive'
                    objectFit='contain'
                    className='rounded-md'
                  />
                </div>
                <b>DO NOT SHARE THIS LINK WITH ANYONE</b>
              </span>
            </p>
            <p className='text-sm mt-2 pl-4'>*We are not responsible if your NFT gets stolen.</p>
          </li>

          <li className='p-4 bg-neutral-100 border-b-2 border-slate-500 h-96'>
            <span className='caps m-2'>3.</span>
            <h2 className='text-2xl font-bold mt-2'>Follow our intuitive minting process</h2>
            <p className='text-xl'>
              Within five minutes, all of the low-level blockchain transactions will be taken care
              of by our sophisticated API,{' '}
              <a className='text-blue-500 font-bold' href='/smpayments'>
                SMPayments
              </a>
            </p>
						<div className='h-44'/>
            <p className='text-sm mt-2 pl-4'>
              *For inquiries about the API, please contact{' '}
              <a className='text-blue-500' href='mailto:smpayments@selfimonke.com'>smpayments@selfimonke.com</a>
            </p>
            <div className='h-10'></div>
          </li>
        </ul>
      </div>
    </div>
  )
}
