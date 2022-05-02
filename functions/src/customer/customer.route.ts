import express from 'express';
import { customerController } from './customer.controller'

const customerRouter = express.Router()

import jwtCheck from '../config/oauth.config'
customerRouter.use(jwtCheck)

customerRouter.get('/:id', customerController.getOne)

customerRouter.get('/', customerController.getAll)

customerRouter.post('/', customerController.create)

customerRouter.put('/:id', customerController.update)

customerRouter.delete('/:id', customerController.remove)

export { customerRouter }