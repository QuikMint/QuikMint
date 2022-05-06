import { initializeApp, cert, ServiceAccount } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

import { serviceAccount } from './service-account.json'
const typedServiceAccount = serviceAccount as ServiceAccount

const app = initializeApp({
  credential: cert(typedServiceAccount)
});

const db = getFirestore(app)
export default db
export { app }