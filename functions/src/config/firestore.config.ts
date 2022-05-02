import { initializeApp, cert, ServiceAccount } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

import { serviceAccount } from './service-account.json'
const typedServiceAccount = serviceAccount as ServiceAccount

initializeApp({
  credential: cert(typedServiceAccount)
});

const db = getFirestore();
export default db