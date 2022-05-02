import db from '../config/firestore.config'

function logToFirebase(request, response) {
	db.collection('logs')
    .add({
      request: request,
      response: response,
    })
    .then(docRef => {
      docRef.update({
        elapsed: Date.now() - request.timestamp,
      })
    })
}

export const loggerService = { logToFirebase }