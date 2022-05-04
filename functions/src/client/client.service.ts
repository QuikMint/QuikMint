import db from '../config/firestore.config'
import { Client } from './client.model'

async function get(id: string): Promise<FirebaseFirestore.DocumentData> {
  const doc = await db.collection('clients').doc(id).get()
  let client: FirebaseFirestore.DocumentData = doc.data()

  return client
}

async function getAll(): Promise<FirebaseFirestore.DocumentData[]> {
  const snap = await db.collection('clients').get()
  let clients: FirebaseFirestore.DocumentData[] = []
  snap.docs.map((doc, i) => {
    clients[i] = doc.data()
  })
  return clients
}

function write(client: Client) {
  return db.collection('clients').doc(client.id).set(client)
}

function update(client: any): Promise<FirebaseFirestore.WriteResult> {
  return db.doc(`/clients/${client.id}`).update(client)
}

function remove(id: string) {
  return db.collection('clients').doc(id).delete()
}

async function exists(id: string) {
  const doc = await db.doc(`/clients/${id}`).get()
  return doc.exists
}

async function rejectUUID(id: string) {
  const exists = await clientService.exists(id)
  if (!exists) {
    return true
  }
  return false
}

export const clientService = { get, getAll, write, update, remove, exists, rejectUUID }
