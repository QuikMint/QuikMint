import express from 'express'
import { clientController } from './client.controller'

const clientRouter = express.Router()

import jwtCheck from '../config/oauth.config'
clientRouter.use(jwtCheck)

clientRouter.get('/:id', clientController.getOne)

clientRouter.get('/', clientController.getAll)

clientRouter.post('/', clientController.create)

clientRouter.put('/:id', clientController.update)

clientRouter.delete('/:id', clientController.remove)

export { clientRouter }
