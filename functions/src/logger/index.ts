import express from 'express'
import { loggerService } from './logger.service'

function logger(req: express.Request, res: express.Response, next: () => void) {

	const request = {
		timestamp: Date.now(),
		origin: req.headers.host,
		method: req.method,
		headers: req.headers,
		body: req.body,
		path: req.url
	}

	const response = {
		headers: res.getHeaders(),
		status: res.statusCode,
	}

	loggerService.logToFirebase(request, response)
	
	next()
}

export default logger