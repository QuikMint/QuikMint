import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { hasEthereum, requestAccount } from '../utils/ethereum'

export default function Wallet() {
  // UI state
  const [loading, setLoading] = useState(true)
  const [connected, setConnected] = useState(false)
  const [message, setMessage] = useState('Connect wallet')

  // First load
  useEffect(() => {
    async function fetchConnectedAccount() {
      if (!hasEthereum()) {
        setMessage('Install MetaMask')
        setLoading(false)
        return
      }
      await setConnectedAccount()
      setLoading(false)
    }
    fetchConnectedAccount()
  }, [])

  // Account changes
  useEffect(() => {
    async function listenMMAccount() {
      if (!hasEthereum()) return
      window.ethereum.on('accountsChanged', async function (accounts) {
        if (accounts && accounts[0]) {
          setMessage(accounts[0])
        } else {
          setConnected(false)
          setMessage('Connect wallet')
        }
      })
    }

    listenMMAccount()
  }, [])

  // Request connection to wallet
  async function requestConnection() {
    try {
      await requestAccount()
    } catch (error) {
      if (error.message) setMessage(error.message)
    }
  }

  // Set address of connected wallet
  async function setConnectedAccount() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const address = await signer.getAddress()

      if (address) {
        setConnected(true)
        setMessage(address)
      }
    } catch {
      setMessage('Connect wallet')
    }
  }

  // Handle connect wallet click
  async function handleConnectWallet() {
    setLoading(true)

    await requestConnection()
    await setConnectedAccount()

    setLoading(false)
  }

  return (
    <button
      className='transition-colors hidden-mobile bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 border
                hover:border-gray-300 focus:border-gray-300 rounded shadow-lg p-2 items-center justify-center
                text-xs text-black disabled:cursor-not-allowed lg:flex'
      onClick={handleConnectWallet}
      disabled={connected || message === 'Install MetaMask'}
    >
      {!loading ? (
        <>
          <span
            className={
              connected
                ? 'rounded-full h-2 w-2 block ml-2 mr-2 bg-green-500'
                : 'rounded-full h-2 w-2 block mr-2 bg-red-500'
            }
          />
          <p className='hidden'>{message}</p>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </button>
  )
}
