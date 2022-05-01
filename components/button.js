export default function BuyButton() {
	return (
    <div>
      <div className='flex flex-col hover:shadow-xl transition-all hover:cursor-pointer p-3 px-5 bg-green-500 hover:bg-green-400 rounded-md hover:px-8 hover:animate-bounce'>
        <div className='flex flex-row justify-between space-x-3'>
          <span className='text-2xl opacity-70'>Buy</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            className='w-4 opacity-20 justify-self-end'
          >
            <path d='M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z' />
          </svg>
          
        </div>
      </div>
      <span className='text-xs relative w-full opacity-40'>Powered by QuikMint</span>
    </div>
  )
}