import express from 'express'
import { clientService } from './client.service'
import { Client } from './client.model'
import { v4 } from 'uuid'
import * as dotenv from 'dotenv'
dotenv.config()

async function getAll(req: express.Request, res: express.Response) {
  try {
    const docs = await clientService.getAll()
    res.status(200).json(docs)
  } catch (error) {
    res.status(500).json({ error })
    console.error(error)
  }
}

async function getOne(req: express.Request, res: express.Response) {
  try {
    const docData = await clientService.get(req.params.id)
    res.status(200).json(docData)
  } catch (error) {
    res.status(500).json({ error })
    console.error(error)
  }
}

async function create(req: express.Request, res: express.Response) {
  try {
    const client: Client = {
      created: Date.now(),
      id: v4(),
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      changes: [],
    }

    await clientService.write(client)
    res.status(200).end()
  } catch (error) {
    res.status(500).json({ error })
    console.error(error)
  }
}
async function update(req: express.Request, res: express.Response) {
  try {
    const docData = await clientService.get(req.params.id)

    const updated: Client = {
      ...req.body,
      changes: [...(docData.changes || []), { timestamp: Date.now(), changes: req.body }],
    }

    clientService.write(updated).then(() => res.status(200).end())
  } catch (error) {
    res.status(500).json({ error })
    console.error(error)
  }
}
async function remove(req: express.Request, res: express.Response) {
  try {
    await clientService.get(req.params.id)
    try {
      await clientService.remove(req.params.id)
      res.status(200).end()
    } catch (error) {
      res.status(500).json({ error })
      console.error(error)
    }
  } catch (error) {
    res.status(500).json({ error })
    console.error(error)
  }
}

export const clientController = { getAll, getOne, create, update, remove }
