import Web3 from 'web3'
import Provider from '@truffle/hdwallet-provider'
import { AbiItem } from 'web3-utils'
import Minter from '../contract/MyToken.json'

async function mintHdWeb3(address: string) {
  console.log('[ INITIATED ]')
  try {
    const provider = new Provider(process.env.CONTRACT_OWNER, process.env.INFURA_RPC)
    const web3 = new Web3(provider)
    const networkId = await web3.eth.net.getId()
    const contract = new web3.eth.Contract(
      Minter.abi as AbiItem[],
      Minter.networks[networkId].address
    )
    const receipt = contract.methods
      .quikMint(address)
      .send({ from: process.env.CONTRACT_OWNER_ADDRESS })
    console.log(`[ SUCCESS ] - Transaction hash: ${receipt.transactionHash}`)
    return { success: true, receipt: receipt }
  } catch (err) {
    console.log(`[ FAILURE ] - ${err}`)
    return { success: false }
  }
}

//WORKS! as of 3/17/2022 @2:18PM
async function mintWeb3(address: string) {
  try {
    const web3InfuraProvider = new Web3.providers.HttpProvider(process.env.INFURA_RPC)
    const web3 = new Web3(web3InfuraProvider)

    const account = web3.eth.accounts.privateKeyToAccount(process.env.CONTRACT_OWNER)

    try {
      // Interact with contract
      const minterContract = new web3.eth.Contract(
        Minter.abi as AbiItem[],
        process.env.MINTER_ADDRESS
      )

      const nonce = await web3.eth.getTransactionCount(account.address, 'latest')
      const data = minterContract.methods.gift(address).encodeABI()

      var rawTransaction = {
        from: account.address,
        to: process.env.MINTER_ADDRESS,
        data: data, //contract.methods.methodName(parameters).encodeABI
        nonce: nonce,
        gas: 500000,
        gasLimit: 0,
        maxPriorityFeePerGas: 2999999987,
      }

      const estimate = await web3.eth.estimateGas(rawTransaction)
      rawTransaction.gasLimit = estimate

      let sign = await web3.eth.accounts.signTransaction(rawTransaction, process.env.CONTRACT_OWNER)

      const signedTx = sign.rawTransaction
      if (process.env.NODE_ENV !== 'production') console.log(signedTx)

      const sent = web3.eth.sendSignedTransaction(signedTx)

      return { success: true, receipt: sent }
    } catch (err) {
      console.error(err)
      return { success: false }
    }
  } catch (err) {
    console.error(err)
    return { success: false }
  }
}

export const mintService = { mintWeb3, mintHdWeb3 }
