import express from 'express'
import { customerService } from './customer.service'
import { Customer } from './customer.model'
import { v4 } from 'uuid'
import * as dotenv from 'dotenv'
dotenv.config()

async function getAll(req: express.Request, res: express.Response) {
  try {
    const docs = await customerService.getAll()
    res.status(200).json(docs)
  } catch (error) {
    res.status(500).json({ error: error })
      console.error(error)
  }
}

async function getOne(req: express.Request, res: express.Response) {
  try {
    const docData = await customerService.get(req.params.id)
    res.status(200).json(docData)
  } catch (error) {
    res.status(500).json({ error: error })
    console.error(error)
  }
}

async function create(req: express.Request, res: express.Response) {
  try {
    const customer: Customer = {
      created: Date.now(),
      id: v4(),
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      complete: false,
      changes: [],
    }

    await customerService.write(customer)
    res.status(200).send(customer)
  } catch (error) {
    res.status(500).json({ error: error })
    console.error(error)
  }
}
async function update(req: express.Request, res: express.Response) {
  try {
    const docData = await customerService.get(req.params.id)

    const updated: Customer = {
      created: docData.created || Date.now(),
      id: req.params.id,
      name: req.body.name || docData.name,
      email: req.body.email || docData.email,
      phone: req.body.phone || docData.phone,
      complete: req.body.complete || docData.complete,
      changes: [...(docData.changes || []), { time: Date.now(), changes: req.body }],
    }

    customerService.write(updated).then(() => res.status(200).json(updated))
  } catch (error) {
    res.status(500).json({ error: error })
    console.error(error)
  }
}
async function remove(req: express.Request, res: express.Response) {
  try {
    const docData = await customerService.get(req.params.id)
    try {
      await customerService.remove(req.params.id)
      res.status(200).json(docData)
    } catch (error) {
      res.status(500).json({ error: error })
      console.error(error)
    }
  } catch (error) {
    res.status(500).json({ error: error })
    console.error(error)
  }
}

export const customerController = { getAll, getOne, create, update, remove }