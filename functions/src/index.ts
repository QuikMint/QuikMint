
import express from 'express'
const app = express();
import helmet from 'helmet'
import cors from 'cors'
import functions from 'firebase-functions'

app.use(cors())
app.use(helmet())
app.use(express.json())

/**
 * Endpoint Routing
 */

import { clientRouter } from './client'
app.use('/clients', clientRouter)

import { customerRouter } from './customer'
app.use('/customers', customerRouter)

import { webhookRouter } from './webhook'
app.use('/webhook', webhookRouter)

import { mintRouter } from './mint'
app.use('/mint', mintRouter)


export const qmtest = functions.https.onRequest(app)
