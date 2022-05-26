import Head from "next/head";
import Image from "next/image";

export default function SmartContractsArticle() {

	return (
    <>
      <Head>
        <meta name='description'>
          Why are Smart Contracts useful | A web3 guide to smart contracts
        </meta>
        <title>What is a smart contract? Reasons people utilize smart contracts | Quikmint</title>
      </Head>
      <main className='flex flex-col items-center p-12'>
        <div
          id='top-title'
          className='w-full flex flex-col md:flex-row justify-start md:space-x-[150px] items-start md:items-center mb-5'
        >
          <h1 className='text-[64px] mina'>Smart Contracts</h1>
          <h4 className='text-[32px] mina'>How can we utilize them?</h4>
        </div>
        <div id='body' className=''>
          <div className='float-left mr-5'>
            <Image src='/smart-contract.jpeg' alt='smart contract' width='500' height='400' />
          </div>
          <p className='text-[16px]'>
            “Smart contracts” is a term used to describe computer code that automatically executes
            all or parts of an agreement and is stored on a blockchain-based platform. As discussed
            further below, the code can either be the sole manifestation of the agreement between
            the parties or might complement a traditional text-based contract and execute certain
            provisions, such as transferring funds from Party A to Party B. The code itself is
            replicated across multiple nodes of a blockchain and, therefore, benefits from the
            security, permanence and immutability that a blockchain offers. That replication also
            means that as each new block is added to the blockchain, the code is, in effect,
            executed. If the parties have indicated, by initiating a transaction, that certain
            parameters have been met, the code will execute the step triggered by those parameters.
            If no such transaction has been initiated, the code will not take any steps. Most smart
            contracts are written in one of the programming languages directly suited for such
            computer programs, such as Solidity. <br />
            <br />
            At present, the input parameters and the execution steps for a smart contract need to be
            specific and objective. In other words, if “x” occurs, then execute step “y.” Therefore,
            the actual tasks that smart contracts are performing are fairly rudimentary, such as
            automatically moving an amount of cryptocurrency from one party{"'"}s wallet to another
            when certain criteria are satisfied. As the adoption of blockchain spreads, and as more
            assets are tokenized or go “on chain,” smart contracts will become increasingly complex
            and capable of handling sophisticated transactions. Indeed, developers already are
            stringing together multiple transaction steps to form more complex smart contracts.
            Nonetheless, we are, at the very least, many years away from code being able to
            determine more subjective legal criteria, such as whether a party satisfied a
            commercially reasonable efforts standard or whether an indemnifications clause should be
            triggered and the indemnity paid. <br />
            <br />
            Before a compiled smart contract actually can be executed on certain blockchains, an
            additional step is required, namely, the payment of a transaction fee for the contract
            to be added to the chain and executed upon. In the case of the Ethereum blockchain,
            smart contracts are executed on the Ethereum Virtual Machine (EVM), and this payment,
            made through the ether cryptocurrency, is known as “gas.” [1] The more complex the smart
            contract (based on the transaction steps to be performed), the more gas that must be
            paid to execute the smart contract. Thus, gas currently acts as an important gate to
            prevent overly complex or numerous smart contracts from overwhelming the EVM. [2] Smart
            contracts are presently best suited to execute automatically two types of “transactions”
            found in many contracts: (1) ensuring the payment of funds upon certain triggering
            events and (2) imposing financial penalties if certain objective conditions are not
            satisfied. In each case, human intervention, including through a trusted escrow holder
            or even the judicial system, is not required once the smart contract has been deployed
            and is operational, thereby reducing the execution and enforcement costs of the
            contracting process. <br />
            <br />
            As just one example, smart contracts could eliminate the so-called procure-to-pay gaps.
            When a product arrives and is scanned at a warehouse, a smart contract could immediately
            trigger requests for the required approvals and, once obtained, immediately transfer
            funds from the buyer to the seller. Sellers would get paid faster and no longer need to
            engage in dunning, and buyers would reduce their account payable costs. This could
            impact working capital requirements and simplify finance operations for both parties. On
            the enforcement side, a smart contract could be programmed to shut off access to an
            internet-connected asset if a payment is not received. For example, access to certain
            content might automatically be denied if payment was not received.
          </p>
        </div>
      </main>
    </>
  )
}