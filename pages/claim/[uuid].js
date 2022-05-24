import { useEffect, useState } from 'react'
import crypto from 'crypto'
import { Wallet } from 'ethers'
import { useRouter } from 'next/router'
import axios from 'axios'
import Loading from '../../components/loading'

const GetNFT = () => {
  /**
   * STATE -- Lots of issues. See {@link https://github.com/teoteo123/selfi-monke/blob/main/README.md}
   */

  // input disabling
  const [initiated, setInitiated] = useState(false)
  const [success, setSuccess] = useState(false)
  const [complete, setComplete] = useState(true)
  const [fetching, setFetching] = useState(true)

  //input handlers
  const [nerd, setNerd] = useState(false)
  const [mintLoading, setMintLoading] = useState(false)
  const [messages, setMessages] = useState([])

  //push message to UI console/message stack
  const pushMessage = message => {
    setMessages(messages => [...messages, message])
  }

  //show different form based on {{nerd}} state
  const FormSwitch = () => {
    return nerd ? <WithAddress /> : <WithoutAddress />
  }
  const handleFormSwitch = e => setNerd(e.target.checked)

  const router = useRouter()
  var uuid = router.query.uuid
  const v4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)

  /**
   * Load initial state from server
   */
  useEffect(() => {
    if (uuid !== undefined && v4.test(uuid)) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/customers/${uuid}`)
        .then(response => {
          setComplete(() => response.data.complete || response.data.initiated)
          setInitiated(() => {response.data.initiated})
          if (response.data.complete === undefined) {
            setComplete(() => true)
          }
          setFetching(() => false)
        })
    }
  }, [uuid, success])

  //output "All done" once {{success}} is true
  useEffect(() => {
    if (success === true) {
      setMintLoading(() => false)
    }
  }, [success])
  /**
   * @todo: add deep link redirect to Trust Wallet and/or other wallet providers
   */

  //Input and button form -- mint to existing wallet
  const WithAddress = () => {
    return (
      <form id='with-address' onSubmit={handleWithAddress}>
        <label htmlFor='address' className='mr-2 text-xl font-bold mb-1'>
          Existing wallet address:{' '}
        </label>
        <input
          id='address'
          name='address'
          className='appearance-none border border-green-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
          disabled={complete || mintLoading}
        />
        <button
          id='submit'
          type='submit'
          className=' disabled:cursor-not-allowed bg-green-500 hover:bg-green-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          disabled={complete || mintLoading}
        >
          Mint
        </button>
      </form>
    )
  }

  //Mints nft to wallet
  const serverMintInsecure = async address => {
    setMintLoading(() => true)
    const mintEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/mint/${uuid.toString()}`
    axios
      .post(mintEndpoint, {
        address: address,
      })
      .then(response => {
        pushMessage({ message: response.data.toString() })
        setSuccess(() => true)
        setMintLoading(() => false)
        pushMessage({ message: `Completed @ ${new Date().toLocaleString()}` })
      })
      .catch(() => {
        pushMessage({ error: true, message: `FATAL - exited @ ${new Date().toLocaleString()}` })
        setMintLoading(false)
      })
  }

  //Handle existing address
  const handleWithAddress = async e => {
    setInitiated(() => true)
    e.preventDefault()
    const validAddress = new RegExp(/^0x[a-fA-F0-9]{40}/)
    const address = e.target.address.value.toString().trim()

    if (!validAddress.test(address)) {
      pushMessage({ error: true, message: `${address} is not a valid address.` })
      return
    }
    serverMintInsecure(address)
    pushMessage({ message: `Initiated @ ${new Date().toLocaleString()}` })
  }
  //Button only form -- Generate wallet for customer
  const WithoutAddress = () => {
    return (
      <>
        <label className='mr-2 text-xl font-bold mb-1'>
          Generate a Private Key (Make a fresh wallet){' '}
        </label>
        <button
          disabled={complete || mintLoading} // change initiated to mintloading and add mintloading logic to withoutaddress only
          onClick={handleWithoutAddress}
          id='gen-private'
          className='bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          {complete ? 'You already claimed' : 'Generate'}
        </button>
      </>
    )
  }
  //Mint to new wallet
  const handleWithoutAddress = async () => {
    setInitiated(() => true)
    setMintLoading(() => true)
    pushMessage({ message: `Initiated @ ${new Date().toLocaleString()}` })
    const wallet = generatePk()
    pushMessage({
      message: `
    [PRIVATE KEY]: ${wallet.privateKey}\n
    [PUBLIC KEY]: ${wallet.publicKey}\n
    [ADDRESS]: ${wallet.address}
    `,
    })
    serverMintInsecure(wallet.address)
  }
  //creates a random eth private key client-side
  const generatePk = () => {
    const randSeed = () => {
      const buf = crypto.randomBytes(77)
      const seed = buf.toString('hex')

      return seed
    }

    const sha256 = crypto.createHash('sha256')
    const privateKey = sha256.update(randSeed()).digest('hex')
    const wallet = new Wallet(privateKey)
    //Penis cock nigga NIGGA They all die . Hang then
    return wallet
  }

  /**
   * Message box component
   */
  const OutputBox = () => {
    return (
      <div
        className={`p-2 bg-slate-200 h-full w-full ml-4 mr-4 rounded-xl flex justify-center shadow-lg m-2 space-even ${
          mintLoading || initiated || success ? 'visible' : 'hidden'
        }`}
      >
        <div className='m-2 bg-slate-800 w-full h-full rounded-md font-mono'>
          <div className='flex flex-row rounded-t-md bg-sky-700 text-white'>
            <p className='p-2 text-lg'>Transaction Updates</p>
            {mintLoading && <Loading />}
          </div>
          <div className='p-2 text-xl overflow-y-scroll scroll-smooth max-h-56'>
            {messages.map((v, i) => {
              return (
                <span
                  key={i}
                  className={`${v.error ? 'text-red-600' : 'text-lime-600'} order-${100 - i}`}
                >
                  {v.message}
                  <br />
                </span>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className='flex items-center flex-col m-2 mb-96'>
        <div
          id='cool-switch-lol'
          className={`flex items-center justify-center ${
            nerd ? 'bg-green-500' : 'bg-blue-500'
          } transition-all w-full p-4 rounded-md`}
        >
          <h3 className='font-bold'>Make me a wallet</h3>
          <label htmlFor='toggle' className='flex items-center cursor-pointer'>
            <div className='relative m-2 disabled:cursor-not-allowed'>
              <input
                disabled={complete || mintLoading}
                type='checkbox'
                id='toggle'
                className='sr-only'
                onClick={handleFormSwitch}
                checked={nerd}
              />
              <div className='block bg-gray-600 w-14 h-8 rounded-full'></div>
              <div className='dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition'></div>
            </div>
          </label>
          <h3 className='font-bold'>I have a wallet</h3>
        </div>

        <div
          id='main-form'
          className='bg-slate-200 h-full w-full xl:p-4 ml-4 mr-4 rounded-xl flex justify-center shadow-lg m-3 space-even'
        >
          <div className='bg-slate-400 p-2 rounded-md m-2'>
            {fetching ? (
              <>
                <p>One moment please</p>
                <Loading />
              </>
            ) : complete ? (
              "You've already claimed your NFT"
            ) : (
              <FormSwitch />
            )}
          </div>
        </div>
        <OutputBox />
      </div>
    </div>
  )
}

export default GetNFT
