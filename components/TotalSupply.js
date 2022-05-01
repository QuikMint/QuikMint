import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { hasEthereum } from '../../selfi-monke/utils/ethereum'
import Minter from '../../selfi-monke/src/artifacts/contracts/Minter.sol/Minter.json'

export function TotalSupply() {
  // UI state
  const [loading, setLoading] = useState(true)
  const [totalMinted, setTotalMinted] = useState(0)
  const [maxTokens, setMaxTokens] = useState(0)

  useEffect(function () {
    async function fetchTotals() {
      if (!hasEthereum()) {
        console.log('Install MetaMask')
        setLoading(false)
        return
      }

      await getTotalSupply()

      setLoading(false)
    }
    fetchTotals()
  })

  // Get total supply of tokens from smart contract
  async function getTotalSupply() {
    try {
      // Interact with contract
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_MINTER_ADDRESS,
        Minter.abi,
        provider
      )
      const totalSupply = await contract.totalSupply()
      const maxSupply = await contract.MAX_TOKENS()

      setTotalMinted(totalSupply.toNumber())
      setMaxTokens(maxSupply)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 border hover:border-gray-300 focus:border-gray-300 rounded shadow-lg mt-3 p-4 flex items-center text-xs disabled:cursor-not-allowed">
      <p>Tokens minted: {loading ? 'Loading...' : `${totalMinted}/${maxTokens}`}</p>
    </div>
  )
}

// Get total supply of tokens from smart contract
async function getTotalSupply() {
  try {
    // Interact with contract
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_MINTER_ADDRESS,
      Minter.abi,
      provider
    )
    const totalSupply = await contract.totalSupply()
    const maxSupply = await contract.MAX_TOKENS()

    return totalSupply + '/' + maxSupply
  } catch (error) {
    alert(error)
  }
}

export { getTotalSupply }