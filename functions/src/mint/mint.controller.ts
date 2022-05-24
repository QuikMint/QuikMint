import express from 'express'
import { customerService } from '../customer'
import { mintService } from './mint.service'
import dotenv from 'dotenv'
dotenv.config()

async function mint(req: express.Request, res: express.Response) {
  const id = req.params.id
  const address = req.body.address

  if (await customerService.rejectUUID(id)) {
    res.status(400).end(JSON.stringify({ error: `ID ${id} not recognized` }))
    return
  }

  customerService.update({
    id: id,
    initiated: true,
  })

  let docData = await customerService.get(id)
  if (docData.complete || docData.initiated) {
    res.status(400).end(JSON.stringify({ error: 'You can only claim once' }))
    return
  }
  const mint = await mintService.mintHdWeb3(address)
  mint.receipt
    .once('transactionHash', hash => {
      res.write(JSON.stringify({ hash }))
    })
    .on('confirmation', confNumber => {
      if (confNumber === 1) {
        res.status(200).end(JSON.stringify({ status: '1 blockchain confirmation' }))
        customerService.update({
          id: id,
          complete: true,
        })
        return
      }
    })
    .on('error', () => {
      customerService.update({
        id: id,
        initiated: false,
      })
      res.status(500).end(JSON.stringify({ error: 'Mint Error' }))
      return
    })
    .catch(e => {
      customerService.update({
        id: id,
        initiated: false,
      })
      res.status(500).end(e)
    })
}

export const mintController = { mint }
