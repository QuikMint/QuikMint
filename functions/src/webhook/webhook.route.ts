import { webhookController } from './webhook.controller'
import express from 'express'

const webhookRouter = express.Router()

import jwtCheck from '../config/oauth.config'
webhookRouter.use(jwtCheck)

webhookRouter.post('/', webhookController.customerFromStripe)

export { webhookRouter }