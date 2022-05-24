import express from 'express'
import { mintController } from './mint.controller'

const mintRouter = express.Router()

// import jwtCheck from '../config/oauth.config'
// mintRouter.use(jwtCheck)

mintRouter.post('/:id', mintController.mint)

export { mintRouter }