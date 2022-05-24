import express from 'express';
import { customerController } from './customer.controller'

const customerRouter = express.Router()
const protectedCustomerRouter = express.Router()

import jwtCheck from '../config/oauth.config'
protectedCustomerRouter.use(jwtCheck)

customerRouter.get('/:id', customerController.getOne)

protectedCustomerRouter.get('/', customerController.getAll)

protectedCustomerRouter.post('/', customerController.create)

customerRouter.put('/:id', customerController.update)

protectedCustomerRouter.delete('/:id', customerController.remove)

customerRouter.use('/protected', protectedCustomerRouter)

export { customerRouter }